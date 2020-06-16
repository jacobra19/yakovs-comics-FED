import React, { useState } from 'react';
import getComicsCollection from "../../actions/getComicsCollection";

import { Typography, TextField, Button } from '@material-ui/core';
import { isEmpty as _isEmpty } from 'lodash';

import { ComicBook } from "../../types";

import IssuesTable from "../../components/General/IssuesTable/IssuesTable";

type Data = {
    issues: ComicBook[],
    title: string
}

const AdminPanel = () => {
    const [textFieldText, setTextFieldText] = useState<string>('');
    const [titleData, setTitleData] = useState<Data>({issues:[],title:''});
    const [selectedIssues, setSelectedIssues] = useState<ComicBook[]>([])

    type Styles = {
        [key:string]:object
    }
    
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

    const handleCheckIssues = (checkedIssues: ComicBook[]) => {
        console.log('handleCheckIssues checkedIssues :>> ', checkedIssues);
        // setSelectedIssues(checkedIssues)
    }

    const TitleInfoBox:React.FC<TitleInfoBoxProps> = (props) => {
        let isEmptyData:boolean = _isEmpty(props.data.issues) && _isEmpty(props.data.title)
        let text:string = isEmptyData ? `` : `${props.data.title} has ${props.data.issues.length} issues`
        return(
            <div>
                <Typography>{text}</Typography>
                <IssuesTable issues={props.data.issues} onCheckboxChange={handleCheckIssues}/>
            </div>

        )
    }

    interface ButtonWrapProps {
        issues: ComicBook[]
    }

    const ButtonWrap:React.FC<ButtonWrapProps> = (props) => {
        return(
            <div>
                <Button style={{fontSize:13}} 
                        disabled={_isEmpty(props.issues)} 
                        variant="contained" color="primary">
                            Add To Database ({props.issues.length} issues)
                </Button>
            </div>

        )
    }

    return (
        <div style={styles('root')}>
            <TextField  onChange={handleChangeTextField} 
                        onKeyDown={handleKeyDownTextField} 
                        placeholder={'Insert Title ID'}
                        inputProps={{
                            style:{
                                fontSize:13
                            }
                        }}
                        style={{marginBottom:15}}
            />
            <TitleInfoBox data={titleData}/>
            
            {/* <ButtonWrap issues={selectedIssues}/> */}


        </div>
    )
}

export default AdminPanel
