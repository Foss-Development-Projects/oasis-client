import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { FontAwesomeIcon  } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		}
	},
	components,
	directives,
})

library.add(faUser)

const app = createApp(App)
app.component('fa-icon' ,FontAwesomeIcon)
app.use(createPinia())
app.use(vuetify)
app.use(router)
app.provide('window', window)
app.mount('#app')