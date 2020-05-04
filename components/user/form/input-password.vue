<template>
  <v-text-field
    :value="value"
    :append-icon="canShow ? (show ? 'mdi-eye' : 'mdi-eye-off') : ''"
    :type="show ? 'text' : 'password'"
    :label="$t(label)"
    :rules="rules"
    :disabled="disabled"
    :prepend-icon="prependIcon ? 'mdi-lock' : ''"
    autocomplete="current-password"
    @input="bindValue"
    @click:append="toggleShow"
  ></v-text-field>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from '@vue/composition-api'

import { convertInputRulesArray, valRequired } from '~/utils'

interface Props {
  value: string
  label: string
  prependIcon: boolean
  canShow: boolean
  disabled: boolean
}

export default defineComponent({
  name: 'input-password',
  props: {
    value: { type: String, required: true },
    label: { type: String, default: 'user.password.label' },
    prependIcon: { type: Boolean, default: true },
    canShow: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },

  setup(props: Props, ctx: SetupContext) {
    const show = ref(false)
    const rules = convertInputRulesArray(ctx, [
      { check: valRequired, msg: 'user.password.err.required' }
    ])
    const toggleShow = () => (show.value = props.canShow && !show.value)
    const bindValue = (ev: any) => ctx.emit('input', ev)

    return {
      rules,
      show,
      toggleShow,
      bindValue
    }
  }
})
</script>

<style lang="scss"></style>
