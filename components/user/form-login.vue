<template>
  <v-form ref="loginForm" v-model="isFormValid" @submit.prevent="login.submit">
    <v-alert v-if="login.status.value === 'error'" type="error">{{
      $t('user.login.failed')
    }}</v-alert>
    <v-alert v-else-if="login.status.value === 'processing'" type="info">{{
      $t('user.login.in-progress')
    }}</v-alert>
    <v-alert v-else-if="login.status.value === 'success'" type="success">{{
      $t('user.login.success')
    }}</v-alert>

    <input-email
      v-model="credentials.email"
      :disabled="login.status.value === 'processing'"
    />
    <input-password
      v-model="credentials.password"
      :disabled="login.status.value === 'processing'"
      can-show
    />

    <input-submit :disabled="!isFormValid" :value="$t('user.login.submit')" />
  </v-form>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  reactive,
  ref
} from '@vue/composition-api'

import { useLogin } from './form/composition'
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
    const isFormValid = ref(false)

    const login = useLogin(ctx, credentials)

    return {
      credentials,
      isFormValid,
      login
    }
  }
})
</script>

<style lang="scss"></style>
