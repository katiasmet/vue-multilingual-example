<template>
  <header class="c-header">
    <Navigation />
    <LanguageSwitch />
  </header>
</template>
<script>
import Navigation from './Navigation'
import LanguageSwitch from './LanguageSwitch'

export default {
  name: 'Headr',

  components: {
    Navigation,
    LanguageSwitch
  }
}
</script>
