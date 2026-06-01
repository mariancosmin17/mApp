import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactEmailData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message: string;
}

export function buildEmailHtml(data: ContactEmailData): string {
  return `
    <!DOCTYPE html>
    <html lang="ro">
    <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px; margin: 0;">
      <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="background: #e65100; padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 22px;">📩 Mesaj nou de pe site</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 14px;">MASERCOM — masercom.ro</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #333; width: 140px;">Nume:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #555;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #333;">Telefon:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <a href="tel:${data.phone}" style="color: #e65100; font-weight: bold;">${data.phone}</a>
              </td>
            </tr>
            ${data.email ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #555;">
                <a href="mailto:${data.email}" style="color: #e65100;">${data.email}</a>
              </td>
            </tr>` : ''}
            ${data.service ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #333;">Serviciu:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #555;">${data.service}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #333; vertical-align: top;">Mesaj:</td>
              <td style="padding: 10px 0; color: #555; line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
        </div>
        <div style="background: #f5f5f5; padding: 16px 32px; text-align: center;">
          <p style="color: #999; font-size: 12px; margin: 0;">Mesaj trimis de pe site-ul MASERCOM</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
