import './assets/style.css'

import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
// import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCircleArrowLeft);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');


const app = createApp(App)
// const pinia = createPinia()

app.use(router)
app.use(i18n)
// app.use(pinia)
app.use(MotionPlugin)
app.mount('#app')
