// app/api/send-email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  pool: true,
});

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      first_name,
      last_name,
      email,
      phone,
      start_date,
      end_date,
      message,
    } = body;

    if (!first_name || !last_name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const travelDates = `${start_date || 'Flexible'} → ${end_date || 'Flexible'}`;

    /* ------------------------------------------------------------------ */
    /* EMAIL 1: TO AGENCY (Professional Internal Notification)             */
    /* ------------------------------------------------------------------ */
    const agencyEmailContent = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:30px 0;font-family:Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">
        
        <!-- Header -->
        <tr>
          <td style="background:#0b4f6c;padding:22px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:600;letter-spacing:1px;">
              Alpine Odyssey
            </h1>
            <p style="color:#d1e7f1;margin:6px 0 0;font-size:13px;">
              New Travel Inquiry • ${new Date().toLocaleDateString()}
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:28px;">
            
            <h2 style="margin:0 0 18px;color:#0b4f6c;font-size:18px;border-bottom:1px solid #e5e7eb;padding-bottom:10px;">
              Client Details
            </h2>

            <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;border-collapse:collapse;">
              <tr>
                <td style="padding:12px;background:#f8fafc;font-weight:600;width:150px;border-bottom:1px solid #e5e7eb;">Full Name</td>
                <td style="padding:12px;border-bottom:1px solid #e5e7eb;">${first_name} ${last_name}</td>
              </tr>
              <tr>
                <td style="padding:12px;background:#f8fafc;font-weight:600;border-bottom:1px solid #e5e7eb;">Email</td>
                <td style="padding:12px;border-bottom:1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color:#0b4f6c;text-decoration:none;font-weight:500;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px;background:#f8fafc;font-weight:600;border-bottom:1px solid #e5e7eb;">Phone</td>
                <td style="padding:12px;border-bottom:1px solid #e5e7eb;">
                  ${phone ? `<a href="tel:${phone}" style="color:#0b4f6c;text-decoration:none;">${phone}</a>` : '<span style="color:#94a3b8;">Not provided</span>'}
                </td>
              </tr>
              <tr>
                <td style="padding:12px;background:#f8fafc;font-weight:600;border-bottom:1px solid #e5e7eb;">Travel Dates</td>
                <td style="padding:12px;border-bottom:1px solid #e5e7eb;">${travelDates}</td>
              </tr>
            </table>

            <!-- Message -->
            <div style="margin-top:20px;background:#f8fafc;border-radius:6px;padding:16px;">
              <h4 style="margin:0 0 8px;color:#0b4f6c;font-size:15px;">Client Message</h4>
              <p style="margin:0;font-size:14px;line-height:1.6;color:#334155;">
                "${message}"
              </p>
            </div>

            <p style="margin-top:24px;font-size:12px;color:#64748b;text-align:center;border-top:1px solid #e5e7eb;padding-top:15px;">
              Received on ${new Date().toLocaleString()}
            </p>

          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

    /* ------------------------------------------------------------------ */
    /* EMAIL 2: AUTO-REPLY TO CUSTOMER (Elegant & Professional)            */
    /* ------------------------------------------------------------------ */
    const customerEmailContent = `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:30px 0;font-family:Helvetica,Arial,sans-serif;">
  <tr>
    <td align="center">
      <table width="620" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e5e7eb;">
        
        <!-- Header -->
        <tr>
          <td style="background:#0b4f6c;padding:28px;text-align:center;">
            <h1 style="color:#ffffff;margin:0;font-size:26px;font-weight:600;">
              Alpine Odyssey
            </h1>
            <p style="color:#d1e7f1;margin:8px 0 0;font-size:14px;">
              Bespoke Bhutan Travel Experiences
            </p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 32px;color:#333333;">
            
            <h2 style="margin:0 0 10px;font-size:22px;color:#0b4f6c;">
              Thank You for Your Inquiry
            </h2>

            <p style="font-size:16px;margin:0 0 20px;">
              Dear ${first_name} ${last_name},
            </p>

            <p style="font-size:16px;line-height:1.7;margin:0 0 20px;">
              Thank you for contacting <strong>Alpine Odyssey</strong>. 
              We have received your travel inquiry and truly appreciate your interest in exploring Bhutan with us.
            </p>

            <p style="font-size:16px;line-height:1.7;margin:0 0 20px;">
              Our travel specialists are currently reviewing your request. 
              You can expect a personalized response within <strong>24 hours</strong>.
            </p>

            <!-- Contact Info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin:25px 0;">
              <tr>
                <td align="center" style="padding:15px;background:#f8fafc;border-radius:6px;">
                  <p style="margin:0 0 6px;font-size:15px;color:#0b4f6c;font-weight:600;">
                    Need immediate assistance?
                  </p>
                  <p style="margin:4px 0;font-size:15px;">
                    Phone: <a href="tel:+97577652012" style="color:#0b4f6c;text-decoration:none;">+975 77652012</a>
                  </p>
                  <p style="margin:4px 0;font-size:15px;">
                    Email: <a href="mailto:alpineodyssey.bt@gmail.com" style="color:#0b4f6c;text-decoration:none;">alpineodyssey.bt@gmail.com</a>
                  </p>
                </td>
              </tr>
            </table>

            <p style="font-size:16px;line-height:1.7;margin:0 0 25px;">
              We look forward to crafting a memorable Himalayan journey tailored to your preferences.
            </p>

            <p style="font-size:15px;margin:0;">
              Warm regards,<br/>
              <strong style="color:#0b4f6c;">The Alpine Odyssey Team</strong><br/>
              <span style="color:#64748b;">Thimphu, Bhutan</span>
            </p>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f1f5f9;text-align:center;padding:18px;font-size:12px;color:#64748b;">
            © ${new Date().getFullYear()} Alpine Odyssey • Sustainable Bhutan Travel Experiences
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
`;

    /* -------- Send email to AGENCY -------- */
    await transporter.sendMail({
      from: `"Alpine Odyssey" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Travel Inquiry from ${first_name} ${last_name}`,
      html: agencyEmailContent,
    });

    /* -------- Send AUTO-REPLY to CUSTOMER -------- */
    await transporter.sendMail({
      from: `"Alpine Odyssey" <${process.env.SMTP_FROM_EMAIL}>`,
      to: email,
      replyTo: process.env.RECIPIENT_EMAIL,
      subject: "Thank You for Contacting Alpine Odyssey",
      html: customerEmailContent,
    });

    return NextResponse.json(
      { message: 'Inquiry received and emails sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
