import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import ComicCard from '../../components/General/ComicCard/ComicCard';
import getComics from '../../actions/getComics';
import getPublishers from '../../actions/getPublishers';

import { ComicBook } from "../../types";


const Catalog = () => {
    // type TComics = ComicBook[];

    // interface IComics {
    //     [index: number]: ComicBook;
    // }

    let initialComics:ComicBook[] = []
    
    const [comics, setComics] = useState<ComicBook[]>([]);
    const [options, setOptions] = useState([])

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

    type Styles = {
        [key:string]:object
    }
    
    const styles = (s:string) => {
        let styles:Styles = {
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
        .then((res)=>{
            console.log('res :>> ', res);
            // let comics: ComicBook[] = res
            // setComics(comics)
        })
        .catch(err=>{
            console.log('err', err)
        })
    }

    const handleSelectChange = (e:any) => {
        if(!e) {
            getAllComics(); 
            return;
        }
        getComics({publisher:e.target.value})
        .then(res=>{
            // setComics(res)
        })
        .catch(err=>{
            console.log('err', err)
        })
    }

    const loadOptions = () => {
        getPublishers()
        .then(res=>{
            setOptions([])
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
