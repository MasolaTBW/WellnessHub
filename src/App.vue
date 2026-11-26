<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <v-app>
    <NavBar>
      <RouterView />
    </NavBar>
  </v-app>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  font-family: 'Roboto', sans-serif;
}
</style>
