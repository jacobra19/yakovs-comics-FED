import React from 'react';
import { Route,Switch } from "react-router-dom";

import Catalog from '../../../views/Catalog/Catalog.tsx'
import Analytics from '../../../views/Analytics/Analytics.tsx'
import AdminPanel from '../../../views/AdminPanel/AdminPanel.tsx'
// import About from './views/About/About'
import NavBar from '../NavBar/NavBar'
import NoResults from '../../General/NoResults/NoResults'


const MainSection = (props) => {
    // let {comicbook} = props;
    
    const styles = (s) => {
        let styles = {
            root:{
                display:'flex',
                height:`calc( 100% - 60px )`,
                marginTop:60,
                overflow:'hidden',
            },
        }
        return(styles[s]);
    }

    return (
        <div id={'MainSect`ion_root'} style={ styles('root') }>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Catalog} />
                <Route exact path="/analytics" component={Analytics} />
                <Route exact path="/fury" component={AdminPanel} />
                <Route component={NoResults}/>
            </Switch>
        </div>
    )
}

export default MainSection
