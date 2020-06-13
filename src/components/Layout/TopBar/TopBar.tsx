import React from 'react';
import AddComicPopup from '../../General/AddComicPopup/AddComicPopup'
import { AppBar, Typography } from '@material-ui/core';
import { ThoughtBubble  } from 'mdi-material-ui'


const TopBar = () => {

    type Styles = {
        [key:string]:object
    }
    
    const styles = (s:string) => {
        let styles:Styles = {
            root: {
                height:60,
                width: '100%',
                backgroundColor: '#464159',
                boxShadow: `0px 0px 5px 0px rgba(133,133,133,1)`,
                display:'flex',
                alignItems: 'center',
                justifyContent:'space-between',
                flexDirection:'row',
                zIndex:1,
            },
            titleText:{
                fontFamily: "Bangers, cursive",
                fontWeight:400,
                fontSize:24,
                letterSpacing: "0.1rem",
                color:'#c7f0db'
            },
            navIcon:{
                padding: 15,
                width:30,
                height:30,
                fontSize:30,
                color:'#c7f0db'
            },
        }

        return(styles[s]);
    }



    let title = 'Comics';
    return (

        <AppBar id={'TopBar_root'} style={ styles('root')} position="fixed">
            <div style={{display:'flex',alignItems:'center'}}>
                <ThoughtBubble style={styles('navIcon')}/>

                <Typography style={ styles('titleText') }>{title}</Typography>
            </div>
            <AddComicPopup/>
        </AppBar>
    )
}

export default TopBar
