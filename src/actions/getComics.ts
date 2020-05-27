import axios from 'axios'
require('dotenv').config()

const getComics = ( params:{publisher:string} ) => {
    console.log('params', params)
    return new Promise((resolve, reject) => {
        let url = `${process.env.REACT_APP_API}/comics/`

        if(params && params.hasOwnProperty('publisher')) url = `${url}publishers/${params.publisher}/`

        axios.get(url)
        .then(response => {
            console.log('getComics response', response)
            if(response && response.data) resolve(response.data)
            else resolve([])
        })
        .catch(reject)
    })

} 

export default getComics