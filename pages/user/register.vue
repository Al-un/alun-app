<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-card>
        <v-text-field
          v-model="state.email"
          label="Email"
          required
        ></v-text-field>

        <v-card-actions>
          <v-btn text @click="register">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { userApi } from '~/api/user'

export default defineComponent({
  name: 'register-page',

  setup() {
    const state = reactive({
      email: 'alun.sng+1@gmail.com'
    })

    const register = async () => {
      await userApi.register(state.email)
    }

    return {
      state,
      register
    }
  }
})
</script>

<style lang="scss"></style>
