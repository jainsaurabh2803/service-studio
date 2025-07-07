// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail recommended)
// 4. Create an email template with the following variables:
//    - {{from_name}}
//    - {{from_email}}
//    - {{company}}
//    - {{phone}}
//    - {{service}}
//    - {{message}}
//    - {{to_email}}
//    - {{reply_to}}
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the placeholder values in Contact.tsx

export const emailConfig = {
  serviceId: 'service_ma_partners', // Replace with your EmailJS Service ID
  templateId: 'template_contact_form', // Replace with your EmailJS Template ID
  publicKey: 'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
};

// Example email template for EmailJS:
/*
Subject: New Contact Form Submission - M&A Partners India

Dear Team,

You have received a new contact form submission from your website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Service Interest: {{service}}

Message:
{{message}}

Please respond to this inquiry promptly.

Best regards,
M&A Partners India Website
*/