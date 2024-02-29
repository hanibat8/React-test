import axios from 'axios'

const token='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'
axios.defaults.baseURL='https://api.github.com'
axios.defaults.headers.common={'Authorization': `Bearer ${token}`}

export let getData= async (url)=>{
    let response= await axios.get(url)
    return response
}