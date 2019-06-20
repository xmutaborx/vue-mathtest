import Vue from 'vue'
import App from './App.vue'

import AppMessage from './components/Message.vue'
import AppQuestion from './components/Question.vue'
import AppStartScreen from './components/StartScreen.vue'
import AppProgress from './components/Progress.vue'
import AppGrac from './components/Grac.vue'
import AppTable from './components/Table.vue'

Vue.component('AppMessage', AppMessage)
Vue.component('AppQuestion', AppQuestion)
Vue.component('AppStartScreen', AppStartScreen)
Vue.component('AppProgress', AppProgress)
Vue.component('AppGrac', AppGrac)
Vue.component('AppTable', AppTable)

new Vue({
  el: '#app',
  render: h => h(App)
})
