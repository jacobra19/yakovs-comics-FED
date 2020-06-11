import React from 'react';
import { Typography, Paper } from '@material-ui/core'
import { Brush, Typewriter,LeadPencil,BookOpenVariant } from 'mdi-material-ui'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const creatorsSection = [
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




const ComicCard = (props) => {
    let {comicbook} = props;
    
    const styles = (s) => {
        let styles = {
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

    const renderArtist = ({label,Cmp,value}) => {
        return(
            <Tippy key={value} content={Tooltip(`${label} ${comicbook.creators[value]}`)} placement={'bottom'}>
                <Cmp style={{}}/>
            </Tippy>
        )
    }

    const Tooltip = (title) => {
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
