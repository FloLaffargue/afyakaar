import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, MAIL_FROM, MAIL_TO } = process.env

export const mailerConfigured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASSWORD && MAIL_FROM && MAIL_TO)

let transporter: Transporter | null = null

if (mailerConfigured) {
  const port = parseInt(SMTP_PORT || '587', 10)
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  })
} else {
  console.warn('Mailer: SMTP non configuré (SMTP_HOST/SMTP_USER/SMTP_PASSWORD/MAIL_FROM/MAIL_TO) — les notifications par mail sont désactivées')
}

interface ContactNotification {
  subject: string
  email: string
  message: string
}

// Notifie l'association qu'un message de contact a été reçu.
// From = notre expéditeur authentifié, Reply-To = le visiteur (jamais l'inverse : DMARC).
export async function sendContactNotification({ subject, email, message }: ContactNotification): Promise<void> {
  if (!transporter) return
  await transporter.sendMail({
    from: MAIL_FROM,
    to: MAIL_TO,
    replyTo: email,
    subject: `${subject}`,
    text: `Nouveau message reçu via le formulaire de contact du site.\n\nDe : ${email}\nObjet : ${subject}\n\n${message}\n\n—\nRépondez directement à ce mail pour écrire à l'expéditeur.`,
  })
}
