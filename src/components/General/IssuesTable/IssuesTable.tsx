import React from 'react'
import { Typography, Checkbox } from '@material-ui/core';
import { ComicBookWithIsChecked } from "../../../types";
import { isEmpty as _isEmpty } from "lodash";

interface IssuesTableProps {
    issues: ComicBookWithIsChecked[],
    onCheckboxChange: any
}

const IssuesTable: React.FC<IssuesTableProps> = (props) => {
    if(_isEmpty(props.issues)) return null

    const renderCheckBox = (item:ComicBookWithIsChecked,idx:number) => {
        return (
            <Checkbox   style={{
                            width:24,
                            height:24
                        }}
                        checked={item.isChecked}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{props.onCheckboxChange(e,idx)}}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        )
    }

    const renderIssueCover = (coverSrc: string) => {

        return(
            <div style={{
                    backgroundImage: `url(${coverSrc})`,
                    width:80,
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    margin:'0px 10px 0px 5px'
                }}>
            </div>
        )
    }

    const renderIssueTitle = (item:ComicBookWithIsChecked) => {

        return(
            <Typography style={{
                            backgroundColor: item.isChecked ? '#f50057' : 'initial',
                            color: item.isChecked ? 'white' : 'initial',
                        }}
            >
                {item.series.title} {item.series.issue}
            </Typography>
        )
    }


    return (
        <div>
            {
                props.issues.map((item,idx)=>{
                    return (
                        <div key={idx} style={{
                            height: 120, 
                            display:'flex',
                            alignItems: "center",
                            marginBottom:10,
                        }}>
                            { renderCheckBox(item,idx) }
                            { renderIssueCover(item.media.coverSrc) }
                            { renderIssueTitle(item) }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default IssuesTable