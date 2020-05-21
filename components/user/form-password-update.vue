<template>
  <v-form
    v-model="passwordUpdate.isFormValid.value"
    @submit.prevent="passwordUpdate.submit"
  >
    <v-alert v-if="match === false" type="warning">
      <span>{{ $t('user.password.err.mismatch') }}</span>
    </v-alert>

    <v-text-field
      v-if="passwordUpdate.isNewUser"
      :value="username"
      :label="$t('user.username.label')"
      :rules="usernameRules"
      type="text"
    ></v-text-field>

    <input-password v-model="password" :prepend-icon="false" />
    <input-password
      v-model="passwordConfirm"
      :prepend-icon="false"
      label="user.password.confirm.label"
    />

    <input-submit
      :disabled="!passwordUpdate.isFormValid.value"
      :value="$t('user.pwd-update.submit')"
    />
  </v-form>
</template>

<script lang="ts">
import {
  defineComponent,
  SetupContext,
  computed,
  ref
} from '@vue/composition-api'

import { usePasswordUpdate } from './composition'
import InputPassword from './form/input-password.vue'
import InputSubmit from './form/input-submit.vue'
import { convertInputRulesArray, valRequired } from '~/utils'

export default defineComponent({
  name: 'form-password-update',
  components: { InputPassword, InputSubmit },

  setup(_: {}, ctx: SetupContext) {
    const username = ref('')
    const usernameRules = convertInputRulesArray(ctx, [
      { check: valRequired, msg: 'user.username.err.required' }
    ])
    const password = ref('')
    const passwordConfirm = ref('')
    const passwordUpdate = usePasswordUpdate(ctx, password, username)

    const match = computed(() =>
      password.value && passwordConfirm.value
        ? password.value === passwordConfirm.value
        : undefined
    )
    const isAllValid = computed(
      () => passwordUpdate.isFormValid.value && match && match.value
    )

    return {
      username,
      usernameRules,
      password,
      passwordConfirm,
      match,
      passwordUpdate,
      isAllValid
    }
  }
})
</script>

<style lang="scss"></style>
