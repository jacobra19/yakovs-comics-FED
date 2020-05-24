import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';

import ComicBookEntity from '../../../classes/comicBook'

const AddComicPopup: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [formState, setFormState] = React.useState({
        publish: {
            title: '',
            date: ''
        },
        media: {
            coverSrc: ''
        },
        series: {
            title: '',
            issue: ''
        },
        description: '',
        saga: {
            title: '',
            currentIssue: '',
            totalIssues: '',
        },
        variant: '',
        creators: {
            coverArtBy: [],
            writtenBy: [],
            pencilsBy: [],
            inksBy: []
        }
    })

    const styles = (s:string) => {
        let styles = {
            root: {
            },
            btn:{
                color: 'white',
                borderColor:'white',
                marginRight:15,
                height:30,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0px 15px",
            }

        }

        return(styles[s]);
    }

    const handleClickOpen = () => {
        let ppp = new ComicBookEntity('ttttt')
        console.log('ppp :>> ', ppp);
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleFormChange = (e:any) => {
        
        console.log('e.target.id', e.target.id)
        console.log('e.target.value', e.target.value)
        let path = e.target.id.split('.')

        setFormState({
            ...formState,
            [path]: e.target.value
        })
    }

    React.useEffect(() => {
        console.log('formState', formState)
        return () => {
        }
    }, [formState])

    return (
        <div style={styles('root')}>
            <Button
                style={styles('btn')}
                variant="outlined"
                // color="secondary"
                // className={}
                startIcon={<AddIcon />}
                onClick={handleClickOpen}
            >
                Add Comic
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Comic Book</DialogTitle>
                <DialogContent style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex'}}>
                        <TextField autoFocus label="Series Name" id='series.title' onChange={handleFormChange}/>
                        <TextField label="Issue Number" type="number" style={{margin:'0px 5px'}}/>
                        <TextField label="Variant"/>
                    </div>
                    <TextField label="Cover URL"/>

                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Save
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


export default AddComicPopup;