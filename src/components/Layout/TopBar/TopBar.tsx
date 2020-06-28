import React, { useEffect,useState } from 'react';
import LoginIndicator from '../../General/LoginIndicator/LoginIndicator'
import { AppBar, Typography } from '@material-ui/core';
import { ThoughtBubble } from 'mdi-material-ui'
import { useAuth0 } from "@auth0/auth0-react";



const TopBar = () => {

    type Styles = {
        [key: string]: object
    }

    const styles = (s: string) => {
        let styles: Styles = {
            root: {
                height: 60,
                width: '100%',
                backgroundColor: '#464159',
                boxShadow: `0px 0px 5px 0px rgba(133,133,133,1)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                zIndex: 1,
                paddingRight: 15,
            },
            titleText: {
                fontFamily: "Bangers, cursive",
                fontWeight: 400,
                fontSize: 24,
                letterSpacing: "0.1rem",
                color: '#c7f0db'
            },
            navIcon: {
                padding: 15,
                width: 30,
                height: 30,
                fontSize: 30,
                color: '#c7f0db'
            },
        }

        return (styles[s]);
    }

    const { loginWithRedirect } = useAuth0();

    const [keyDown, setKeyDown] = useState('');

    useEffect(() => {
        window.addEventListener("keydown", handleBubblesKeyDown);
        window.addEventListener("keyup", handleBubblesKeyUp);
        return () => {
            window.removeEventListener("keydown", handleBubblesKeyDown);
            window.removeEventListener("keyup", handleBubblesKeyUp);
        };
    }, []);

    const handleBubblesClick = (e: any) => {
        if(keyDown) loginWithRedirect()
    }

    const handleBubblesKeyDown = (e: any) => {
        setKeyDown(e.key)
    }

    const handleBubblesKeyUp = (e:any)=>{
        setKeyDown('')
    }

    let title = 'Comics';
    return (

        <AppBar id={'TopBar_root'} style={styles('root')} position="fixed">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <ThoughtBubble style={styles('navIcon')} onClick={handleBubblesClick}  />

                <Typography style={styles('titleText')}>{title}</Typography>
            </div>
            <LoginIndicator/>
        </AppBar>
    )
}

export default TopBar
