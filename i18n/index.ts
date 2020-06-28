import { LocaleMessages, LocaleMessageObject } from 'vue-i18n/types'

import { default as jsonEn } from './en.json' // eslint-disable-line import/no-named-default
import { default as jsonFr } from './fr.json' // eslint-disable-line import/no-named-default

const defaultEn: LocaleMessageObject = (jsonEn as unknown) as LocaleMessageObject
const defaultFr: LocaleMessageObject = (jsonFr as unknown) as LocaleMessageObject

export const messages: LocaleMessages = {
  en: { ...defaultEn },
  fr: { ...defaultFr }
}
