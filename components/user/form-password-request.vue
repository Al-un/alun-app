<template>
  <v-form v-model="request.isFormValid.value" @submit.prevent="request.submit">
    <v-alert
      v-if="request.status.value !== 'idle'"
      :type="request.alertType.value"
      ><span>{{ $t(`user.pwd-request.status.${request.status.value}`) }}</span>
    </v-alert>

    <input-email
      v-model="email"
      :disabled="request.status.value === 'processing'"
    />

    <input-submit
      :disabled="
        !request.isFormValid.value || request.status.value === 'processing'
      "
      :value="$t('user.pwd-request.submit')"
    />
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

import { usePasswordRequest } from './composition'
import InputEmail from './form/input-email.vue'
import InputSubmit from './form/input-submit.vue'

interface Props {}

export default defineComponent({
  name: 'form-password-request',
  components: { InputEmail, InputSubmit },
  props: {},

  setup() {
    const email = ref('')
    const request = usePasswordRequest(email)

    return { email, request }
  }
})
</script>

<style lang="scss"></style>
