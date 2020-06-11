import axios from 'axios'
require('dotenv').config()


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
            // console.log('htmlObject', htmlObject)

            let results = htmlObject.getElementsByClassName('issue')
            console.log('results', results)

            if(!results) return
            let list = Array.prototype.slice.call( results )
            // console.log('list', list)
            // console.log('typeof list', typeof list)
            let fetchedBooks = list.map((item:any)=>{
                // console.log('item', item)
                let title = item.querySelector('.title').innerText
                console.log('title', title)
                return title
            })
        })
        .catch(reject)
    })

} 

export default getComicsCollection