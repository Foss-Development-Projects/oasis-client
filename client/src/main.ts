import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import App from './App.vue'
import router from './router'

import './assets/styles/main.less'
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

const app = createApp(App)
app.use(createPinia())
app.use(vuetify)
app.use(router)
app.provide('window', window)
app.mount('#app')