<template>
  <div>
    <h1 v-html="translations.global.title"></h1>
  </div>
</template>
<script>
export default {
  name: 'Home',
  computed: {
    translations () {
      return this.$store.state.translations[this.$store.state.currentLanguage]
    }
  }
}
</script>
