import React, { useState, useEffect } from 'react'
import { Typography, Checkbox } from '@material-ui/core';
import { ComicBook } from "../../../types";

interface IssuesTableProps {
    issues: ComicBook[],
    onCheckboxChange: any
}

const addCheckedToIssue = (book:ComicBook) => {
    return {
        ...book,
        isChecked: false
    }
}

const mapIssues = (books: ComicBook[] ) => {
    return books.map(addCheckedToIssue)
}


const IssuesTable: React.FC<IssuesTableProps> = (props) => {
    const [issues, setIssues] = useState( mapIssues(props.issues) );


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
        let outputIssues = issues
        .filter(item=>item.isChecked)
        .map(item=>{
            let {isChecked,...rest} = item
            return rest
        })
        props.onCheckboxChange(outputIssues)

        return () => {
        };
    }, [issues]);


    return (
        <div>
            {
                issues.map((item,idx)=>{
                    return (
                        <div key={idx} style={{height: 120, display:'flex'}}>
                            <Checkbox
                                checked={item.isChecked}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleCheckboxChange(e,idx)}}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}

                            />
                            <img width={100} src={item.media.coverSrc}/>
                            <Typography>{item.series.title} {item.series.issue}</Typography>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default IssuesTable