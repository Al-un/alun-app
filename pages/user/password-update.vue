<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-toolbar color="primary">
            <v-card-title>{{ $t('user.pwd-update.title') }}</v-card-title>
          </v-toolbar>

          <v-card-text>
            <form-password-update />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import FormPasswordUpdate from '~/components/user/form-password-update.vue'

export default defineComponent({
  name: 'password-update-page',
  components: { FormPasswordUpdate }
})
</script>

<style lang="scss"></style>
