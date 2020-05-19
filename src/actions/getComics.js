import axios from 'axios'
require('dotenv').config()

const getComics = ( params={} ) => {
    return new Promise((resolve, reject) => {
        // console.log('process.env', process.env)
        // console.log('process.env.REACT_APP_API', process.env.REACT_APP_API)
        let url = `${process.env.REACT_APP_API}/comics/`

        if(params.hasOwnProperty['publishers']){
            url = url+'publishers'+params.publishers+'/'
        }


        // console.log('url', url)

        axios.get(url)
        .then(response => {
            // console.log('response', response)
            if(response && response.data) resolve(response.data)
            else resolve([])
        })
        .catch(reject)
    })

} 

export default getComics