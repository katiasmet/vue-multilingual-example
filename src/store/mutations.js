const handleTranslations = (state, { lang, translations }) => {
    state.currentLanguage = lang
    state.translations[lang] = translations
    state.translationsLoaded = true
}

// Export
export default {
    handleTranslations
}
