<template>
  <v-form v-model="isFormValid" @submit.prevent="passwordUpdate.update">
    <v-alert v-if="match === false" type="warning">{{
      $t('user.password.err.mismatch')
    }}</v-alert>

    <input-password v-model="password" :prepend-icon="false" />
    <input-password
      v-model="passwordConfirm"
      :prepend-icon="false"
      label="user.password.confirm.label"
    />

    <input-submit
      :disabled="!isFormValid"
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

import { usePasswordUpdate } from './form/composition'
import InputPassword from './form/input-password.vue'
import InputSubmit from './form/input-submit.vue'

export default defineComponent({
  name: 'form-password-update',
  components: { InputPassword, InputSubmit },

  setup(_: {}, ctx: SetupContext) {
    const password = ref('')
    const passwordConfirm = ref('')
    const isFormValid = ref(false)

    const match = computed(() =>
      password.value && passwordConfirm.value
        ? password.value === passwordConfirm.value
        : undefined
    )
    const isAllValid = computed(() => isFormValid.value && match.value)

    const passwordUpdate = usePasswordUpdate(ctx, password)

    return {
      password,
      passwordConfirm,
      isFormValid,
      match,
      passwordUpdate,
      isAllValid
    }
  }
})
</script>

<style lang="scss"></style>
