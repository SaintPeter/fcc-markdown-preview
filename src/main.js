import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*
let store = {
  debug: true,
  state: {
    content: 'Hello!'
  },
  setMessageAction (newValue) {
    if (this.debug) console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}
*/

new Vue({
  render: h => h(App),

}).$mount('#app')

/*   data: {
    sharedState: store.state
  }
  
 */