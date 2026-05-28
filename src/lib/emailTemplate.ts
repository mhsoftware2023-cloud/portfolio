export function buildContactEmail(fields: Record<string, string>): string {
  const rows = Object.entries(fields)
    .map(
      ([key, value]) => `
      <tr>
        <td style="padding:12px 16px;background:#f9fafb;border-bottom:1px solid #e5e7eb;
                   font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;
                   letter-spacing:0.05em;width:140px;vertical-align:top;">
          ${key}
        </td>
        <td style="padding:12px 16px;border-bottom:1px solid #e5e7eb;
                   font-size:15px;color:#111827;vertical-align:top;white-space:pre-wrap;">
          ${value}
        </td>
      </tr>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0"
             style="background:#ffffff;border-radius:12px;overflow:hidden;
                    box-shadow:0 1px 3px rgba(0,0,0,0.1);max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:#111827;padding:32px 40px;">
            <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
              mh<span style="color:#9ca3af;">software</span>
            </p>
            <p style="margin:8px 0 0;font-size:13px;color:#9ca3af;">New contact form submission</p>
          </td>
        </tr>

        <!-- Fields -->
        <tr>
          <td style="padding:32px 40px 8px;">
            <p style="margin:0 0 20px;font-size:16px;font-weight:600;color:#111827;">
              You have a new message 👋
            </p>
            <table width="100%" cellpadding="0" cellspacing="0"
                   style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
              ${rows}
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:24px 40px 40px;">
            <a href="mailto:${fields["Email"] ?? fields["Correo electrónico"] ?? ""}"
               style="display:inline-block;padding:12px 24px;background:#111827;color:#ffffff;
                      text-decoration:none;border-radius:8px;font-size:14px;font-weight:600;">
              Reply to sender
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;background:#f9fafb;border-top:1px solid #e5e7eb;">
            <p style="margin:0;font-size:12px;color:#9ca3af;">
              Sent from the contact form at mhsoftware.dev
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
