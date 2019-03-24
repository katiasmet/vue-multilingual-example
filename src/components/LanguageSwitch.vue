<template>
  <div>
    <button
      class="c-nav__btn"
      v-for="language in Object.keys(languages)"
      v-on:click.prevent="handleLanguage(language)"
      :key="language"
      :disabled="currentLanguage === language"
      type="button">
      {{ languages[language] }}
    </button>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'LanguageSwitch',

  methods: {
    handleLanguage (lang) {
      this.$store.dispatch('getTranslations', { lang: lang })
      this.handleRedirect(lang)
    },

    handleRedirect (currentLang) {
      let redirect = false
      let path = this.$route.path

      if (this.$route.path !== this.$route.meta[currentLang]) {
        redirect = true
        path = this.$route.meta[currentLang]
      }

      if (redirect) {
        this.$router.push({ path: path, params: { lang: currentLang } })
      }
    }
  },

  computed: {
    ...mapState({
      currentLanguage: 'currentLanguage',
      languages: 'languages'
    })
  }
}
</script>
