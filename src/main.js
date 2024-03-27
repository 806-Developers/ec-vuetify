import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { VSparkline } from 'vuetify/labs/VSparkline'

loadFonts()

const app = createApp(App)
app.use(vuetify)
app.component('v-sparkline', VSparkline)
app.mount('#app')