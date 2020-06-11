import axios from 'axios'
require('dotenv').config()

import { ComicBook } from "../types";

type getComicsParams = {
    publisher: string
}

const getComics = ( params?:getComicsParams ) => {
    console.log('params', params)
    return new Promise((resolve, reject) => {
        let url = `${process.env.REACT_APP_API}/comics/`

        if(params && params.hasOwnProperty('publisher')) url = `${url}publishers/${params.publisher}/`

        axios.get(url)
        .then((response) => {
            console.log('getComics response', response)
            let comics: ComicBook[] = [];
            if(response && response.data) {
                // comics = [...response.data]
                resolve(comics)
            }
            else resolve(comics)
        })
        .catch(reject)
    })

} 

export default getComics