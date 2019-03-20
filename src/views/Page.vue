<template>
  <div>
    <h1 v-html="translations.detail.title"></h1>

    <div class="c-content__item">
      <h2>{{ translations.detail.ingredients_title }}</h2>
      <ul class="o-list-bare o-layout o-layout--flush">
        <li class="o-list-bare__item o-layout__item u-1/2 c-content__list-item"
            v-for="ingredient in translations.detail.ingredients"
            :key="ingredient">
          {{ ingredient }}
        </li>
      </ul>
    </div>

    <div class="c-content__item">
      <h2>{{ translations.detail.preparation_title }}</h2>
      <div v-html="translations.detail.preparation"></div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Page',
  computed: {
    translations () {
      return this.$store.state.translations[this.$store.state.currentLanguage]
    }
  }
}
</script>
