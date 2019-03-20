import { getAllTranslations } from './_api'

const getTranslations = ({ commit }, { lang }) => {
    return new Promise((resolve, reject) => {
        getAllTranslations({ lang: lang })
        .then(result => {
            commit('handleTranslations', { translations: result, lang: lang })
            return resolve(result)
        })
        .catch(error => {
            const message = error.response.data.message
            reject(new Error(message))
        })
    })
}

// Export
export default {
    getTranslations
}
