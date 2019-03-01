// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BootstrapVue from 'bootstrap-vue'
import Chat from 'vue-beautiful-chat'
import VueAuthenticate from 'vue-authenticate'
import VueAxios from 'vue-axios'
import GoogleAuth from 'vue-google-auth'
/*import VueParticles from 'vue-particles'*/
//////////////////////////////////////////
import 'normalize.css/normalize.css'
import 'prismjs/themes/prism.css'
import 'prismjs/themes/prism-okaidia.css'
import './assets/tables.scss'
import VueParticles from './vue-particles'
import VuePrism from 'vue-prism'
Vue.use(VueParticles, VuePrism)
//////////////////////////////////////////
Vue.use(VueParticles)
//
// Vue.googleAuth().signIn(function (authorizationCode) {
//
//   // things to do when sign-in succeeds
//
//   // You can send the authorizationCode to your backend server for further processing, for example
//   this.$http.post('http://your/backend/server', { code: authorizationCode, redirect_uri: 'postmessage' }).then(function (response) {
//     if (response.body) {
//       // ...
//     }
//   }, function (error) {
//     console.log(error)
//   })
//
// }, function (error) {
//   // things to do when sign-in fails
// });

Vue.use(Chat);


Vue.use(GoogleAuth, { clientID: '504837732491-3m48g7ol18lm1jlelj877h4ond2guumn.apps.googleusercontent.com' })
Vue.googleAuth().load()

Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:8081', // Your API domain

  providers: {
    github: {
      clientId: '504837732491-3m48g7ol18lm1jlelj877h4ond2guumn.apps.googleusercontent.com',
      redirectUri: 'http://localhost:8080/auth/callback' // Your client app URL
    }
  }
});

Vue.prototype.$http = axios;
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(BootstrapVue);
import'../src/assets/css/bootstrap.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
