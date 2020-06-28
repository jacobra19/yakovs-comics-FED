import React from 'react';
import { Route,Switch } from "react-router-dom";
require('dotenv').config()

import Catalog from '../../../views/Catalog/Catalog'
import Analytics from '../../../views/Analytics/Analytics'
import Explore from '../../../views/Explore/Explore'
import Table from '../../../views/Table/Table'
// import About from './views/About/About'
import NavBar from '../NavBar/NavBar'
import NoResults from '../../General/NoResults/NoResults'

import { useAuth0 } from "@auth0/auth0-react";

const MainSection = () => {
    type Styles = {
        [key:string]:object
    }

    const { user, isAuthenticated } = useAuth0();

    
    const styles = (s:string) => {
        let styles:Styles = {
            root:{
                display:'flex',
                height:`calc( 100% - 60px )`,
                marginTop:60,
                overflow:'hidden',
            },
        }
        return(styles[s]);
    }

    const renderAdminRoutes = () => {

        return(
            <>
                <Route exact path="/explore" component={Explore} />
                <Route exact path="/table" component={Table} />
            </>
        )
    }

    return (
        <div id={'MainSect`ion_root'} style={ styles('root') }>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Catalog} />
                <Route exact path="/analytics" component={Analytics} />
                { (isAuthenticated || process.env.REACT_APP_DEV) ? renderAdminRoutes() : null }
                <Route component={NoResults}/>
            </Switch>
        </div>
    )
}

export default MainSection
