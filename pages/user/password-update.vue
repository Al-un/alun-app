<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-card>
        <v-text-field
          v-model="state.username"
          label="Username"
          required
        ></v-text-field>
        <v-text-field
          v-model="state.password"
          label="Password"
          type="password"
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
import { defineComponent, reactive, SetupContext } from '@vue/composition-api'
import { userApi } from '~/api/user'

export default defineComponent({
  name: 'password-update-page',

  setup(_: {}, ctx: SetupContext) {
    const token = (ctx.root as any).$route.query.t as string

    const state = reactive({
      username: undefined,
      password: ''
    })

    const register = async () => {
      await userApi.updatePassword(token, state.password, state.username)
    }

    return {
      state,
      register
    }
  }
})
</script>

<style lang="scss"></style>
