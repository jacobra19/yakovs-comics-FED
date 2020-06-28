import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from 'recoil';
require('dotenv').config()

import TopBar from './components/Layout/TopBar/TopBar'
import MainSection from './components/Layout/MainSection/MainSection'


import { useAuth0 } from "@auth0/auth0-react";


import _ from "lodash";
import moment from 'moment';

declare global {
    interface Window {
        _: any,
        moment: any,
    }
}

window._ = _ || {};
window.moment = moment || {};


function App() {
    interface Styles {
        [key: string]: object
    }

    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);

    const styles = (s: string): object => {
        let styles: Styles = {
            root: {
                width: "100vw",
                height: "100vh",
                overflow: "auto",
            },
            mainSection: {

            },
        }

        return styles[s];
    }

    useEffect(() => {
        const getUserMetadata = async () => {
            const domain = process.env.REACT_APP_Auth0_Domain;
            console.log('domain', domain)
            try {
                const accessToken = await getAccessTokenSilently({
                    audience: `https://${domain}/api/v2`,
                    scope: "read:current_user",
                });

                const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                const { user_metadata } = await metadataResponse.json();

                setUserMetadata(user_metadata);
            } catch (e) {
                console.log(e.message);
            }
        };

        getUserMetadata();
    }, []);

    useEffect(() => {
        console.log('userMetadata', userMetadata)
        return () => {
            // cleanup
        }
    }, [userMetadata])


    return (
        <RecoilRoot>
            <Router>
                <div className="App" style={styles('root')}>
                    <TopBar />
                    <MainSection />
                </div>
            </Router>
        </RecoilRoot>
    );
}

export default App;
