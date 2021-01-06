import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'
const getActiveRule = hash => location => location.hash.startsWith(hash)

registerMicroApps([
  {
    name: 'childApp', // app name registered
    entry: 'http://192.168.206.161:8000',
    container: '#childApp',
    activeRule: getActiveRule('#/child-app')
  }
])
start()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
