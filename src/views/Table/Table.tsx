import React, { useState } from 'react';
import getComicsCollection from "../../actions/getComicsCollection";
import addFromScrapeComics from '../../actions/addFromScrapeComics'

import { Typography, TextField, Button } from '@material-ui/core';
import { isEmpty as _isEmpty } from 'lodash';

import { ComicBook, Styles } from "../../types";


const Table = () => {

    const styles = (s:string) => {
        let styles:Styles = {
            root: {
                height: "calc( 100% - 30px )",
                width: "100%",
                overflow: "auto",
                padding: 15,
            },
        }

        return(styles[s]);
    }





    return (
        <div style={styles('root')}>
            table here
        </div>
    )
}

export default Table
