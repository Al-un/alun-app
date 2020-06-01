<template>
  <v-app :dark="dark">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
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
import { LS_USER_TOKEN } from '../constants'
export default {
  name: 'DefaultLayout',

  data() {
    return {
      dark: true,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ]
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

  mounted() {
    const token = localStorage.getItem(LS_USER_TOKEN) ?? undefined
    this.$store.dispatch('saveToken', token)
  }
}
</script>
