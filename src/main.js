import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'vue-material-design-icons/styles.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

new Swiper("#swiper-1", {
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },
  lazyLoading: true,
  loop: true
})  
