import { Configuration } from '@nuxt/types'
import { NuxtVueI18n } from 'nuxt-i18n'
// To fix import/named error:
// 3:10  error  Options not found in '@nuxtjs/vuetify'  import/named
// https://stackoverflow.com/a/55261724/4906586
import * as VuetifyTypes from '@nuxtjs/vuetify'
import colors from 'vuetify/es5/util/colors'

interface AlunConfig extends Configuration {}

const i18nOptions: NuxtVueI18n.Options.AllOptionsInterface = {
  defaultLocale: 'en',
  differentDomains: false,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_locale'
  },
  langDir: 'i18n/',
  lazy: true,
  locales: [
    { code: 'en', iso: 'en-GB', file: 'en.json', name: 'English' },
    { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' }
  ],
  parsePages: false
}

/**
 * https://vuetifyjs.com/en/customization/theme/
 */
export const vuetifyOptions: VuetifyTypes.Options = {
  customVariables: ['~/assets/variables.scss'],
  theme: {
    dark: true,
    disable: false,
    default: false,
    options: {},
    themes: {
      light: {
        primary: colors.teal.lighten2,
        accent: colors.blueGrey.darken3,
        secondary: colors.pink.darken1,
        info: colors.blue.lighten2,
        warning: colors.amber.base,
        error: colors.red.accent4,
        success: colors.green.accent3
      },
      dark: {
        primary: colors.teal.darken1,
        accent: colors.blueGrey.darken3,
        secondary: colors.pink.darken1,
        info: colors.blue.lighten1,
        warning: colors.amber.base,
        error: colors.red.accent4,
        success: colors.green.accent3
      }
    }
  }
}

const alunConfig: AlunConfig = {
  mode: 'universal',
  // https://nuxtjs.org/faq/host-port/#configure-in-code-nuxt-config-js-code-
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || '0.0.0.0'
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s',
    title: 'Al-un',
    // title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Apps, games and utilities'
        // content: process.env.npm_package_description || ''
      },
      { name: 'author', content: 'Al-un' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    //  color: '#fff'
    color: colors.teal.base
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/composition-api'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // https://nuxt-community.github.io/nuxt-i18n/
    // ['nuxt-i18n', i18nOptions]
    'nuxt-i18n'
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: vuetifyOptions,
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend() {}
  },
  i18n: i18nOptions
}

export default alunConfig
