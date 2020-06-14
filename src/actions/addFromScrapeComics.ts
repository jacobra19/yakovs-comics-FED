import axios from 'axios'
require('dotenv').config()

import { ComicBook } from "../types";

type entries = ComicBook[];


const addFromScrapeComics = (newEntries:entries) => {
    return new Promise((resolve, reject) => {

        let url = `${process.env.REACT_APP_API}/comics/new`
        console.log('newEntries.length', newEntries.length)
        axios.post(url,{entries: newEntries})
        .then(response => {
            console.log('addFromScrapeComics response', response)
        })
        .catch(reject)
    })

} 

export default addFromScrapeComics