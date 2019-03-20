import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/*
 *  VUE TRANSLATIONS
 *  ============
 */
 new Vue({
     el: '#app',
     router,
     store,
     template: '<App/>',
     components: { App },
     data: { translations: '' },
     async created () {
         // Base Language is English
         let lang = 'en'
         if (this.$route && this.$route.path.indexOf('fr') > -1) {
             lang = 'fr'
         } else if (this.$route && this.$route.path.indexOf('nl') > -1) {
             lang = 'nl'
         }

         this.$store.dispatch('getTranslations', { lang: lang })
     }
 })
