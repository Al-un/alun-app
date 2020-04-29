<template>
  <v-layout>
    <counter />
  </v-layout>
</template>

<script>
import Counter from '~/components/Counter.vue'

export default {
  components: {
    Counter
  },
  created() {
    console.log(process.env)
  }
}
</script>
