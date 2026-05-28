import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { buildContactEmail } from "@/lib/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = process.env.CONTACT_TO_EMAIL ?? "mhsoftware2023@gmail.com";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // body is a plain object of { fieldLabel: value } — works with any form shape
  const fields: Record<string, string> = body;

  const subject =
    fields["Subject"] ?? fields["Asunto"] ?? "New contact form message";

  const { error } = await resend.emails.send({
    from: "mhsoftware <onboarding@resend.dev>", // change to your verified domain later
    to: TO,
    subject,
    html: buildContactEmail(fields),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
