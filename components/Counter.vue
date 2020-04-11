<template>
  <div>
    <p>Current count is {{ state.count }} with square {{ state.square }}</p>
    <button @click="increment">Pouet</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from '@vue/composition-api'

interface Props {
  start?: number
}

export default defineComponent({
  name: 'counter',
  props: {
    start: { type: Number, default: 0 }
  },

  setup(props: Props) {
    const state: any = reactive({
      count: props.start,
      square: computed(() => state.count * state.count)
    })

    const increment = () => {
      state.count++
    }

    return {
      state,
      increment
    }
  }
})
</script>

<style lang="scss"></style>
