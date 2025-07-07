# M&A Partners India Website

A professional website for M&A Partners India, a premier merger and acquisition advisory firm.

## Features

- Responsive design with modern UI
- Contact form with email integration
- Team member profiles with hover effects
- Service and industry expertise sections
- WhatsApp and scroll-to-top floating buttons

## Email Setup

The contact form uses EmailJS to send emails. To set it up:

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create an account and verify your email
3. Create a new service (Gmail recommended)
4. Create an email template with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{company}}`
   - `{{phone}}`
   - `{{service}}`
   - `{{message}}`
   - `{{to_email}}`
   - `{{reply_to}}`
5. Update the configuration in `src/components/Contact.tsx`:
   - Replace `service_ma_partners` with your Service ID
   - Replace `template_contact_form` with your Template ID
   - Replace `YOUR_PUBLIC_KEY` with your Public Key

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

The site is configured for deployment on Netlify and other static hosting providers.