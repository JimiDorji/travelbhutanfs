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

        const { first_name, last_name, email, phone, start_date, end_date, message } = body;

        if (!first_name || !last_name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // EMAIL 1: To YOU (agency) with inquiry details
        const agencyEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0b4f6c;">New Travel Inquiry from ${first_name} ${last_name}</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; background: #f3f4f6; font-weight: bold; width: 120px;">Full Name:</td>
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
            <td style="padding: 10px;">${start_date || 'Not specified'} to ${end_date || 'Not specified'}</td>
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

        // EMAIL 2: To CUSTOMER (auto-reply thank you)
        const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #0b4f6c 0%, #0891b2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Contacting Us!</h1>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="font-size: 16px; line-height: 1.6; color: #333;">Dear ${first_name} ${last_name},</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            Thank you for reaching out to <strong>Alpine Odyssey</strong>. We have received your inquiry and are excited to help you plan your journey to Bhutan!
          </p>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0b4f6c; margin-top: 0;">We've received your inquiry for:</h3>
            <p style="margin: 5px 0;">📅 Travel Dates: ${start_date || 'Flexible'} - ${end_date || 'Flexible'}</p>
            <p style="margin: 5px 0;">📧 Contact: ${email}</p>
            <p style="margin: 5px 0;">📞 Phone: ${phone || 'Not provided'}</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            One of our Bhutan travel specialists will review your inquiry and get back to you within <strong>24 hours</strong> with personalized recommendations.
          </p>
          
          <div style="background: #e6f7ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0891b2;">
            <p style="margin: 0; font-weight: bold; color: #0b4f6c;">✨ What happens next?</p>
            <p style="margin: 5px 0 0 0; color: #333;">We'll send you a customized itinerary based on your interests, along with information about accommodations, guides, and sustainable travel options.</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            In the meantime, feel free to:
          </p>
          <ul style="color: #333;">
            <li>📖 Browse our <a href="https:travelbhutan.tours" style="color: #0891b2;">tour packages</a></li>
            <li>📞 Call us directly at +975 77652012</li>
            <li>💬 Follow us on social media for Bhutan travel inspiration</li>
          </ul>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
          
          <p style="font-size: 14px; color: #666; text-align: center;">
            Warm regards,<br />
            <strong style="color: #0b4f6c;">The Alpine Odyssey Team</strong><br />
            <span style="font-size: 12px;">Olakha, Thimphu, Bhutan</span>
          </p>
          
          <div style="text-align: center; margin-top: 20px;">
            <a href="https://yourwebsite.com" style="color: #0891b2; text-decoration: none; margin: 0 10px;">Website</a> | 
            <a href="#" style="color: #0891b2; text-decoration: none; margin: 0 10px;">Facebook</a> | 
            <a href="#" style="color: #0891b2; text-decoration: none; margin: 0 10px;">Instagram</a>
          </div>
        </div>
      </div>
    `;

        // Send email to AGENCY
        await transporter.sendMail({
            from: `"Alpine Odyssey" <${process.env.SMTP_FROM_EMAIL}>`,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: `New Travel Inquiry from ${first_name} ${last_name}`,
            html: agencyEmailContent,
        });

        // Send AUTO-REPLY to CUSTOMER
        await transporter.sendMail({
            from: `"Alpine Odyssey" <${process.env.SMTP_FROM_EMAIL}>`,
            to: email, // Send to the customer's email
            subject: "Thank You for Contacting Alpine Odyssey!",
            html: customerEmailContent,
        });

        return NextResponse.json(
            { message: 'Emails sent successfully!' },
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