/**
 * References
 * https://medium.com/js-dojo/a-guide-on-using-storybook-with-nuxt-js-1e0018ec51c9
 *
 * https://storybook.js.org/docs/guides/guide-vue/
 * https://storybook.js.org/docs/addons/introduction/
 * https://storybook.js.org/addons/
 */

// --- Storybook
import * as Storybook from '@storybook/vue'
import { withKnobs, select } from '@storybook/addon-knobs' // Hack from https://github.com/storybookjs/storybook/issues/6219#issuecomment-482478962
// --- Plugins
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueI18n from 'vue-i18n'
import { i18nOptions, vuetifyOptions } from '../nuxt.config'
import { messages } from '~/i18n'

Vue.use(VueCompositionApi)

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en',
  locales: ['en', 'fr'],
  messages,
  // langDir: 'i18n/',
  // missing: (loc, key, vm, vals) => {
  //   console.warn(`Missing ${key} for ${loc}`, vals)
  //   console.debug('vm.$i18n.messages', vm.$i18n.messages)
  // }
})

// https://github.com/nidkil/vuetify-with-storybook/blob/master/src/plugins/vuetify.js
// https://vuetifyjs.com/en/customization/icons/#usage
Vue.use(Vuetify)
const vuetify = new Vuetify({
  ...vuetifyOptions,
  icons: { iconfont: 'mdiSvg' }
})

// Loading stories
const requireAll = require.context('./..', true, /\.stories\.ts$/)
function loadStories() {
  requireAll.keys().forEach((filename) => {
    requireAll(filename)
  })
}

// Storybook-ing
// https://github.com/nidkil/vuetify-with-storybook/blob/master/config/storybook/config.js
Storybook.addDecorator(() => ({
  vuetify,
  i18n,
  template: '<v-app><story/></v-app>',

  props: {
    // https://medium.com/studist-dev/internationalization-in-storybook-4be77773494c
    storybookLocale: {
      type: String,
      default: select('locale', ['en', 'fr'], 'en')
    }
  },
  watch: {
    storybookLocale: {
      handler() {
        this.$i18n.locale = this.storybookLocale
      },
      immediate: true
    }
  },
  created() {
    console.log(`messages`, this.$i18n.messages)
    console.log(`availableLocales`, this.$i18n.availableLocales)
  }
}))
Storybook.addDecorator(withKnobs)
Storybook.configure(loadStories, module)
