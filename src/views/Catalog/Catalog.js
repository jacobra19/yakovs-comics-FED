import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import ComicCard from '../../components/General/ComicCard/ComicCard';
import getComics from '../../actions/getComics';
import getPublishers from '../../actions/getPublishers';


const Catalog = (props) => {
    const [comics, setComics] = useState([]);
    const [options, setOptions] = useState([])

    const example = {
        "_id": "5e558208e12490d445388e67",
        "publish": {
          "title": "Marvel",
          "date": "Jun 2002"
        },
        "media": {
          "coverSrc": "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/732221.jpg"
        },
        "series": {
          "title": "Captain America",
          "issue": "1"
        },
        "description": "In the aftermath of 9/11, Cap must deal with the way America, and the world, have changed. From the ruins of the World Trade Center to the horrors of a small town shaken by terrorism, this is one double-sized first issue you'll never forget, and neither will Marvel's star-spangled champion!",
        "saga": {
          "title": "2002 4th Series",
          "currentIssue": "1",
          "totalIssues": "1"
        },
        "variant": "",
        "creators": {
          "coverArtBy": [
            "JOHN CASSADAY"
          ],
          "writtenBy": [
            "JOHN NEY RIEBER"
          ],
          "pencilsBy": [
            "JOHN CASSADAY"
          ],
          "inksBy": []
        }
      }

    useEffect(() => {
        getAllComics()
        loadOptions()


        return () => {
            // console.log('clean (umnount)')
        };
    },[]);

    useEffect(() => {
        console.log('comics', comics)
        return () => {
            // cleanup
        }
    },[comics])

    const styles = (s) => {
        let styles = {
            root: {
                height: '100%',
                width: '100%',
                overflow:'auto',
                padding: 15,
            },
            filtersCont:{

            },
            comicsCont:{
                display: "grid",
                gridGap:20,
                gridTemplateColumns: "1fr 1fr",
            }
        }

        return(styles[s]);
    }

    const getAllComics = () => {
        getComics()
        .then(res=>{
            setComics(res)
        })
        .catch(err=>{
            console.log('err', err)
        })
    }

    const handleSelectChange = (e) => {
        if(!e) {
            getAllComics(); 
            return;
        }
        getComics({publisher:e.value})
        .then(res=>{
            setComics(res)
        })
        .catch(err=>{
            console.log('err', err)
        })
    }

    const loadOptions = () => {
        getPublishers()
        .then(res=>{
            setOptions(res)
        })
        .catch(err=>{
            console.log('err', err)
        })
    }

    const renderFilters = () => {
        return (
            <div style={styles('filtersCont')}>
                <Select
                    onChange={handleSelectChange}
                    options={options}
                    isClearable={true}
                    />
            </div>
        )
    }

    const renderComics = () => {
        return(
            <div style={styles('comicsCont')}>
                {
                    comics.map((item,idx)=>{
                        return(
                            <ComicCard key={idx} comicbook={item}/>
                            )
                    })
                }
            </div>
        )
    }

    return (
        <div style={styles('root')}>
            { renderFilters() }
            { renderComics() }
        </div>
    )
}

export default Catalog
