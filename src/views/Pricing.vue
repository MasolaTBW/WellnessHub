<template>
  <v-main>
    <v-container class="py-12">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card class="pa-8 pricing-card">
            <!-- Header -->
            <h1 class="text-h3 text-center text-primary mb-10">Wellness Hub Price List 2026</h1>

            <!-- Price List -->
            <v-row>
              <v-col cols="12" sm="6" class="mb-6">
                <div class="price-box">
                  <v-icon size="36" color="white" class="mb-3">mdi-stethoscope</v-icon>
                  <h3 class="price-title">Consultation Fee</h3>
                  <p class="price-value">R600.00</p>
                </div>
              </v-col>

              <v-col cols="12" sm="6" class="mb-6">
                <div class="price-box">
                  <v-icon size="36" color="white" class="mb-3">mdi-file-document</v-icon>
                  <h3 class="price-title">Documents</h3>
                  <p class="price-value">R350.00</p>
                </div>
              </v-col>

              <v-col cols="12" sm="6" class="mb-6">
                <div class="price-box">
                  <v-icon size="36" color="white" class="mb-3">mdi-water</v-icon>
                  <h3 class="price-title">Recovery & Hydration Drip</h3>
                  <p class="price-value">R750.00</p>
                </div>
              </v-col>

              <v-col cols="12" sm="6" class="mb-6">
                <div class="price-box">
                  <v-icon size="36" color="white" class="mb-3">mdi-flask</v-icon>
                  <h3 class="price-title">Glow Drip</h3>
                  <p class="price-value">R700.00</p>
                </div>
              </v-col>

              <v-col cols="12" sm="6" class="mb-6">
                <div class="price-box">
                  <v-icon size="36" color="white" class="mb-3">mdi-heart</v-icon>
                  <h3 class="price-title">Family Planning</h3>
                  <p class="price-value">R200.00 <span class="cash-only">(Cash Only)</span></p>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup></script>

<style scoped>
.pricing-card {
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(21, 101, 192, 0.15);
  background: #ffffff;
}

/* Price Box Styling */
.price-box {
  background: linear-gradient(135deg, #1565c0 0%, #4caf50 100%);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  color: #fff;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.price-box:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(21, 101, 192, 0.3);
}

.price-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}

.price-value {
  font-size: 22px;
  font-weight: 700;
  color: #ffd700; /* gold accent for price */
}

.cash-only {
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  opacity: 0.9;
}
</style>
