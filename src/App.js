import React from 'react';
import { Link, BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { ChartBarStacked, Bookshelf, SettingsOutline } from 'mdi-material-ui'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import Catalog from './views/Catalog/Catalog'
import Analytics from './views/Analytics/Analytics'
import AdminPanel from './views/AdminPanel/AdminPanel'
// import About from './views/About/About'
import TopBar from './components/TopBar/TopBar'
import NoResults from './components/NoResults/NoResults'
import { Typography } from '@material-ui/core';

function App() {


    const styles = (s) => {
        let styles = {
            root: {
                width: "100vw",
                height: "100vh",
                overflow: "auto",
            },
            belowBar:{
                display:'flex',
                height:`calc( 100% - 60px )`,
                marginTop:60,
                overflow:'hidden',
            },
            navMenu:{
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

    // 464159
    // c7f0db
    const Tooltip = (title) => {
        return <Typography style={{fontSize:13}}>{title}</Typography>
    }

    return (
        <Router>
            <div className="App" style={styles('root')}>
            <TopBar/>
            <div style={styles('belowBar')}>
                <div style={styles('navMenu')}>
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
                    <Link to="/fury">
                        <Tippy content={Tooltip('Admin Panel')} placement={'right'}>
                            <SettingsOutline style={styles('navIcon')}/>
                        </Tippy>
                    </Link>    
                </div>
                <Switch>
                    <Route exact path="/" component={Catalog} />
                    <Route exact path="/analytics" component={Analytics} />
                    <Route exact path="/fury" component={AdminPanel} />
                    <Route component={NoResults}/>
                </Switch>
            </div>

            </div>
        </Router>
    );
}

export default App;
