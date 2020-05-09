import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
const useStyles= makeStyles((theme) =>({
    root:{
        top:'auto',
        bottom:0,
    },
}))
export default function Footer(){
    const classes= useStyles();

return(
    <div>
    <Container>
    <AppBar position='fixed' className={classes.root}>
    <Toolbar>{/*content*/}</Toolbar>
    </AppBar>
    <Toolbar />
    </Container>
    </div>
)
}


