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

    /* ------------------ EMAIL 1: TO AGENCY ------------------ */
    const agencyEmailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0b4f6c;">New Travel Inquiry from ${first_name} ${last_name}</h2>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Full Name:</td>
              <td style="padding: 10px;">${first_name} ${last_name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Phone:</td>
              <td style="padding: 10px;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Travel Dates:</td>
              <td style="padding: 10px;">${start_date || 'Flexible'} to ${end_date || 'Flexible'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f3f4f6; font-weight: bold;">Message:</td>
              <td style="padding: 10px;">${message}</td>
            </tr>
          </table>

          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Sent from Alpine Odyssey contact form • ${new Date().toLocaleString()}
          </p>
        </div>
        `;

    /* ------------------ EMAIL 2: AUTO-REPLY TO CUSTOMER ------------------ */
    const customerEmailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0b4f6c;">Thank You for Your Inquiry</h2>

          <p>Dear ${first_name} ${last_name},</p>

          <p>
            Thank you for contacting <strong>Alpine Odyssey</strong>. 
            We have successfully received your inquiry and appreciate your interest in visiting Bhutan.
          </p>

          <p>
            Our travel specialists are currently reviewing your request. 
            You can expect a personalized response within <strong>24 hours</strong>.
          </p>

          <p>
            If your inquiry is urgent, please feel free to contact us directly:
            <br/>
            📞 +975 77652012 <br/>
            📧 alpineodyssey.bt@gmail.com
          </p>

          <br/>
          <p>
            Warm regards,<br/>
            <strong>Alpine Odyssey Team</strong><br/>
            Thimphu, Bhutan
          </p>
        </div>
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
    try {
      await transporter.sendMail({
        from: `"Alpine Odyssey" <${process.env.SMTP_FROM_EMAIL}>`,
        to: email,
        subject: "Thank You for Contacting Alpine Odyssey",
        html: customerEmailContent,
      });
    } catch (autoReplyError) {
      console.error('Customer auto-reply failed:', autoReplyError);
      // Do not fail the request if auto-reply fails
    }

    return NextResponse.json(
      { message: 'Inquiry received and emails processed successfully!' },
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
