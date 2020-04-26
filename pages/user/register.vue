<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-toolbar color="primary">
            <v-card-title>Register</v-card-title>
          </v-toolbar>

          <v-form ref="loginForm">
            <v-card-text>
              <v-text-field
                v-model="state.email"
                label="Email"
                prepend-icon="mdi-email"
                required
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-btn block color="primary" @click="register">Register</v-btn>
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
