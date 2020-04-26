<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-toolbar color="primary">
            <v-card-title>Login</v-card-title>
          </v-toolbar>

          <v-form ref="loginForm">
            <v-card-text>
              <v-text-field
                v-model="state.email"
                label="Email"
                prepend-icon="mdi-email"
                required
              ></v-text-field>
              <v-text-field
                v-model="state.password"
                :append-icon="state.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="state.showPassword ? 'text' : 'password'"
                required
                label="Password"
                prepend-icon="mdi-lock"
                @click:append="state.showPassword = !state.showPassword"
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-btn block color="primary" @click="login">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
      password: '',
      showPassword: false
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
