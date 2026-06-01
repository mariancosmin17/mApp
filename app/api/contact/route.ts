import { NextRequest, NextResponse } from 'next/server';
import { resend, buildEmailHtml } from '@/lib/resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, service, message } = body;

    if (!name?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Câmpurile obligatorii lipsesc.' },
        { status: 400 }
      );
    }

    const toEmail = process.env.TO_EMAIL;
    if (!toEmail) {
      return NextResponse.json(
        { error: 'Configurație server incompletă.' },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'MASERCOM Site <onboarding@resend.dev>',
      to: toEmail,
      subject: `Mesaj nou de pe site — ${service ?? 'General'} — ${name}`,
      html: buildEmailHtml({ name, phone, email, service, message }),
      replyTo: email ?? undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Eroare la trimitere.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Eroare server.' }, { status: 500 });
  }
}
