# Kingdom Business Holdings: corporate website

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Resend.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
npm run lint && npm run typecheck && npm run build
```

Without Resend keys, the contact form logs enquiries to the console in development. In production it reports a send failure rather than silently dropping mail.

## Editing content (no component changes)

| File | Controls |
| --- | --- |
| `content/site.ts` | Name, URL, address, email, phone, navigation |
| `content/portfolio.ts` | Companies, sector, status, role, website, logo. Percentages only show with `showStake: true` |
| `content/partners.ts` | Relationships. Logo shown only if `logoApproved: true`. Entries with `confirmed: false` are hidden in production |
| `content/team.ts` | Leadership cards |
| `content/founder.ts`, `about.ts`, `philosophy.ts`, `sectors.ts` | Page copy |

Photography: see `public/images/README.md`. Files dropped in with the listed names are picked up at build time.

### Finding what is still unfinished

```bash
grep -rnE "\[\[|CONFIRM" content app components public/images/README.md
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel: **Add New → Project**, import the repository. Framework preset: Next.js (auto-detected).
3. Add environment variables (Production and Preview):
   - `NEXT_PUBLIC_SITE_URL`: final domain, e.g. `https://www.yourdomain.com`
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`: inbox that receives enquiries
   - `CONTACT_FROM_EMAIL`: sender on a domain verified in Resend (add the SPF/DKIM records Resend provides)
4. Deploy, then attach the custom domain under **Settings → Domains**.

## Architecture notes

- All pages are statically generated. Only the contact server action runs on demand, so `output: "export"` is **not** used (static export does not support server actions). If a fully static host is ever required, replace the action with a Route Handler or a form service.
- Spam control: hidden honeypot field plus an in-memory rate limit (3 per 10 minutes per IP, `lib/ratelimit.ts`). In-memory counters are per serverless instance; for strict limits swap in Upstash Ratelimit.
- Design language: engraved security-print (banknote / bond certificate). Fonts: Libre Caslon Display (headlines), Hanken Grotesk (text), DM Mono (labels). `components/Guilloche.tsx` generates a unique rosette per company slug, so portfolio tiles need no photography. `components/Logo.tsx` holds the placeholder seal and wordmark; replace `<Seal />` to swap the identity.
- Colour use: gold (`#B08D57`) is 2.7:1 on ivory and is therefore decorative there. Text on ivory uses `gold-ink` (5.3:1) or `stone-dark` (6.3:1). See `tailwind.config.ts`.
- Security headers are set in `next.config.mjs`. Add a CSP once analytics (if any) is chosen.
