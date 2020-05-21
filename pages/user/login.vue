<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-tabs v-model="tabModel">
            <v-tab>{{ $t('user.login.title') }}</v-tab>
            <v-tab>{{ $t('user.pwd-request.title') }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tabModel">
            <v-tab-item>
              <v-card-text>
                <form-login />
              </v-card-text>
            </v-tab-item>
            <v-tab-item>
              <v-card-text>
                <form-password-request />
              </v-card-text>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

import FormLogin from '~/components/user/form-login.vue'
import FormPasswordRequest from '~/components/user/form-password-request.vue'

interface Props {}

export default defineComponent({
  name: 'LoginPage',
  components: { FormLogin, FormPasswordRequest },
  props: {},

  setup() {
    return {
      tabModel: ref(0)
    }
  }
})
</script>

<style lang="scss"></style>
