<template>
  <div class="board-card text-center">
    <h3>{{ $t('nav.menu.home') }}</h3>
    <v-chip class="ma-2" color="indigo" text-color="white">
      <v-avatar left>
        <v-icon>mdi-account-circle</v-icon>
      </v-avatar>
      Ranee
    </v-chip>

    <v-chip class="ma-2" color="orange" text-color="white">
      Premium
      <v-icon right>mdi-star</v-icon>
    </v-chip>

    <v-chip class="ma-2" color="primary" text-color="white">
      1 Year
      <v-icon right>mdi-cake-variant</v-icon>
    </v-chip>

    <v-chip class="ma-2" color="green" text-color="white">
      <v-avatar left class="green darken-4">
        1
      </v-avatar>
      Years
    </v-chip>

    <v-chip
      class="ma-2"
      close
      color="teal"
      text-color="white"
      @click:close="close"
    >
      <v-avatar left>
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-avatar>
      Confirmed
    </v-chip>

    <v-chip
      class="ma-2"
      close
      color="teal"
      text-color="white"
      close-icon="mdi-delete"
      @click:close="close"
    >
      <v-avatar left>
        <v-icon>mdi-checkbox-marked-circle</v-icon>
      </v-avatar>
      Confirmed
    </v-chip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

interface Props {}

export default defineComponent({
  name: 'board-card',
  components: {},
  props: {},
  setup() {
    return {
      close: () => alert('Chip close clicked')
    }
  }
})
</script>

<style lang="scss">
.board-card {
  background-color: var(--pouet);
}
</style>
