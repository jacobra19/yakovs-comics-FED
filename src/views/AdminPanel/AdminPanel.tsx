import React from 'react';

const AdminPanel = (props) => {

    const styles = (s) => {
        let styles = {
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
