import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try{
        const { email, name, subject, message} = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },

            tls: {
                rejectUnauthorized: false,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `[Contact Form] ${subject}`,
            text: `
            Name: ${name}
            Email: ${email}
            Message : ${message}`,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `, // fallback kalau client email tidak support HTML
            html: `
                <table style="width:100%; background-color:#f4f4f4; padding:20px; font-family:Arial,sans-serif;">
                    <tr>
                        <td align="center">
                        <table style="max-width:600px; background:#ffffff; border-radius:8px; padding:20px; border:1px solid #e0e0e0;">
                            
                            <!-- Header -->
                            <tr>
                            <td style="border-bottom:1px solid #e0e0e0; padding-bottom:10px; margin-bottom:20px;">
                                <h2 style="margin:0; color:#222; font-size:20px; font-weight:600;">
                                New Contact Form Submission
                                </h2>
                            </td>
                            </tr>

                            <!-- User Info -->
                            <tr>
                            <td style="padding:15px 0;">
                                <p style="margin:8px 0; font-size:14px;"><strong>Name:</strong> ${name}</p>
                                <p style="margin:8px 0; font-size:14px;"><strong>Email:</strong> ${email}</p>
                                <p style="margin:8px 0; font-size:14px;"><strong>Subject:</strong> ${subject}</p>
                            </td>
                            </tr>

                            <!-- Message -->
                            <tr>
                            <td>
                                <p style="margin:0 0 6px 0; font-size:14px; font-weight:600;">Message:</p>
                                <pre style="padding:12px; background:#fafafa; border:1px solid #ddd; 
                                            border-radius:6px; font-size:14px; color:#333; line-height:1.5; 
                                            white-space:pre-wrap; margin:0; font-family:Arial,sans-serif;">
                    ${message.trim()}
                                </pre>
                            </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                            <td style="padding-top:20px; border-top:1px solid #e0e0e0; text-align:center; font-size:12px; color:#888;">
                                <p style="margin:0;">This message was sent from your website contact form.</p>
                            </td>
                            </tr>

                        </table>
                        </td>
                    </tr>
                </table>
            `,
        });

        return NextResponse.json({success: true, message:"Email Sent Successfully"});
    } catch(error) {
        console.error(error);
        return NextResponse.json({ success:false, message:"Failed to Send Email"}, {status:500});
    }
}