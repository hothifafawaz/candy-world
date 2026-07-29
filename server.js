/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Candy World backend: keeps third-party API keys server-side (PDPL compliance)
// and serves the built frontend, including client-side routes like /privacy-policy.

import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

app.post('/api/contact', async (req, res) => {
  const { name, phone, message, consent } = req.body || {};

  if (!name || !phone || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields.' });
  }

  if (!consent) {
    return res.status(400).json({ success: false, message: 'Consent to data processing is required.' });
  }

  if (!WEB3FORMS_ACCESS_KEY) {
    console.error('WEB3FORMS_ACCESS_KEY is not configured on the server.');
    return res.status(500).json({ success: false, message: 'Server is not configured.' });
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'New Inquiry - Candy World Website',
        from_name: 'Candy World Website',
        name,
        phone,
        message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return res.json({ success: true });
    }

    console.error('Web3Forms submission rejected:', result);
    return res.status(502).json({ success: false, message: 'Upstream submission failed.' });
  } catch (error) {
    console.error('Contact form submission failed:', error);
    return res.status(502).json({ success: false, message: 'Upstream submission failed.' });
  }
});

// Serve the built frontend in production and fall back to index.html
// for client-side routes (e.g. /privacy-policy) on direct navigation/refresh.
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Candy World server listening on port ${PORT}`);
});
