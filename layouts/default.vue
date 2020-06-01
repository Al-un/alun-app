<template>
  <v-app :dark="dark">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-item to="/" router exact>
          <v-list-item-icon>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $t('nav.menu.home') }}</v-list-item-title>
        </v-list-item>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>{{ $t('nav.menu.apps') }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(app, idx) in apps"
            :key="idx"
            :to="app.to"
            router
            exact
          >
            <v-list-item-title>{{ $t(app.i18n) }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>{{ $t('nav.menu.utils') }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="(util, idx) in utils"
            :key="idx"
            :to="util.to"
            router
            exact
          >
            <v-list-item-title>{{ $t(util.i18n) }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <div v-if="isLogged">
        <span>{{ userName }}</span>
        <v-btn>{{ $t('nav.header.logout') }}</v-btn>
      </div>
      <v-btn v-else :to="loginDest" nuxt>{{ $t('nav.header.login') }}</v-btn>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import { LS_USER_TOKEN, SERVICES_APPS, SERVICES_UTILS } from '~/constants'

export default {
  name: 'DefaultLayout',

  data() {
    return {
      dark: true,
      drawer: false,
      apps: SERVICES_APPS,
      utils: SERVICES_UTILS,
      panels: []
    }
  },

  computed: {
    loginDest() {
      return `/user/login?nextPage=${this.$route.path}`
    },
    isLogged() {
      return this.$store.getters.isLogged
    },
    userName() {
      return this.$store.state.userProfile
        ? this.$store.state.userProfile.username ||
            this.$store.state.userProfile.id
        : ''
    }
  },

  created() {
    this.$vuetify.theme.dark = this.dark
  },

  // https://github.com/nuxt/nuxt.js/issues/1818#issuecomment-335634895
  mounted() {
    const token = localStorage.getItem(LS_USER_TOKEN) ?? undefined
    this.$store.dispatch('saveToken', token)
  }
}
</script>
