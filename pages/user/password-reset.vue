<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-toolbar color="primary">
            <v-card-title>Request a password reset</v-card-title>
          </v-toolbar>

          <v-form ref="loginForm">
            <v-card-text>
              <v-text-field
                v-model="state.email"
                type="email"
                label="Email"
                prepend-icon="mdi-email"
                required
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-btn block color="primary" @click="requestPwdReset"
                >Reset</v-btn
              >
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
      email: ''
    })

    const requestPwdReset = async () => {
      await userApi.requestResetPassword(state.email)
    }

    return {
      state,
      requestPwdReset
    }
  }
})
</script>

<style lang="scss"></style>
