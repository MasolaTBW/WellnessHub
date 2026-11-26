<template>
  <div>
    <!-- App Bar -->
    <v-app-bar app flat class="header-gradient">
      <v-container class="nav-container">
        <!-- Logo + Name -->
        <div class="logo-wrap" @click="goHome">
          <img src="@/assets/final.png" alt="Wellness Hub Logo" class="logo-img" />
        </div>

        <!-- Desktop Navigation -->
        <div class="desktop-nav">
          <v-btn
            v-for="item in navItems"
            :key="item.title"
            :to="item.to"
            class="nav-link"
            variant="text"
          >
            {{ item.title }}
          </v-btn>
        </div>

        <!-- Mobile Toggle -->
        <v-app-bar-nav-icon class="mobile-toggle" @click="drawer = !drawer" />
      </v-container>
    </v-app-bar>

    <!-- Mobile Drawer -->
    <v-navigation-drawer v-model="drawer" location="right" temporary class="mobile-drawer">
      <v-list dense>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          router
          link
          @click="drawer = false"
        >
          <v-list-item-title class="drawer-item">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Slot for page content -->
    <div>
      <slot />
    </div>

    <!-- Footer -->
    <v-footer class="footer-green" padless>
      <v-container class="footer-inner">
        <div class="footer-row contact-row">
          <!-- Email -->
          <div class="contact-inline">
            <a href="mailto:drtkwellnesshubmed@gmail.com" class="contact-link" target="_blank">
              <v-icon size="20" class="fi">mdi-email</v-icon>
              <span class="contact-text">drtkwellnesshubmed@gmail.com</span>
            </a>
          </div>

          <!-- Phone + WhatsApp -->
          <div class="contact-inline">
            <a href="tel:+27614599227" class="contact-link">
              <v-icon size="20" class="fi">mdi-phone</v-icon>
              <span class="contact-text">+27 61 459 9227</span>
            </a>
            <span class="separator">|</span>
            <a href="https://wa.me/27614599227" class="contact-link" target="_blank">
              <v-icon size="20" class="fi">mdi-whatsapp</v-icon>
              <span class="contact-text">+27 73 858 7282</span>
            </a>
          </div>

          <!-- Address -->
          <div class="contact-inline">
            <a
              href="https://www.google.com/maps/search/?api=1&query=484+Frates+Road,+Villieria,+Pretoria+0186"
              class="contact-link"
              target="_blank"
            >
              <v-icon size="20" class="fi">mdi-map-marker</v-icon>
              <span class="address-text">484 Frates Road, Villieria | Pretoria 0186</span>
            </a>
          </div>
        </div>

        <div class="footer-copy">
          © 2026 Wellness Hub. All rights reserved. | Dr TK Tshwane (MP1001647 | PR1299298)
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawer = ref(false)

const navItems = [
  { title: 'Home', to: '/' },
  { title: 'Services', to: '/services' },
  { title: 'Pricing', to: '/pricing' },
  { title: 'Appointment', to: '/appointment' },
]

function goHome() {
  router.push('/')
}
</script>

<style scoped>
/* Header with gradient */
.header-gradient {
  background: linear-gradient(135deg, #1565c0 0%, #4caf50 100%) !important;
  color: white !important;
  border-bottom: none;
}

/* Nav container */
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-left: 12px;
  padding-right: 12px;
}

.logo-wrap {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo-img {
  height: 56px;
  width: auto;
  object-fit: contain;
}

/* Desktop nav */
.desktop-nav {
  display: flex;
  gap: 18px;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
}

.nav-link {
  color: #ffffff !important;
  font-weight: 600 !important;
  font-size: 15px !important;
  padding: 8px 14px !important;
  border-radius: 8px;
  background: transparent !important;
  transition:
    background 0.18s ease,
    transform 0.18s ease;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.15) !important;
  transform: translateY(-2px);
}

/* Mobile toggle */
.mobile-toggle {
  display: none;
}

/* Drawer */
.mobile-drawer {
  --v-theme-surface: rgba(255, 255, 255, 0.96);
}

.drawer-item {
  font-weight: 600;
}

/* Footer */
.footer-green {
  background: linear-gradient(135deg, #1f6e4b 0%, #2a8659 50%, #1e6b48 100%);
  position: relative;
  color: white;
  padding-top: 14px;
  padding-bottom: 14px;
  box-shadow:
    inset 0 1px 3px rgba(255, 255, 255, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.footer-green::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(circle at 20% 40%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.06) 0%, transparent 50%),
    linear-gradient(45deg, rgba(255, 255, 255, 0.04) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(255, 255, 255, 0.04) 25%, transparent 25%);
  background-size: 120px 120px;
  background-repeat: repeat;
  pointer-events: none;
  z-index: 0;
}

.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: stretch;
  position: relative;
  z-index: 1;
}

.footer-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.contact-row {
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.contact-inline {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
}

.fi {
  background: rgba(255, 255, 255, 0.18);
  padding: 6px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  min-height: 28px;
  flex-shrink: 0;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.contact-link:hover {
  opacity: 0.85;
}

.contact-text {
  font-weight: 600;
  font-size: 16px;
}

.separator {
  margin: 0 8px;
  opacity: 0.85;
}

.address-text {
  font-weight: 600;
  font-size: 16px;
}

.footer-copy {
  text-align: center;
  font-size: 14px;
  opacity: 0.88;
  padding-top: 6px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

/* Responsive */
@media (max-width: 960px) {
  .desktop-nav {
    display: none;
  }

  .mobile-toggle {
    display: inline-flex;
  }

  .logo-img {
    height: 48px;
  }

  .contact-row {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .footer-row {
    justify-content: center;
  }

  .contact-text,
  .address-text {
    font-size: 14px;
  }

  .footer-copy {
    font-size: 13px;
  }
}
</style>
