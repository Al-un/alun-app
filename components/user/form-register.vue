<template>
  <v-form v-model="isFormValid" @submit.prevent="register.submit">
    <v-alert
      v-if="register.status.value !== 'idle'"
      :type="
        register.status.value === 'failed' || register.status.value === 'error'
          ? 'error'
          : register.status.value === 'processing'
          ? 'info'
          : register.status.value === 'success'
          ? 'success'
          : ''
      "
    >
      <span>{{ $t(`user.register.status.${register.status.value}`) }}</span>
    </v-alert>

    <input-email v-model="email" />

    <input-submit
      :disabled="!isFormValid"
      :value="$t('user.register.submit')"
    />
  </v-form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

import { useRegister } from './composition'
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

    const register = useRegister(email)

    return {
      email,
      register,
      isFormValid
    }
  }
})
</script>

<style lang="scss"></style>
