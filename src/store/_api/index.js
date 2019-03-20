import axios from 'axios'

const baseUrl = (window.location.origin ? window.location.origin : window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : ''))

export const getAllTranslations = ({ lang }) => {
    const path = `${baseUrl}/assets/data/translations/${lang}.json`

    const headers = {
        'Accept': 'application/json'
    }

    return axios({
        method: 'get',
        url: path,
        headers: headers
    }).then(result => {
        if (result.status >= 200 && result.status < 300) return result.data
        else return result.then(Promise.reject(result.message))
    })
}

// Export
export default {
    getAllTranslations
}
