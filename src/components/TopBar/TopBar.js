import React from 'react';
// import { Link } from "react-router-dom";
import { AppBar, Typography } from '@material-ui/core';
import { ThoughtBubble  } from 'mdi-material-ui'

// import palette from '../../modules/colors/palette'

// const colorPalette = { //https://colorhunt.co/palette/165518
//     'a': '#464159',
//     'b': '#6c7b95',
//     'c': '#8bbabb',
//     'd': '#c7f0db',
// }
const TopBar = () => {

    const styles = (s) => {
        let styles = {
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
                <   ThoughtBubble style={styles('navIcon')}/>

                <Typography style={ styles('titleText') }>{title}</Typography>
            </div>
            {/* <Toolbar style={{height:'100%'}}> */}
            {/* <div style={{display:'flex'}}>
                <Link to="/">
                    <button>home</button>
                </Link>
                <Link to="/about">
                    <button>About</button>
                </Link>    

            </div> */}
            {/* </Toolbar> */}
        </AppBar>
    )
}

export default TopBar
