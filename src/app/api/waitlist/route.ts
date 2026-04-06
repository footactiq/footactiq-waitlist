import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.ZEPTOMAIL_HOST,
  port: Number(process.env.ZEPTOMAIL_PORT),
  secure: true,
  auth: {
    user: process.env.ZEPTOMAIL_USER,
    pass: process.env.ZEPTOMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // fixes self-signed certificate error
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, club, level } = await req.json();

    if (!name || !email || !level) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Save to MongoDB
    const client = await clientPromise;
    const db = client.db("footactiq");
    await db.collection("waitlist").insertOne({
      name,
      email,
      club,
      level,
      createdAt: new Date(),
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: "You're on the Footactiq Early Access List!",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
</head>
<body style="margin:0;padding:0;background:#060912;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#060912;padding:48px 16px 64px;">
    <tr><td align="center">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

      <!-- Logo -->
      <tr><td align="center" style="padding-bottom:40px;">
        <span style="font-size:22px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;">
          Foot<span style="color:#2563eb;">actiq</span>
        </span>
      </td></tr>

      <!-- Hero -->
      <tr><td style="background:linear-gradient(135deg,#0f1a35,#0f1623);border:1px solid rgba(255,255,255,0.08);border-radius:20px 20px 0 0;padding:56px 48px 48px;text-align:center;">
        
        <!-- Check icon -->
        <table cellpadding="0" cellspacing="0" style="margin:0 auto 32px;">
          <tr><td style="width:64px;height:64px;background:linear-gradient(135deg,#2563eb,#1d4ed8);border-radius:50%;text-align:center;vertical-align:middle;font-size:28px;color:#fff;">
            ✓
          </td></tr>
        </table>

        <h1 style="margin:0 0 14px;font-size:30px;font-weight:900;color:#ffffff;letter-spacing:-0.03em;line-height:1.15;">
          You're in, ${name.split(" ")[0]}.
        </h1>
        <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.45);line-height:1.8;max-width:360px;margin:0 auto;">
          Your spot on the Footactiq early access list is locked in. We'll reach out the moment the doors open.
        </p>
      </td></tr>

      <!-- Email badge -->
      <tr><td style="background:#0d1420;border-left:1px solid rgba(255,255,255,0.08);border-right:1px solid rgba(255,255,255,0.08);padding:20px 48px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.25);letter-spacing:0.08em;text-transform:uppercase;padding-bottom:6px;">
              Registered email
            </td>
          </tr>
          <tr>
            <td style="font-size:15px;font-weight:700;color:#3b82f6;">
              ${email}
            </td>
          </tr>
        </table>
      </td></tr>

      <!-- Steps -->
      <tr><td style="background:#0f1623;border:1px solid rgba(255,255,255,0.08);border-top:none;border-radius:0 0 20px 20px;padding:32px 48px 40px;">
        
        <p style="font-size:11px;font-weight:700;color:rgba(255,255,255,0.25);letter-spacing:0.08em;text-transform:uppercase;margin:0 0 24px;">
          What happens next
        </p>

        ${[
          ["1", "Check your inbox", "This email is your confirmation — keep it safe."],
          ["2", "We review applications", "Coaches are prioritised by level and region."],
          ["3", "Your invite arrives", "Full access instructions land in your inbox."],
        ].map(([num, title, desc]) => `
        <table cellpadding="0" cellspacing="0" style="margin-bottom:20px;width:100%;">
          <tr>
            <td valign="top" style="padding-right:16px;width:36px;">
              <div style="width:32px;height:32px;background:rgba(37,99,235,0.15);border:1px solid rgba(37,99,235,0.25);border-radius:8px;text-align:center;line-height:32px;font-size:13px;font-weight:800;color:#3b82f6;">
                ${num}
              </div>
            </td>
            <td valign="middle">
              <p style="margin:0 0 3px;font-size:14px;font-weight:700;color:#ffffff;">${title}</p>
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.35);line-height:1.6;">${desc}</p>
            </td>
          </tr>
        </table>
        `).join("")}

        <!-- CTA -->
        <table cellpadding="0" cellspacing="0" style="margin-top:32px;width:100%;">
          <tr><td align="center">
            <a href="https://footactiq.com" style="display:inline-block;padding:14px 40px;background:#2563eb;color:#ffffff;font-size:14px;font-weight:700;border-radius:12px;text-decoration:none;letter-spacing:-0.01em;">
              Visit Footactiq →
            </a>
          </td></tr>
        </table>

      </td></tr>

      <!-- Footer -->
      <tr><td align="center" style="padding:36px 0 0;">
        <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.15);line-height:2;">
          You're receiving this because you signed up at footactiq.com<br/>
          © ${new Date().getFullYear()} Footactiq · All rights reserved.
        </p>
      </td></tr>

    </table>
    </td></tr>
  </table>

</body>
</html>
`,
    });

    // Notify admin
    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_FROM,
      subject: `New Waitlist Signup — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px;">
          <h3>New Early Access Signup</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Club:</strong> ${club || "—"}</p>
          <p><strong>Coaching Level:</strong> ${level}</p>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}