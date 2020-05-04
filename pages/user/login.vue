<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-toolbar color="primary">
            <v-card-title>{{ $t('user.login.title') }}</v-card-title>
          </v-toolbar>

          <v-card-text>
            <login />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import FormLogin from '~/components/user/form/form-login.vue'

interface Props {}

export default defineComponent({
  name: 'login-view',
  components: { FormLogin },
  props: {}
})
</script>

<style lang="scss"></style>
