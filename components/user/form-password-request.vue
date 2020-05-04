<template>
  <v-form v-model="isFormValid" @submit.prevent="request.request">
    <input-email v-model="email" />

    <input-submit
      :disabled="!isFormValid"
      :value="$t('user.lpwd-reset.submit')"
    />
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

import { usePasswordRequest } from './form/composition'
import InputEmail from './form/input-email.vue'
import InputSubmit from './form/input-submit.vue'

interface Props {}

export default defineComponent({
  name: 'form-password-request',
  components: { InputEmail, InputSubmit },
  props: {},

  setup() {
    const email = ref('')
    const isFormValid = ref(false)

    const request = usePasswordRequest(email)

    return {
      email,
      request,
      isFormValid
    }
  }
})
</script>

<style lang="scss"></style>
