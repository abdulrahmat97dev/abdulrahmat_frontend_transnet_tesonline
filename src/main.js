import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Auth from './common/Auth.js'

Vue.config.productionTip = false
Vue.use(Auth)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
