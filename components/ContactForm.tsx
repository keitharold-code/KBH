"use client";

import { useActionState } from "react";
import { ENQUIRY_TYPES as TYPES } from "@/lib/enquiry";
import { submitEnquiry, type FormState } from "@/app/contact/actions";

const initial: FormState = { ok: false, message: "" };

const field =
  "mt-1 w-full rounded-none border-0 border-b border-ink/30 bg-transparent px-0 py-3 font-display text-2xl text-ink transition-colors duration-500 focus:border-ink focus:outline-none focus-visible:border-b-2 focus-visible:border-gold-ink";
const label = "label block text-stone-dark";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitEnquiry, initial);
  const e = state.errors ?? {};
  const v = state.values;

  if (state.ok) {
    return (
      <div role="status" className="border-t border-ink pt-8">
        <p className="font-display text-4xl leading-tight">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="space-y-8">
      {/* Honeypot: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="type" className={label}>Enquiry type</label>
        <select id="type" name="type" required defaultValue={v?.type ?? ""} aria-invalid={!!e.type} aria-describedby={e.type ? "type-err" : undefined} className={field}>
          <option value="" disabled>Select</option>
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {e.type && <p id="type-err" className="mt-2 text-sm text-red-800">{e.type}</p>}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" defaultValue={v?.name} autoComplete="name" required aria-invalid={!!e.name} aria-describedby={e.name ? "name-err" : undefined} className={field} />
          {e.name && <p id="name-err" className="mt-2 text-sm text-red-800">{e.name}</p>}
        </div>
        <div>
          <label htmlFor="organisation" className={label}>Organisation <span className="normal-case tracking-normal">(optional)</span></label>
          <input id="organisation" name="organisation" defaultValue={v?.organisation} autoComplete="organization" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" name="email" defaultValue={v?.email} type="email" autoComplete="email" required aria-invalid={!!e.email} aria-describedby={e.email ? "email-err" : undefined} className={field} />
        {e.email && <p id="email-err" className="mt-2 text-sm text-red-800">{e.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className={label}>Message</label>
        <textarea id="message" name="message" defaultValue={v?.message} rows={6} required aria-invalid={!!e.message} aria-describedby={e.message ? "message-err" : undefined} className={field} />
        {e.message && <p id="message-err" className="mt-2 text-sm text-red-800">{e.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-stone-dark">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-ink" aria-invalid={!!e.consent} />
          <span>
            I consent to KBH processing these details in order to respond, as described in the{" "}
            <a href="/legal/privacy" className="underline underline-offset-4 hover:text-ink">Privacy Policy</a>.
          </span>
        </label>
        {e.consent && <p className="mt-2 text-sm text-red-800">{e.consent}</p>}
      </div>

      <div aria-live="polite">
        {state.message && !state.ok && <p className="text-sm text-red-800">{state.message}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="label inline-flex items-center gap-4 border border-ink bg-ink px-9 py-5 text-ivory transition-colors duration-700 ease-quart hover:bg-transparent hover:text-ink disabled:opacity-60"
      >
        {pending ? "Sending" : "Send enquiry"}
      </button>
    </form>
  );
}
