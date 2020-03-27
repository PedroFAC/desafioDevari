import React from 'react';
import {AppBar,Toolbar,Typography, Button,IconButton, Menu,MenuItem} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import {NavLink, Redirect,useHistory} from 'react-router-dom'
import {useState} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as loginActions from '../actions/login'

const Navbar = (props) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [logout,setLogout] = useState(false)
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };
  const logoutUser =()=>{
    props.logout()
    history.push('/login')
}
const history = useHistory()

    return (
        <div>
            <AppBar position="static">                
            <Toolbar>
            <Typography edge="start" variant="h6" >
            App de Receitas
          </Typography>
          
          { props.logged &&
            <div>
           <Button onClick={()=>history.push('/receitas')} color="inherit">Receitas</Button>
           <Button onClick={()=>history.push('/minhasReceitas')} color="inherit">Minhas Receitas</Button>
          <Button onClick={()=>history.push('/addReceita')}color="inherit">Adicionar Receitas</Button>
            <IconButton
               color="inherit"
               onClick={handleClick}
              >
                <AccountCircle />
                <Typography  >
            {props.name}
          </Typography>
              </IconButton>
              <Menu 
              keepMounted
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              >
               <MenuItem onClick={logoutUser}>Logout</MenuItem>
              </Menu>
              
              </div>
            }
            
            </Toolbar>

            </AppBar>
            
        </div>
    );
};
const linkStyle = {
    color:'white'
}

const mapStateToProps = state=>({
  logged: state.logged,
  username: state.username,
  name: state.name
})
const mapDispatchToProps= dispatch=>
bindActionCreators(loginActions,dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Navbar);