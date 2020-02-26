import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import ComicCard from '../../components/ComicCard/ComicCard';

require('dotenv').config()

const Catalog = (props) => {
    const [comics, setComics] = useState([]);
    const [options, setOptions] = useState([])

    useEffect(() => {
        getAllComics()
        loadOptions()


        return () => {
            console.log('clean (umnount)')
        };
    },[]);

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
        let url = `${process.env.REACT_APP_API}comics/`
        console.log('url', url)
        axios.get(url)
        .then(response => {
            console.log('response', response)
            if(response && response.data) setComics(response.data)
            else setComics([])
        })
        .catch((e) => {
            console.log(e)
        })
    }

    const handleSelectChange = (e) => {
        if(!e) {
            getAllComics(); 
            return;
        }
        axios.get(`${process.env.REACT_APP_API}comics/publishers/${e.value}/`)
        .then(response => {
            if(response && response.data) setComics(response.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    const loadOptions = () => {
        axios.get(`${process.env.REACT_APP_API}publishers/`)
        .then(response => {
            console.log('response', response)
            if(response && response.data) {
                let options = response.data.map(opt=>{
                    return { label: opt, value: opt }
                })
                setOptions(options)
            }
        })
        .catch((e) => {
            console.log(e)
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
