import React from 'react';
import { Typography, Paper } from '@material-ui/core'
import { Brush, Typewriter,LeadPencil,BookOpenVariant } from 'mdi-material-ui'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import { ComicBook } from "../../../types";

type Creator = {
    label: string,
    Cmp: React.FC,
    value: string,
}

const creatorsSection: Creator[] = [
    {
        label: 'Cover Art By',
        Cmp: BookOpenVariant,
        value: 'coverArtBy',
    },
    {
        label: 'Written By',
        Cmp: Typewriter,
        value: 'writtenBy',
    },
    {
        label: 'Pencils By',
        Cmp: LeadPencil,
        value: 'pencilsBy',
    },
    {
        label: 'Ink By',
        Cmp: Brush,
        value: 'inksBy',
    }
]

type ComicCardProps = {
    comicbook: ComicBook
}

const ComicCard = ({comicbook}:ComicCardProps) => {

    type Styles = {
        [key:string]: object
    }

    const styles = (s:string): object => {
        let styles:Styles = {
            root: {
                justifySelf: "center",
                alignSelf: "center",
                height:400,
                display:'flex',
            },
            infoCont:{
                padding: 15,
            },
            titleCont:{
                height: 30,
            },
            descCont:{
                height: `calc( 100% - 60px )`,
                overflow: 'auto',
            },
            creatorsInfoCont:{
                height: 30,
            },
        }
        return(styles[s]);
    }

    const renderArtist = ({label,Cmp,value}:Creator) => {
        return(
            <Tippy key={value} content={Tooltip(`${label} ${comicbook.creators[value]}`)} placement={'bottom'}>
                <Cmp />
            </Tippy>
        )
    }

    const Tooltip = (title:string) => {
        return <Typography style={{fontSize:13}}>{title}</Typography>
    }

    const renderImage = () => {
        return(
            <img 
                src={comicbook.media.coverSrc} 
                alt={'ddd'} 
                height={'100%'} 
                width={'fit-content'}
            />
        )
    }

    const renderInfo = () => {
        return(
            <div style={styles('infoCont')}>
                { renderTitle() }
                { renderDesc() }
                { renderCreators() }
            </div>
        )
    }

    const renderTitle = () => {
        return(
            <div style={styles('titleCont')}>
                <Typography style={{fontWeight:600,fontSize:14}}>
                    {comicbook.series.title} {comicbook.series.issue}
                </Typography>
            </div>
        )
    }
    const renderDesc = () => {
        return(
            <div style={styles('descCont')}>
                <Typography style={{fontSize:12}}>
                    {comicbook.description}
                </Typography>
            </div>
        )
    }
    const renderCreators = () => {
        return(
            <div style={styles('creatorsInfoCont')}>
                { creatorsSection.map(renderArtist) }
            </div>
        )
    }

    return (
        <Paper id={'ComicCard_root'} style={ styles('root') }  elevation={2}>
            { renderImage() }
            { renderInfo() }
        </Paper>
    )
}

export default ComicCard
