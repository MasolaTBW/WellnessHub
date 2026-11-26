# Email Setup Guide for Appointment Form

## ✅ What's Been Done

1. ✅ Installed `@emailjs/browser` package
2. ✅ Added form validation (all fields required)
3. ✅ Added loading state while sending
4. ✅ Added success/error messages
5. ✅ Integrated EmailJS for sending emails

## 📧 Step-by-Step Setup Instructions

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Verify your email address
4. Log in to your dashboard

### Step 2: Add Email Service

1. In the EmailJS dashboard, click **"Email Services"** in the left menu
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook/Hotmail**
   - Or any other provider
4. Follow the connection steps:
   - For Gmail: You'll need to allow EmailJS access
   - You may need to create an App Password if using 2FA
5. **Copy your Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template

1. Click **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. Give it a name like "Appointment Inquiry"
4. Set up the template content:

```
Subject: New Inquiry from {{from_name}} - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This inquiry was sent from the Wellness Hub website.
```

5. In the "To email" field, enter: **your-email@example.com** (your actual email)
6. **Copy your Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Your Public Key

1. Click on your username (top right)
2. Go to **"Account"** → **"General"**
3. Scroll down to find **"Public Key"**
4. **Copy your Public Key** (looks like: `xxxxxxxxxxxxxxx`)

### Step 5: Update Your Code

Open `src/views/Appointment.vue` and replace these lines (around line 8-10):

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID' // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // Replace with your Public Key
```

With your actual credentials:

```javascript
const EMAILJS_SERVICE_ID = 'service_abc1234' // Your actual Service ID
const EMAILJS_TEMPLATE_ID = 'template_xyz5678' // Your actual Template ID
const EMAILJS_PUBLIC_KEY = 'abcdefghijklmnop' // Your actual Public Key
```

Also update line 67 with your email:

```javascript
to_email: 'your-email@example.com', // Replace with YOUR actual email
```

### Step 6: Test It!

1. Save the file
2. Run your development server: `npm run dev`
3. Go to the Appointment page
4. Fill out the form (all fields are required)
5. Click "Send Message"
6. Check your email inbox!

## 🎯 Features Implemented

✅ **Form Validation**

- All fields are required (marked with \*)
- Email format validation
- Shows error messages if fields are empty
- Prevents submission if validation fails

✅ **User Feedback**

- Loading spinner while sending
- Success message when email is sent
- Error message if something goes wrong
- Form clears automatically after successful submission

✅ **Email Delivery**

- Sends to your specified email address
- Includes all form data (name, email, subject, message)
- Professional email template

## 🔧 Troubleshooting

### "Please configure your EmailJS credentials"

- Make sure you replaced all three credentials in the code
- Don't leave any as 'YOUR_SERVICE_ID', etc.

### Email not arriving

- Check your spam/junk folder
- Verify the "To email" in your EmailJS template
- Check EmailJS dashboard for delivery status
- Make sure you're within the free tier limit (200 emails/month)

### Form validation not working

- Make sure all fields have the red asterisk (\*)
- Try clicking submit with empty fields - you should see error messages

## 📱 Alternative: Using Gmail Directly (No EmailJS)

If you prefer not to use EmailJS, you can use a `mailto:` link instead:

```javascript
function submitForm() {
  if (!validateForm()) return

  const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`

  window.location.href = mailtoLink
}
```

Note: This opens the user's email client instead of sending directly.

## 📞 Need Help?

If you encounter any issues:

1. Check the browser console for error messages (F12)
2. Verify all EmailJS credentials are correct
3. Check EmailJS dashboard for delivery logs
4. Make sure your email service is connected properly

---

**Your form is now ready to receive inquiries! 🎉**
