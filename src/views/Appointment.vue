<template>
  <v-main>
    <v-container class="py-12">
      <v-row align="center" justify="center">
        <v-col cols="12" md="8">
          <!-- Appointment Card -->
          <v-card class="pa-8 mb-12">
            <h1 class="text-h3 text-center mb-4">Book an Appointment</h1>
            <p class="text-center text-body1 mb-8">
              We accept both Online Bookings and Walk-in Patients.
            </p>
            <v-row>
              <v-col cols="12" sm="6">
                <v-btn
                  block
                  size="large"
                  color="primary"
                  prepend-icon="mdi-phone"
                  href="tel:+27614599227"
                >
                  Call Now
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn
                  block
                  size="large"
                  color="secondary"
                  prepend-icon="mdi-whatsapp"
                  href="https://wa.me/27614599227"
                >
                  WhatsApp
                </v-btn>
              </v-col>
            </v-row>

            <!-- Walk-in Address -->
            <div class="mt-8 text-center">
              <p class="text-body1 mb-4">Or visit us at:</p>
              <v-btn
                color="secondary"
                prepend-icon="mdi-map-marker"
                href="https://www.google.com/maps/search/?api=1&query=484+Frates+Road,+Villieria,+Pretoria+0186"
                target="_blank"
              >
                484 Frates Road, Villieria | Pretoria 0186
              </v-btn>
            </div>
          </v-card>

          <!-- Inquiry Form Card -->
          <v-card class="pa-8">
            <h1 class="text-h4 text-center mb-6">Send an Inquiry</h1>

            <!-- Success/Error Messages -->
            <v-alert
              v-if="alertMessage"
              :type="alertType"
              class="mb-4"
              closable
              @click:close="alertMessage = ''"
            >
              {{ alertMessage }}
            </v-alert>

            <v-form ref="formRef" @submit.prevent="submitForm">
              <v-text-field
                v-model="form.name"
                label="Name *"
                variant="outlined"
                density="comfortable"
                class="mb-4"
                :rules="[rules.required]"
                :error-messages="errors.name"
                required
              />
              <v-text-field
                v-model="form.email"
                label="Email *"
                variant="outlined"
                density="comfortable"
                class="mb-4"
                :rules="[rules.required, rules.email]"
                :error-messages="errors.email"
                type="email"
                required
              />
              <v-text-field
                v-model="form.subject"
                label="Subject / Title *"
                variant="outlined"
                density="comfortable"
                class="mb-4"
                :rules="[rules.required]"
                :error-messages="errors.subject"
                required
              />
              <v-textarea
                v-model="form.message"
                label="Message *"
                variant="outlined"
                density="comfortable"
                rows="4"
                class="mb-6"
                :rules="[rules.required]"
                :error-messages="errors.message"
                required
              />
              <v-btn
                block
                size="large"
                color="primary"
                prepend-icon="mdi-send"
                type="submit"
                :loading="loading"
                :disabled="loading"
              >
                {{ loading ? 'Sending...' : 'Send Message' }}
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import emailjs from '@emailjs/browser'

// ⚠️ IMPORTANT: Replace these with your actual EmailJS credentials
// Get them from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID' // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // Replace with your Public Key

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const formRef = ref(null)
const loading = ref(false)
const alertMessage = ref('')
const alertType = ref('success')

// Validation rules
const rules = {
  required: (value) => !!value || 'This field is required',
  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(value) || 'Please enter a valid email address'
  },
}

// Validate all fields
function validateForm() {
  let isValid = true

  // Reset errors
  errors.name = ''
  errors.email = ''
  errors.subject = ''
  errors.message = ''

  // Check if fields are empty
  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  }

  return isValid
}

async function submitForm() {
  // Validate form
  if (!validateForm()) {
    alertMessage.value = 'Please fill in all required fields correctly'
    alertType.value = 'error'
    return
  }

  loading.value = true
  alertMessage.value = ''

  try {
    // Check if EmailJS credentials are configured
    if (
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      throw new Error('Please configure your EmailJS credentials in Appointment.vue')
    }

    // Send email using EmailJS
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message,
      to_email: 'your-email@example.com', // Replace with your email address
    }

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)

    // Success
    alertMessage.value = 'Your inquiry has been sent successfully! We will get back to you soon.'
    alertType.value = 'success'

    // Reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (error) {
    console.error('Error sending email:', error)
    alertMessage.value =
      error.message || 'Failed to send inquiry. Please try again or contact us directly.'
    alertType.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(21, 101, 192, 0.15);
}

.v-text-field,
.v-textarea {
  background: #fafafa;
}

.v-btn {
  font-weight: 600;
}
</style>
