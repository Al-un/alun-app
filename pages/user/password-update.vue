<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-toolbar color="primary">
            <v-card-title>Update password</v-card-title>
          </v-toolbar>

          <v-form ref="loginForm">
            <v-card-text>
              <v-text-field
                v-model="state.password"
                type="password"
                required
                label="Password"
                prepend-icon="mdi-lock"
              ></v-text-field>
              <v-text-field
                v-model="state.passwordConfirm"
                type="password"
                required
                label="Password (confirm)"
                prepend-icon="mdi-lock"
              ></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-btn block color="primary" @click="updatePassword"
                >Update password</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
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
      password: '',
      passwordConfirm: ''
    })

    const updatePassword = async () => {
      await userApi.updatePassword(token, state.password, state.username)
    }

    return {
      state,
      updatePassword
    }
  }
})
</script>

<style lang="scss"></style>
