import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// let App = {
//   template: '<div>app</div>'
// }

new Vue({
  render: h => h(App),
  // component: {
  //   'app': App
  // }
}).$mount('#app')
