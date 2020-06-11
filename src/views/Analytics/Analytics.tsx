import React from 'react';

const Analytics = (props) => {

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
            Analytics here

        </div>
    )
}

export default Analytics
