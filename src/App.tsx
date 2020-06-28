import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot } from 'recoil';
// import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';

import TopBar from './components/Layout/TopBar/TopBar'
import MainSection from './components/Layout/MainSection/MainSection'


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
        [key:string]: object
    }
    const styles = (s:string): object => {
        let styles:Styles = {
            root: {
                width: "100vw",
                height: "100vh",
                overflow: "auto",
            },
            mainSection:{

            },
        }

        return styles[s];
    }

    

    
    return (
        <RecoilRoot>
            <Router>
                <div className="App" style={styles('root')}>
                    <TopBar/>
                    <MainSection/>
                </div>
            </Router>
        </RecoilRoot>
    );
}

export default App;
