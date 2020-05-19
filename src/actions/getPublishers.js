import axios from 'axios'
require('dotenv').config()

const getPublishers = ( params ) => {
    return new Promise((resolve, reject) => {

        axios.get(`${process.env.REACT_APP_API}/publishers/`)
        .then(response => {
            // console.log('response', response)
            if(response && response.data) {
                let options = response.data.map(opt=>{
                    return { label: opt, value: opt }
                })
                resolve(options)
            }
        })
        .catch(reject)
    })

} 

export default getPublishers