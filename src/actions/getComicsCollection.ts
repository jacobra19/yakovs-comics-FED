import axios from 'axios'
require('dotenv').config()

import addFromScrapeComics from "../actions/addFromScrapeComics";
import { ComicBook } from "../types";

type getComicsCollectionParams = {
    collectionId: string
}

const getComicsCollection = ( params?:getComicsCollectionParams ) => {
    console.log('params', params)
    return new Promise((resolve, reject) => {
        let url:string;
        if(params && params.collectionId){
            url = `${process.env.REACT_APP_Mycomicshop}${params.collectionId}`
        } else {
            url = `${process.env.REACT_APP_Mycomicshop}47887081`
        }

        axios.get(url)
        .then((response) => {
            console.log('getComicsCollection response', response)
            let data = response.data

            let s = '<div id="myDiv"></div>';
            let htmlObject = document.createElement('div');
            htmlObject.innerHTML = data;

            let results = htmlObject.getElementsByClassName('issue')
            console.log('results', results)

            if(!results) return
            let list = Array.prototype.slice.call( results )

            
            let fetchedBooks = list.map((item:any )=>{
                console.log('typeof item', typeof item)
                console.log('item', item)

                return {
                    publish: {
                        title: item.querySelector('.othercolright').lastElementChild.innerText,
                        date: item.querySelector('.othercolright').firstElementChild.innerText
                    },
                    media:{
                        coverSrc:item.querySelector('.img a') ? item.querySelector('.img a').href : ''
                    },
                    series:{
                        title: item.querySelector('.title a').innerText,
                        issue: item.querySelector('.title strong').innerText,
                    },
                    description:item.querySelector('.tabcontents').lastElementChild.innerText,
                    saga:{
                        title: '',
                        currentIssue: '',
                        totalIssues: '',
                    },
                    variant: '',
                    creators:{
                        coverArtBy: [],
                        writtenBy: [],
                        pencilsBy: [],
                        inksBy: [],
                    }
                }
            })
            console.log('fetchedBooks', fetchedBooks)
            resolve(fetchedBooks)
            // return fetchedBooks
        // })
        // .then((fetchedBooks: ComicBook[] = [])=>{
        //     console.log('fetchedBooks', fetchedBooks)
        //     addFromScrapeComics( fetchedBooks)
        //     .then(console.log)
        //     .catch(console.log)

        })
        .catch(reject)
    })

} 

export default getComicsCollection