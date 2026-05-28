# Contact Form — Resend Email Integration

The contact form sends emails via [Resend](https://resend.com), a developer-friendly email API with a free tier of **3,000 emails/month** (100/day).

## How it works

1. User fills out the contact form and submits
2. The form POSTs a JSON payload to `/api/contact`
3. The API route builds a styled HTML email from the form fields
4. Resend delivers the email to `mhsoftware2023@gmail.com`

The email template is **dynamic** — it loops over whatever key/value pairs are sent. Adding or removing fields from the form automatically reflects in the email with no template changes needed.

## Files involved

| File | Purpose |
|------|---------|
| `src/app/api/contact/route.ts` | API route — receives form data, calls Resend |
| `src/lib/emailTemplate.ts` | Builds the HTML email from form fields |
| `src/components/Contact.tsx` | Contact form — POSTs labeled fields to the API |
| `.env.local` | Holds the Resend API key (gitignored) |

## Local setup

### 1. Create a Resend account

Go to [resend.com](https://resend.com) and sign up for free. No credit card required.

### 2. Get your API key

- In the Resend dashboard, go to **API Keys**
- Click **Create API Key**
- Copy the key (it starts with `re_`)

### 3. Configure environment variables

Create a `.env.local` file in the project root (already gitignored):

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=your@email.com
```

### 4. Restart the dev server

```bash
npm run dev
```

## Production deployment (Vercel)

Environment variables must be added in the Vercel dashboard — `.env.local` is not deployed.

1. Go to your project on [vercel.com](https://vercel.com)
2. **Settings → Environment Variables**
3. Add:
   - `RESEND_API_KEY` → your Resend API key
   - `CONTACT_TO_EMAIL` → `mhsoftware2023@gmail.com`
4. Redeploy

## Using a custom sender domain (optional)

By default, emails are sent from `onboarding@resend.dev` (Resend's shared domain). This works immediately but may land in spam for some providers.

To send from your own domain (e.g. `hello@mhsoftware.dev`):

1. In the Resend dashboard, go to **Domains → Add Domain**
2. Add the DNS records Resend provides to your domain registrar
3. Wait for verification (usually a few minutes)
4. Update the `from` field in `src/app/api/contact/route.ts`:

```ts
from: "mhsoftware <hello@mhsoftware.dev>",
```

## Adding or removing form fields

The email template is fully dynamic. To add a new field:

1. Add the field label keys to both `src/dictionaries/en.json` and `src/dictionaries/es.json` under `contact.form`
2. Add the `<input>` or `<textarea>` to `src/components/Contact.tsx`
3. Add the field to the `fields` object in the `handleSubmit` function using the translated label as the key:

```ts
const fields: Record<string, string> = {
  [dict.form.name]: data.get("name") as string,
  [dict.form.email]: data.get("email") as string,
  [dict.form.subject]: data.get("subject") as string,
  [dict.form.message]: data.get("message") as string,
  [dict.form.phone]: data.get("phone") as string, // ← new field
};
```

The email will automatically include the new row — no changes to `emailTemplate.ts` needed.

## Free tier limits

| Plan | Emails/month | Emails/day |
|------|-------------|------------|
| Free | 3,000 | 100 |
| Pro  | 50,000+ | Unlimited |

For a portfolio contact form, the free tier is more than sufficient.
