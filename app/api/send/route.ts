import { EmailTemplate } from './../../components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
    const response = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'zenithzest@resend.dev',
      to: ['nishantpatil8433@gmail.com'],
      subject: 'Hello world',
      // text: "Its Text Time"
      react: EmailTemplate({ firstName: 'John' }),
    });

    console.log("hogaya bhai")

    return NextResponse.json(data);

  } catch (error) {
    console.log("error bc")
    return NextResponse.json({ error });
  }
}
