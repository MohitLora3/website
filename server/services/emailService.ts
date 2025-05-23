
import nodemailer from 'nodemailer';

// Configure email transporter
// For development, use a test account approach
let transporter: nodemailer.Transporter;

// Function to create a test account and configure transporter if needed
const getTransporter = async () => {
  if (!transporter) {
    // For development environment, create a test account
    if (process.env.NODE_ENV === 'development') {
      try {
        // Create ethereal test account for development
        const testAccount = await nodemailer.createTestAccount();
        
        transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass
          }
        });
        
        console.log('Created test email account:', testAccount.user);
      } catch (error) {
        console.error('Failed to create test email account:', error);
        // Fallback to a mock transporter
        transporter = {
          sendMail: async (mailOptions: any) => {
            console.log('Email would be sent with:', mailOptions);
            return { messageId: 'mock-id', previewURL: null };
          }
        } as any;
      }
    } else {
      // For production, use actual SMTP credentials
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.example.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER || 'your-email@example.com',
          pass: process.env.SMTP_PASS || 'your-password'
        }
      });
    }
  }
  
  return transporter;
};

// Format date in a readable way
const formatDate = (date: Date): string => {
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const sendContactFormNotification = async (formData: any) => {
  try {
    const { name, email, company, phone, message } = formData;
    const date = new Date();
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'notifications@dialio.app',
      to: process.env.EMAIL_TO || 'your-email@example.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Date:</strong> ${formatDate(date)}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    const transport = await getTransporter();
    const info = await transport.sendMail(mailOptions);
    
    if (process.env.NODE_ENV === 'development' && info.messageId) {
      console.log('Contact form notification email sent');
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } else {
      console.log('Contact form notification email sent');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending contact form notification email:', error);
    return false;
  }
};

export const sendNewsletterSubscriptionNotification = async (data: any) => {
  try {
    const { email, source } = data;
    const date = new Date();
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'notifications@dialio.app',
      to: process.env.EMAIL_TO || 'your-email@example.com',
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Date:</strong> ${formatDate(date)}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${source ? `<p><strong>Source:</strong> ${source}</p>` : ''}
      `
    };

    const transport = await getTransporter();
    const info = await transport.sendMail(mailOptions);
    
    if (process.env.NODE_ENV === 'development' && info.messageId) {
      console.log('Newsletter subscription notification email sent');
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } else {
      console.log('Newsletter subscription notification email sent');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending newsletter subscription notification email:', error);
    return false;
  }
};

export const sendDemoRequestNotification = async (data: any) => {
  try {
    const { name, email, company, phone, message, industry, size, solution } = data;
    const date = new Date();
    
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'notifications@dialio.app',
      to: process.env.EMAIL_TO || 'your-email@example.com',
      subject: `New Demo Request from ${name}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Date:</strong> ${formatDate(date)}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Industry:</strong> ${industry}</p>
        <p><strong>Company Size:</strong> ${size}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        ${solution ? `<p><strong>Solution:</strong> ${solution}</p>` : ''}
        ${message ? `
        <p><strong>Additional Information:</strong></p>
        <p>${message}</p>
        ` : ''}
      `
    };

    const transport = await getTransporter();
    const info = await transport.sendMail(mailOptions);
    
    if (process.env.NODE_ENV === 'development' && info.messageId) {
      console.log('Demo request notification email sent');
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } else {
      console.log('Demo request notification email sent');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending demo request notification email:', error);
    return false;
  }
};
