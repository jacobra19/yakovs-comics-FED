import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue, } from 'recoil';

import TopBar from './components/Layout/TopBar/TopBar'
import MainSection from './components/Layout/MainSection/MainSection'

function App() {
    const styles = (s) => {
        let styles = {
            root: {
                width: "100vw",
                height: "100vh",
                overflow: "auto",
            },
            mainSection:{

            },
        }

        return(styles[s]);
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
