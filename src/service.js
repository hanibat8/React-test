import axios from 'axios'

const token='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'
axios.defaults.baseURL='https://api.github.com'
axios.defaults.headers.common={'Authorization': `Bearer ${token}`}

export let getData= async (url)=>{
    let response= await axios.get(url)
    return response
}