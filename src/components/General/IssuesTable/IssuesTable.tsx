import React from 'react'
import { Typography, Checkbox } from '@material-ui/core';
import { ComicBook,Styles } from "../../../types";
import { isEmpty as _isEmpty } from "lodash";

interface IssuesTableProps {
    issues: ComicBook[],
    onCheckboxChange: any
}

const IssuesTable: React.FC<IssuesTableProps> = (props) => {
    if(_isEmpty(props.issues)) return null

    const styles = (s:string,isChecked?:boolean) => {
        let styles:Styles = {
            root: {

            },
            issueRow:{
                height: 120, 
                display:'flex',
                alignItems: "center",
                marginBottom:10,
            },
            checkBox:{
                width:24,
                height:24
            },
            issueCover:{
                width:80,
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
                margin:'0px 10px 0px 5px'
            },
            issueTitle:{
                backgroundColor: isChecked ? '#f50057' : 'initial',
                color: isChecked ? 'white' : 'initial',
            }
        }

        return(styles[s]);
    }

    const renderCheckBox = (item:ComicBook,idx:number) => {
        return (
            <Checkbox   style={styles('checkBox',item.isChecked)}
                        checked={item.isChecked}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{props.onCheckboxChange(e,idx)}}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
        )
    }

    const renderIssueCover = (item:ComicBook) => {

        return(
            <div style={{
                ...styles('issueCover'), 
                backgroundImage: `url(${item.media.coverSrc})`
            }}></div>
        )
    }

    const renderIssueTitle = (item:ComicBook) => {

        return(
            <Typography style={styles('issueTitle')}
            >
                {item.series.title} {item.series.issue}
            </Typography>
        )
    }

    const renderIssueRow = (item:ComicBook,idx:number) => {

        return(
            <div key={idx} style={styles('issueRow')}>
                { renderCheckBox(item,idx) }
                { renderIssueCover(item) }
                { renderIssueTitle(item) }
            </div>
        )
    }


    return (
        <div style={styles('root')}>
            { props.issues.map(renderIssueRow) }
        </div>
    )
}

export default IssuesTable