import React, { useState } from 'react';

import { Typography, TextField, Button } from '@material-ui/core';
import { isEmpty as _isEmpty } from 'lodash';

import { ComicBook, Styles } from "../../types";

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const Table = () => {
    const columnDefs = [{
        headerName: "Make", field: "make", sortable: true
      }, {
        headerName: "Model", field: "model"
      }, {
        headerName: "Price", field: "price"
      }]

      const rowData= [{
        make: "Toyota", model: "Celica", price: 35000
      }, {
        make: "Ford", model: "Mondeo", price: 32000
      }, {
        make: "Porsche", model: "Boxter", price: 72000
      }]
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
        <div style={styles('root')}         className="ag-theme-alpine"
        >
            <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}>
            </AgGridReact>
        </div>
    )
}

export default Table
