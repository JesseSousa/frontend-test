<script setup>
import { provide, ref } from 'vue';

import AppContainer from './components/AppContainer.vue';
import TheNavbar from './components/TheNavbar.vue';
import CoinDashboard from './components/coin-dashboard/CoinDashboard.vue';
import AppCoinSelect from './components/AppCoinSelect.vue';

const coinId = ref('bitcoin');

provide('coinId', coinId);
</script>

<template>
  <div>
    <TheNavbar />
    <AppCoinSelect />
    <app-container>
      <CoinDashboard />
    </app-container>
  </div>
</template>
