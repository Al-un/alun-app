<template>
  <v-form
    ref="loginForm"
    v-model="login.isFormValid.value"
    @submit.prevent="login.submit"
  >
    <v-alert v-if="login.status.value !== 'idle'" :type="login.alertType.value">
      <span>{{ $t(`user.login.status.${login.status.value}`) }}</span>
    </v-alert>

    <input-email
      v-model="credentials.email"
      :disabled="login.status.value === 'processing'"
    />
    <input-password
      v-model="credentials.password"
      :disabled="login.status.value === 'processing'"
      can-show
    />

    <input-submit
      :disabled="!login.isFormValid.value"
      :value="$t('user.login.submit')"
    />
  </v-form>
</template>

<script lang="ts">
import { defineComponent, SetupContext, reactive } from '@vue/composition-api'

import { useLogin } from './composition'
import InputEmail from './form/input-email.vue'
import InputPassword from './form/input-password.vue'
import InputSubmit from './form/input-submit.vue'

import { Credentials } from '~/models/user'

interface Props {}

export default defineComponent({
  name: 'form-login',
  components: { InputEmail, InputPassword, InputSubmit },
  props: {},

  setup(_: {}, ctx: SetupContext) {
    const credentials = reactive<Credentials>({ email: '', password: '' })
    const login = useLogin(ctx, credentials)

    return { credentials, login }
  }
})
</script>
