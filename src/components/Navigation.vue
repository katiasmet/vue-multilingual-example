<template>
  <nav class="c-nav">
    <router-link :to="{ name: 'Home', params: { lang: currentLanguage } }"
                 :class="$route.name === 'Home' ? 'is-active' : ''">
      Home
    </router-link>
    &nbsp;
    <router-link :to="{ name: 'Pizza', params: { lang: currentLanguage } }"
                 :class="$route.name === 'Pizza' ? 'is-active' : ''">
      {{ translations.navigation.pizzas }}
    </router-link>
  </nav>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',

  computed: {
    ...mapState({
      currentLanguage: 'currentLanguage'
    }),

    translations () {
      return this.$store.state.translations[this.currentLanguage]
    }
  }
}
</script>
