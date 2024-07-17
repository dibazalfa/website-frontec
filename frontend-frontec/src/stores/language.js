import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'en',
  }),
  actions: {
    setLanguage(lang) {
      this.currentLanguage = lang
    }
  }
})
