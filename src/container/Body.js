import React from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles= makeStyles((theme) =>({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    },
  },
wrapper : {
  display:'flex',
  flexdirection:'column',
  borderradius:'10px',
  width:'900px',
  alignitems:'center',
  padding: '60px 60px',
  margin: '0 auto',
  margindown:'100px',

},
/*text:{
display:'flex',
flexDirection:'column',
margin:theme.spacing(10),
padding: '40px 40px',
},*/
button: {
  '& > *': {
    margin: theme.spacing(0),
  },
},

login:{
  boxShadow:'10px 5px',
  backgroundcolor:'black'

},

    
}));


function Body(){
    const classes= useStyles();
return(
    <div className={classes.wrapper}>
    <CssBaseline />
    <Paper elevation={3} variant="outlined" square>
    
    <form className={classes.root}>
    <TextField  id="outlined-basic" label="EmailId(Organisation)" inputType="email" variant="outlined"/>
    <TextField
    id="outlined-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    variant="outlined"
  />
  <Button href="#text-buttons" color="primary">
  <u> Register </u>
</Button>
<Button color="primary"><u>Forgot Password</u></Button>
<Button variant="contained" size="small"  className={classes.login}>
          Login
        </Button>
    </form>
    </Paper>
    </div>

)

}

export default Body;