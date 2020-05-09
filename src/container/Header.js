import React from 'react';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/ToolBar';
import AppBar from '@material-ui/core/Appbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { fade, makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { SvgIcon } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) =>({

root:{
    flexGrow:1,
   
},
search: {
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(100),
    width: 'auto',
  },
},
searchIcon: {
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},

inputRoot: {
  color: 'inherit',
},
inputInput: {
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '20ch',
  },
},

}));

  export default function Header(){
    const classes = useStyles();
    return(
<div className={classes.root}>
<Container fixed>
<Typography variant="subtitle1"  align="left">Admin Login</Typography>
<Paper><Typography variant="subtitle1"  align="center">A Web Page</Typography>
</Paper>
<AppBar position="static">
<ToolBar>
<ArrowBackIcon style={{ fontSize: 40 }} />
<ArrowForwardIcon style={{ fontSize: 40 }} />
<CloseIcon style={{ fontSize: 40 }} />
<HomeIcon style={{ fontSize: 40 }} />

<div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
<InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
 </div>
 </ToolBar>
</AppBar>
</Container>
</div>
    )
  }

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}