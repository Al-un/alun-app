<template>
  <v-container>
    <h2>Application</h2>

    <div class="services-list">
      <v-card v-for="(app, idx) in apps" :key="idx" :to="app.to">
        <v-card-text>{{ $t(app.i18n) }}</v-card-text>
      </v-card>
    </div>

    <h2>Utilities</h2>
    <div class="services-list">
      <v-card v-for="(util, idx) in utils" :key="idx" :to="util.to">
        <v-card-text>{{ $t(util.i18n) }}</v-card-text></v-card
      >
    </div>
  </v-container>
</template>

<script>
import { SERVICES_APPS, SERVICES_UTILS } from '~/constants'

export default {
  name: 'Home',

  computed: {
    apps() {
      return SERVICES_APPS
    },
    utils() {
      return SERVICES_UTILS
    }
  }
}
</script>

<style lang="scss">
.services-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  grid-template-rows: 120px;
  gap: 8px;
}
</style>
