import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import cn from './cn'
import { getLocale, setLocale } from '../utils/localStorage'

Vue.use(VueI18n)

const messages = {
  en,
  cn
}
let locale = getLocale()
if (!locale) {
  locale = 'en'
  setLocale(locale)
}
const i18n = new VueI18n({
  locale,
  messages,
})

export default i18n
