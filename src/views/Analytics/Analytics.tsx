import React from 'react';

const Analytics = () => {

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
            Analytics here

        </div>
    )
}

export default Analytics
