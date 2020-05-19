<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-toolbar color="primary">
            <v-card-title>Register</v-card-title>
          </v-toolbar>

          <v-card-text>
            <form-register />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

import FormRegister from '~/components/user/form-register.vue'

export default defineComponent({
  name: 'RegisterPage',
  components: { FormRegister }
})
</script>
