import React, { useState } from 'react';
import getComicsCollection from "../../actions/getComicsCollection";

import { AppBar, Typography, TextField } from '@material-ui/core';


const AdminPanel = () => {
    const [textFieldText, setTextFieldText] = useState<string>('');

    type Styles = {
        [key:string]:object
    }
    
    const styles = (s:string) => {
        let styles:Styles = {
            root: {
                height: "calc(100% - 60px)",
                marginTop:60,
            },
        }

        return(styles[s]);
    }

    const handleChangeTextField = (e:any) => {
        if(e.target.value==='') return
        setTextFieldText(e.target.value)

    }

    const handleKeyDownTextField = (e:any) => {
        if(e.key==='Enter') console.log('enter :>> ', textFieldText);

        getComicsCollection({collectionId:textFieldText})
        
    }

    return (
        <div style={styles('root')}>
            <TextField onChange={handleChangeTextField} onKeyDown={handleKeyDownTextField}></TextField>

        </div>
    )
}

export default AdminPanel
