import React, { useState } from 'react';
import getComicsCollection from "../../actions/getComicsCollection";

import { Typography, TextField, Button } from '@material-ui/core';
import { isEmpty as _isEmpty } from 'lodash';

import { ComicBook, Styles } from "../../types";

import IssuesTable from "../../components/General/IssuesTable/IssuesTable";

type Data = {
    issues: ComicBook[],
    title: string
}

const AdminPanel = () => {
    const [textFieldText, setTextFieldText] = useState<string>('');
    const [titleData, setTitleData] = useState<Data>({issues:[],title:''});
    const [selectedIssues, setSelectedIssues] = useState<ComicBook[]>([])
    
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

    const addCheckedToIssue = (book:ComicBook) => {
        return {
            ...book,
            isChecked: false
        }
    }
    
    const mapIssuesAddIsChecked = (books: ComicBook[] ) => {
        return books.map(addCheckedToIssue)
    }

    const filterIssuesChecked = (books:ComicBook[]) => {
        return books.filter(item=>item.isChecked)
    
    }

    const handleChangeTextField = (e:any) => {
        if(e.target.value==='') return
        setTextFieldText(e.target.value)

    }

    const handleCheckboxChange = (e:any,idx:number) => {
        let currentItem = {
            ...titleData.issues[idx],
            isChecked: e.target.checked
        }

        let copiedIssues = [...titleData.issues]
        copiedIssues.splice(idx,1,currentItem)
        let filterdIssues = filterIssuesChecked(copiedIssues)
        setTitleData({
            ...titleData,
            issues: copiedIssues,
        })
        setSelectedIssues(filterdIssues)
    }

    const handleGetIssues = () => {
        getComicsCollection({collectionId:textFieldText})
        .then((res:any)=>{
            if(_isEmpty(res)){
                setTitleData({
                    issues: [],
                    title: ''
                })    
            } else {
                setTitleData({
                    issues: mapIssuesAddIsChecked(res),
                    title: res[0].series.title
                })

            }
        })
        .catch(console.log)
    }

    const handleKeyDownTextField = (e:any) => {
        if(e.key==='Enter') handleGetIssues()
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
                <IssuesTable issues={props.data.issues} onCheckboxChange={handleCheckboxChange}/>
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
                        variant="contained" color="primary"
                        onClick={()=>{console.log('selectedIssues :>> ', selectedIssues);}}
                >
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
            
            <ButtonWrap issues={selectedIssues}/>


        </div>
    )
}

export default AdminPanel
