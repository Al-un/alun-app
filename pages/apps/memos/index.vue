<template>
  <div>TODO</div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed } from '@vue/composition-api'

import { Board } from '~/apps/memos/models'

interface Props {}

export default defineComponent({
  name: 'app-memos',

  setup(_: {}, ctx: SetupContext) {
    const boards = computed<Board[]>(
      () => ctx.root.$store.state.apps.memos.boards
    )

    ctx.root.$store.dispatch('apps/memos/loadBoards')

    return { boards }
  }
})
</script>

<style lang="scss"></style>
