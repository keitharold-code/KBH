"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import { ENQUIRY_TYPES } from "@/lib/enquiry";
import { rateLimit } from "@/lib/ratelimit";


export interface FormState {
  ok: boolean;
  message: string;
  errors?: Partial<Record<"name" | "email" | "type" | "message" | "consent", string>>;
  /** Echoed back on failure because React resets uncontrolled fields after an action. */
  values?: { name: string; organisation: string; email: string; type: string; message: string };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function submitEnquiry(_prev: FormState, form: FormData): Promise<FormState> {
  // Honeypot: real visitors never see or fill this field. Pretend success to bots.
  if (String(form.get("website") ?? "").trim() !== "") {
    return { ok: true, message: "Thank you. Your enquiry has been received." };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (!rateLimit(`contact:${ip}`)) {
    return { ok: false, message: "Too many submissions. Please try again later." };
  }

  const name = String(form.get("name") ?? "").trim();
  const organisation = String(form.get("organisation") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const type = String(form.get("type") ?? "");
  const message = String(form.get("message") ?? "").trim();
  const consent = form.get("consent") === "on";

  const errors: NonNullable<FormState["errors"]> = {};
  if (name.length < 2 || name.length > 120) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = "Please enter a valid email address.";
  if (!(ENQUIRY_TYPES as readonly string[]).includes(type)) errors.type = "Please select an enquiry type.";
  if (message.length < 10 || message.length > 5000) errors.message = "Please enter a message of at least 10 characters.";
  if (!consent) errors.consent = "Your consent is required so that we may reply.";
  if (Object.keys(errors).length) return { ok: false, message: "Please correct the highlighted fields.", errors, values: { name, organisation, email, type, message } };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Resend not configured; enquiry logged only:", { name, email, type });
      return { ok: true, message: "Thank you. Your enquiry has been received." };
    }
    console.error("[contact] Missing RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL");
    return { ok: false, message: "We could not send your enquiry at this time. Please try again later.", values: { name, organisation, email, type, message } };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[${type}] Website enquiry from ${name.replace(/[\r\n]+/g, " ")}`,
      text: `Type: ${type}\nName: ${name}\nOrganisation: ${organisation || "-"}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>${esc(type)}</strong> enquiry</p><p>${esc(name)}${organisation ? `, ${esc(organisation)}` : ""}<br>${esc(email)}</p><p style="white-space:pre-wrap">${esc(message)}</p>`,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("[contact] send failed", err);
    return { ok: false, message: "We could not send your enquiry at this time. Please try again later.", values: { name, organisation, email, type, message } };
  }
  return { ok: true, message: "Thank you. Your enquiry has been received, and we will respond in due course." };
}
