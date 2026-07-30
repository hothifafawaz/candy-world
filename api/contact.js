/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Vercel Serverless Function (auto-detected from the /api directory, zero config).
// This is the production entry point for /api/contact - server.js's Express
// route of the same name is for local development only (npm run server),
// since the site is deployed on Vercel and does not run server.js.
import { Resend } from 'resend';

// TODO: swap for an address on a verified custom domain (e.g. candyworldsa.com)
// once one is verified on the Resend account. Until then, Resend's shared
// sandbox domain is the only sender allowed to actually deliver mail.
const FROM_ADDRESS = 'Candy World Website <onboarding@resend.dev>';
const TO_ADDRESS = 'hothifafawaz1@gmail.com';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }

  const { name, phone, message, consent } = req.body || {};

  if (!name || !phone || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  if (!consent) {
    return res.status(400).json({ success: false, message: 'Consent to data processing is required.' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured on the server.');
    return res.status(500).json({ success: false, message: 'Server is not configured.' });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      subject: 'New Inquiry - Candy World Website',
      text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      console.error('Resend submission rejected:', error);
      return res.status(502).json({ success: false, message: 'Upstream submission failed.' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return res.status(502).json({ success: false, message: 'Upstream submission failed.' });
  }
}
