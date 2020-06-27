import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { Link } from "react-router-dom";
import { ChartBarStacked, Bookshelf, SettingsOutline,Database,DatabaseImport } from 'mdi-material-ui'
import { Typography } from '@material-ui/core';


const NavBar = () => {
    
    type Styles = {
        [key:string]:object
    }
    
    const styles = (s:string) => {
        let styles:Styles = {
            root:{
                height:'calc( 100% - 1px )',
                width:60,
                backgroundColor:'#464159',
                display:'flex',
                alignItems:'center',
                flexDirection:'column',
                zIndex:1,
                borderTop: "1px solid #c7f0db33",
                justifyContent: 'space-between',
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

    const Tooltip = (title:string) => {
        return <Typography style={{fontSize:13}}>{title}</Typography>
    }

    return (
        <div id={'NavBar_root'} style={ styles('root') }>
            <div>
                <Link to="/">
                    <Tippy content={Tooltip('Catalog')} placement={'right'}>
                        <Bookshelf style={styles('navIcon')}/>
                    </Tippy>
                </Link>

                <Link to="/analytics">
                    <Tippy content={Tooltip('Analytics')} placement={'right'}>
                        <ChartBarStacked style={styles('navIcon')}/>
                    </Tippy>
                </Link>    
            </div>
            <div>
                <Link to="/table">
                    <Tippy content={Tooltip('DB Table')} placement={'right'}>
                        <Database style={styles('navIcon')}/>
                    </Tippy>
                </Link>    
                <Link to="/explore">
                    <Tippy content={Tooltip('Explore Comics')} placement={'right'}>
                        <DatabaseImport style={styles('navIcon')}/>
                    </Tippy>
                </Link>
            </div>
        </div>
    )
}

export default NavBar
