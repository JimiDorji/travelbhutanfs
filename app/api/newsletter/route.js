// app/api/newsletter/route.js
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
});

export async function POST(request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email required' },
                { status: 400 }
            );
        }

        // 1. Save to database (optional - if you want to store subscribers)
        // await prisma.newsletter.create({ data: { email } });

        // 2. Send confirmation email to subscriber
        await transporter.sendMail({
            from: `"Alpine Odyssey" <${process.env.SMTP_FROM_EMAIL}>`,
            to: email,
            subject: 'Welcome to Alpine Odyssey Newsletter!',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #0b4f6c 0%, #0891b2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">Welcome to Alpine Odyssey! 🇧🇹</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #333;">Thank you for subscribing to our newsletter!</p>
            
            <p style="font-size: 16px; color: #333;">You'll now receive:</p>
            <ul style="color: #333;">
              <li>✨ Exclusive Bhutan travel offers</li>
              <li>🏔️ Festival and event announcements</li>
              <li>📚 Travel guides and tips</li>
              <li>🌿 Sustainable tourism updates</li>
            </ul>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
            
            <p style="font-size: 14px; color: #666;">
              Warm regards,<br />
              <strong>The Alpine Odyssey Team</strong>
            </p>
          </div>
        </div>
      `,
        });

        // 3. Send notification to you (optional)
        await transporter.sendMail({
            from: `"Alpine Odyssey" <${process.env.SMTP_FROM_EMAIL}>`,
            to: process.env.RECIPIENT_EMAIL,
            subject: 'New Newsletter Subscriber',
            html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
        });

        return NextResponse.json(
            { message: 'Subscribed successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Newsletter error:', error);
        return NextResponse.json(
            { error: 'Failed to subscribe' },
            { status: 500 }
        );
    }
}