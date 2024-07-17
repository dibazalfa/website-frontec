import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import id from './locales/id.json'

const messages = {
  en,
  id,
}

const i18n = createI18n({
  locale: 'en', // Set default locale
  fallbackLocale: 'en', // Set fallback locale
  messages,
})

export default i18n
