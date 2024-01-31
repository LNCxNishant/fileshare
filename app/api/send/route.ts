import { EmailTemplate } from './../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'zenithzest <zenithzest@resend.dev>',
      to: ['crce.9631.ce@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
    });
    console.log("Nahi ho hava bhai")
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
