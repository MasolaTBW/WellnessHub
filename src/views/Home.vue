<template>
  <v-container fluid class="home-container py-12 px-6">
    <!-- Welcome Section -->
    <v-row justify="center" align="center" class="text-center welcome-section mb-8">
      <v-col cols="12">
        <h1 class="text-h3 text-md-h2 font-weight-bold text-primary mb-4">
          Welcome to Dr. TK Tshwane Wellness Hub
        </h1>
      </v-col>

      <!-- Logos on both sides of the paragraph -->
      <v-row justify="center" align="center" class="mb-4">
        <v-col cols="12" md="2" class="d-flex justify-center">
          <v-img
            :src="logoPic"
            alt="Wellness Hub Logo Left"
            max-width="200"
            height="160"
            contain
            class="glow-logo"
          ></v-img>
        </v-col>

        <v-col cols="12" md="8">
          <p class="text-body-1 text-md-h6 text-dark">
            Wellness Hub is your trusted partner in health and wellness — offering professional
            care, personalized services, and a holistic approach to wellbeing. From screenings and
            chronic condition management to minor procedures and medical documentation, we provide
            compassionate, community-focused healthcare in Pretoria.
          </p>
        </v-col>

        <v-col cols="12" md="2" class="d-flex justify-center">
          <v-img
            :src="logoPic"
            alt="Wellness Hub Logo Right"
            max-width="200"
            height="160"
            contain
            class="glow-logo"
          ></v-img>
        </v-col>
      </v-row>
    </v-row>

    <!-- Services Section -->
    <v-row justify="center" class="mb-10">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 text-md-h3 font-weight-bold text-secondary mb-6">What We Offer</h2>
      </v-col>
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex"
      >
        <v-card
          class="flex-grow-1 pa-4 rounded-xl elevation-6 service-card"
          hover
          @click="$router.push('/services')"
        >
          <v-img
            :src="service.image"
            :alt="service.title"
            class="rounded-lg mb-4"
            height="180"
            cover
          ></v-img>
          <v-card-title class="text-h6 font-weight-bold text-primary text-center justify-center">
            {{ service.title }}
          </v-card-title>
          <v-card-text class="text-body-2 text-dark text-center">
            {{ service.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import screeningImg from '@/assets/screening.jpg'
import minorImg from '@/assets/minor.jpg'
import documentImg from '@/assets/document.jpg'
import acuteImg from '@/assets/acute-chronic.jpg'
import logoPic from '@/assets/final.png' // ✅ imported logo

const services = [
  {
    title: 'Screening',
    description: 'HIV counselling, TB screening, family planning, STI/UTI screening, Prostate/BPH.',
    image: screeningImg,
  },
  {
    title: 'Acute & Chronic Conditions',
    description: 'Cold/Flu, Hypertension, Diabetes, Diarrhoeal disease, infections.',
    image: acuteImg,
  },
  {
    title: 'Documents',
    description: 'Medical certificates, PDP’s, prescriptions, referrals.',
    image: documentImg,
  },
  {
    title: 'Minor Procedures',
    description: 'IV drip therapy, pap smear, wound management, medical termination.',
    image: minorImg,
  },
]
</script>

<style scoped>
.home-container {
  background-color: #f5f9ff; /* soft light background */
  min-height: calc(100vh - 128px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Add spacing below NavBar */
.welcome-section {
  margin-top: 40px;
}

.text-primary {
  color: #1565c0 !important; /* blue */
}

.text-secondary {
  color: #4caf50 !important; /* green */
}

.text-dark {
  color: #333 !important;
}

.service-card {
  transition:
    transform 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
  background-color: #ffffff !important;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(21, 101, 192, 0.25) !important;
}

/* Blue/Green Glowing Logo Effect */
.glow-logo {
  animation: glowPulse 2s infinite ease-in-out;
  box-shadow:
    0 0 20px rgba(21, 101, 192, 0.6),
    0 0 20px rgba(76, 175, 80, 0.6);
  border-radius: 12px;
}

@keyframes glowPulse {
  0% {
    box-shadow:
      0 0 10px rgba(21, 101, 192, 0.4),
      0 0 10px rgba(76, 175, 80, 0.4);
  }
  50% {
    box-shadow:
      0 0 25px rgba(21, 101, 192, 0.8),
      0 0 25px rgba(76, 175, 80, 0.8);
  }
  100% {
    box-shadow:
      0 0 10px rgba(21, 101, 192, 0.4),
      0 0 10px rgba(76, 175, 80, 0.4);
  }
}
</style>
