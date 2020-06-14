import React, { useState } from 'react';
import getComicsCollection from "../../actions/getComicsCollection";

import { AppBar, Typography, TextField, Button } from '@material-ui/core';
import { isEmpty as _isEmpty } from 'lodash';

import { ComicBook } from "../../types";

type Data = {
    issues: ComicBook[],
    title: string
}

const AdminPanel = () => {
    const [textFieldText, setTextFieldText] = useState<string>('');
    const [titleData, setTitleData] = useState<Data>({issues:[],title:''});

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
        if(e.key==='Enter'){
            getComicsCollection({collectionId:textFieldText})
            .then((res:any)=>{
                console.log('res :>> ', res);
                if(_isEmpty(res)){
                    setTitleData({
                        issues: [],
                        title: ''
                    })    
                } else {
                    setTitleData({
                        issues: res,
                        title: res[0].series.title
                    })

                }
            })
            .catch(console.log)
        }

        
    }

    interface TitleInfoBoxProps {
        data: Data
    }

    const TitleInfoBox:React.FC<TitleInfoBoxProps> = (props) => {
        let isEmptyData:boolean = _isEmpty(props.data.issues) && _isEmpty(props.data.title)
        let text:string = isEmptyData ? `` : `${props.data.title} has ${props.data.issues.length} issues`
        return(
            <div>
                <Typography>{text}</Typography>
                <Button disabled={isEmptyData} variant="contained" color="primary">Add To Database</Button>
            </div>

        )
    }

    return (
        <div style={styles('root')}>
            <TextField onChange={handleChangeTextField} onKeyDown={handleKeyDownTextField} placeholder={'Insert Title ID'}></TextField>
            <TitleInfoBox data={titleData}/>
        </div>
    )
}

export default AdminPanel
