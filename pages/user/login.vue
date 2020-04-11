<template>
  <v-layout align-center justify-center>
    <v-card>
      <v-text-field v-model="state.email" label="Email" required></v-text-field>
      <v-text-field
        v-model="state.password"
        label="Password"
        required
        type="password"
      ></v-text-field>

      <v-card-actions>
        <v-btn text @click="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { userApi } from '~/api/user'

interface Props {}

export default defineComponent({
  name: '',
  components: {},
  props: {},

  setup() {
    const state = reactive({
      email: '',
      password: ''
    })

    const login = () => {
      userApi.login(state.email, state.password)
    }

    return {
      state,
      login
    }
  }
})
</script>

<style lang="scss"></style>
