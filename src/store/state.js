export const initialState = () => {
    return {
        /*
         *  TRANSLATIONS
         */
        translationsLoaded: false,
        languages: {
          en: 'english',
          nl: 'nederlands',
          fr: 'français'
        },
        currentLanguage: 'en',
        translations: {}
    }
}
