<template>
  <header>
    <div class="border border-[#E2EAF2]">
      <div class="container">
        <div class="flex items-center h-[120px]">
          <nuxt-link to="/">
            <img :src="logo" alt="Alhadaya" />
          </nuxt-link>
          <v-language ref="selectedCity" :items="langs" />
        </div>
      </div>
    </div>
    <div></div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logo from 'assets/images/logo.svg'

const selectedCity = ref()
const langs = [{ name: 'RU' }, { name: 'ENG' }, { name: 'UZB' }]
</script>

<style scoped></style>
