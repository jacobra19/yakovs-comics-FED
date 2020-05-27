import axios from 'axios'
require('dotenv').config()

const getPublishers = () => {
    return new Promise((resolve, reject) => {

        let url = `${process.env.REACT_APP_API}/publishers/`

        axios.get(url)
        .then(response => {
            // console.log('response', response)
            if(response && response.data) {

                let options = response.data.map((opt:string)=>{
                    return { label: opt, value: opt }
                })
                resolve(options)
            }
        })
        .catch(reject)
    })

} 

export default getPublishers