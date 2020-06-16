import React, { useState, useEffect, useRef } from 'react'
import { Typography, Checkbox } from '@material-ui/core';
import { ComicBook } from "../../../types";
import { isEmpty as _isEmpty } from "lodash";

interface IssuesTableProps {
    issues: ComicBook[],
    onCheckboxChange: any
}

interface ComicBookWithIsChecked extends ComicBook {
    isChecked: boolean
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

const mapIssuesRemoveIsChecked = (books:ComicBookWithIsChecked[]) => {
    return books.filter(item=>item.isChecked)
                .map(item=>{
                    let {isChecked,...rest} = item
                    return rest
                })

}


const IssuesTable: React.FC<IssuesTableProps> = (props) => {
    const [issues, setIssues] = useState( mapIssuesAddIsChecked(props.issues) );
    const tableRef = useRef<HTMLDivElement|null>(null)

    const handleCheckboxChange = (e:any,idx:number) => {
        let currentItem = {
            ...issues[idx],
            isChecked: e.target.checked
        }

        let copiedIssues = [...issues]

        copiedIssues.splice(idx,1,currentItem)
        
        setIssues(copiedIssues) 
    }

    useEffect(() => {

        let outputIssues = mapIssuesRemoveIsChecked(issues)
        props.onCheckboxChange(outputIssues)

        return () => {
        };
    }, [issues]);


    if(_isEmpty(props.issues)) return null 
    return (
        <div ref={tableRef}>
            {
                issues.map((item,idx)=>{
                    return (
                        <div key={idx} style={{
                            height: 120, 
                            display:'flex',
                            alignItems: "center",
                            marginBottom:10,
                        }}>
                            <Checkbox
                                style={{
                                    width:24,
                                    height:24
                                }}
                                checked={item.isChecked}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleCheckboxChange(e,idx)}}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}

                            />
                            <div style={{
                                backgroundImage: `url(${item.media.coverSrc})`,
                                width:80,
                                height: "100%",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                margin:'0px 10px 0px 5px'
                                }}></div>
                            {/* <img width={100} src={item.media.coverSrc}/> */}
                            <Typography style={{
                                backgroundColor: item.isChecked ? '#f50057' : 'initial',
                                color: item.isChecked ? 'white' : 'initial',
                            }}>{item.series.title} {item.series.issue}</Typography>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default IssuesTable