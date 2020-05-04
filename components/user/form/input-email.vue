<template>
  <v-text-field
    :value="value"
    :label="$t('user.email.label')"
    :rules="rules"
    :disabled="disabled"
    type="email"
    prepend-icon="mdi-email"
    autocomplete="username"
    @input="bindValue"
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'

import { valEmailValid } from './validation'
import { convertInputRulesArray, valRequired } from '~/utils'

interface Props {
  value: string
  disabled: boolean
}

export default defineComponent({
  name: 'input-email',
  props: {
    value: { type: String, required: true },
    disabled: { type: Boolean, default: false }
  },

  setup(_: Props, ctx: SetupContext) {
    const rules = convertInputRulesArray(ctx, [
      { check: valRequired, msg: 'user.email.err.required' },
      { check: valEmailValid, msg: 'user.email.err.invalid' }
    ])
    const bindValue = (ev: any) => ctx.emit('input', ev)

    return {
      rules,
      bindValue
    }
  }
})
</script>

<style lang="scss"></style>
