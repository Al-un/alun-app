<template>
  <v-btn block :disabled="disabled" color="primary" type="submit">{{
    value
  }}</v-btn>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

interface Props {
  value: string
  disabled: boolean
}

export default defineComponent({
  name: 'input-submit',
  props: {
    value: { type: String, required: true },
    disabled: { type: Boolean, default: false }
  }
})
</script>

<style lang="scss"></style>
