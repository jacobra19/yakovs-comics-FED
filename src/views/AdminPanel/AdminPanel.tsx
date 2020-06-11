import React from 'react';

const AdminPanel = () => {

    type Styles = {
        [key:string]:object
    }
    
    const styles = (s:string) => {
        let styles:Styles = {
            root: {
                height: "calc(100% - 60px)",
                marginTop:60,
            },
        }

        return(styles[s]);
    }


    return (
        <div style={styles('root')}>
            AdminPanel here

        </div>
    )
}

export default AdminPanel
