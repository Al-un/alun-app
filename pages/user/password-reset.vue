<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-toolbar color="primary">
            <v-card-title>{{ $t('user.pwd-reset.title') }}</v-card-title>
          </v-toolbar>

          <v-card-text>
            <password-request />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import FormPasswordRequest from '~/components/form-password-request.vue'

interface Props {}

export default defineComponent({
  name: '',
  components: { FormPasswordRequest },
  props: {}
})
</script>

<style lang="scss"></style>
