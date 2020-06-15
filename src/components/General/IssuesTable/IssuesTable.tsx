import React from 'react'
import { ComicBook } from "../../../types";
import { Typography, Checkbox } from '@material-ui/core';

interface IssuesTableProps {
    issues: ComicBook[]
}

const IssuesTable: React.FC<IssuesTableProps> = (props) => {
        
    return (
        <div>
            {
                props.issues.map((item,idx)=>{
                    return (
                        <div key={idx} style={{height: 120, display:'flex'}}>
                            <Checkbox
                                checked={false}
                                onChange={(e:any)=>{console.log('e', e)}}
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