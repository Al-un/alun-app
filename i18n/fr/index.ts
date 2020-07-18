import { LocaleMessageObject } from 'vue-i18n/types'

import core from './core'
import vuetify from './vuetify'

const fr: LocaleMessageObject = {
  ...core,
  $vuetify: vuetify
}

export default fr
