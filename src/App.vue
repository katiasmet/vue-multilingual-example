<template>
  <div id="app" v-if="isLoaded" class="o-wrapper o-wrapper--huge">

    <Headr />
    <router-view class="c-content__main"></router-view>
    <img class="c-content__image" src="/assets/images/pizza.png" alt="Delicous pizza">

  </div>
</template>
<script>
import { mapState } from 'vuex'
import Headr from '@/components/Headr'

export default {
  name: 'app',

  mounted () {
    this.handleRouting()
  },

  methods: {
    handleRouting () {
      this.$router.beforeEach((to, from, next) => {
        let lang = to.params.lang
        if (!lang) {
          /* No language, but next path contains language */
          if (to.path.indexOf('fr') > -1) {
            lang = 'fr'
          /* No language, use default language */
          } else if (to.path.indexOf('nl') > -1) {
            lang = 'nl'
          /* No language, but language of page where you come from is known */
          } else if (from.params.lang) {
            lang = from.params.lang
          } else {
            lang = 'en'
          }
        }

        /* If there is a different language, change lang */
        if (lang !== this.$store.state.currentLanguage) {
          this.$store.dispatch('getTranslations', { lang: lang })
        }

        /* Sending to the right lang slug, if language is french but the path is not french redirect. */
        let redirect = false
        let path = ''

        if (to.path !== to.meta[lang]) {
          redirect = true
          path = to.meta[lang]
        }

        if (redirect) {
          next({ path: path, params: { lang: lang } })
        } else {
          next()
        }
      })
    }
  },

  computed: {
    ...mapState({
      isLoaded: 'translationsLoaded',
      languages: 'languages',
      currentLanguage: 'currentLanguage'
    })
  },

  // INCLUDED COMPONENTS
  components: {
    Headr
  }
}
</script>
<style lang="scss">
  @import './assets/_scss/main.scss';
</style>
