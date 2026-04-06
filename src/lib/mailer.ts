/**
 * ZeptoMail transactional email sender — v7.0.2
 * Docs: https://www.zoho.com/zeptomail/help/api/node-js-sdk.html
 */
import { SendMailClient } from "zeptomail";

const ZEPTO_URL   = "api.zeptomail.com/";
const ZEPTO_TOKEN = process.env.ZEPTOMAIL_TOKEN as string;
const FROM_EMAIL  = process.env.FROM_EMAIL || "hello@footactiq.com";
const FROM_NAME   = process.env.FROM_NAME  || "Footactiq";

if (!ZEPTO_TOKEN) {
  console.warn("⚠️  ZEPTOMAIL_TOKEN is not set — emails will be skipped.");
}

const client = ZEPTO_TOKEN
  ? new SendMailClient({ url: ZEPTO_URL, token: ZEPTO_TOKEN })
  : null;

/* ─────────────────────────── public helpers ─────────────────────────── */

export async function sendWelcomeEmail(toEmail: string): Promise<void> {
  if (!client) {
    console.log(`[mailer] No token — skipping welcome email to ${toEmail}`);
    return;
  }

  await client.sendMail({
    from: { address: FROM_EMAIL, name: FROM_NAME },
    to: [
      {
        email_address: {
          address: toEmail,
          name: toEmail.split("@")[0],
        },
      },
    ],
    subject: "You're on the Footactiq early access list! ⚽",
    htmlbody: welcomeHtml(toEmail),
    textbody: welcomeText(),
  });
}

export async function sendAdminNotification(toEmail: string): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!client || !adminEmail) return;

  await client.sendMail({
    from: { address: FROM_EMAIL, name: FROM_NAME },
    to: [{ email_address: { address: adminEmail, name: "Admin" } }],
    subject: `🆕 New Footactiq signup: ${toEmail}`,
    htmlbody: `<p style="font-family:sans-serif;">New early-access signup:<br/><strong>${toEmail}</strong></p>`,
    textbody: `New early-access signup: ${toEmail}`,
  });
}

/* ─────────────────────────── email templates ─────────────────────────── */

function welcomeHtml(email: string): string {
  const name = email.split("@")[0];
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#0A192F;font-family:Helvetica,Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

      <!-- Header -->
      <tr>
        <td style="background:#111827;border-radius:16px 16px 0 0;padding:28px 40px;border-bottom:1px solid rgba(255,255,255,0.06);">
          <span style="color:#fff;font-weight:900;font-size:22px;letter-spacing:0.1em;text-transform:uppercase;">
            ⚽ Footactiq
          </span>
        </td>
      </tr>

      <!-- Body -->
      <tr>
        <td style="background:#111827;padding:48px 40px;">
          <p style="color:#10B981;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 16px;">
            🎉 You&apos;re In!
          </p>
          <h1 style="color:#fff;font-size:30px;font-weight:900;margin:0 0 20px;line-height:1.2;text-transform:uppercase;">
            Welcome to the<br/>Footactiq Early Access List
          </h1>
          <p style="color:rgba(255,255,255,0.6);font-size:15px;line-height:1.7;margin:0 0 32px;">
            Hey ${name},<br/><br/>
            You&apos;re officially on the waitlist for Footactiq —
            AI-powered tactical analysis built for clubs just like yours.
            We&apos;ll be in touch before the public launch.
          </p>

          <!-- What to expect -->
          <div style="background:#0A192F;border-radius:12px;padding:24px 28px;margin-bottom:32px;border-left:3px solid #3B82F6;">
            <p style="color:#fff;font-weight:700;font-size:14px;margin:0 0 14px;">What happens next:</p>
            <p style="color:rgba(255,255,255,0.55);font-size:14px;line-height:2;margin:0;">
              ✅&nbsp; Invite sent before public launch<br/>
              ✅&nbsp; Founding members get 30% lifetime discount<br/>
              ✅&nbsp; Priority onboarding &amp; dedicated support<br/>
              ✅&nbsp; Access to the private beta community
            </p>
          </div>

          <a href="${process.env.NEXT_PUBLIC_APP_URL || "https://footactiq.com"}"
             style="display:inline-block;background:#3B82F6;color:#fff;font-weight:700;font-size:15px;padding:16px 32px;border-radius:12px;text-decoration:none;">
            Visit Footactiq →
          </a>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#0d1f3c;border-radius:0 0 16px 16px;padding:20px 40px;border-top:1px solid rgba(255,255,255,0.05);">
          <p style="color:rgba(255,255,255,0.3);font-size:12px;margin:0;">
            You received this because you signed up at footactiq.com.<br/>
            © ${year} Footactiq. All rights reserved.
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function welcomeText(): string {
  return `Welcome to Footactiq Early Access!

You're on the waitlist. Here's what happens next:
- Invite sent before the public launch
- Founding members get 30% lifetime discount
- Priority onboarding & dedicated support

Visit: ${process.env.NEXT_PUBLIC_APP_URL || "https://footactiq.com"}

© ${new Date().getFullYear()} Footactiq`;
}
