import React from 'react';
import {AppBar,Toolbar,Typography, Button,IconButton, Menu,MenuItem} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import {NavLink, Redirect} from 'react-router-dom'
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
    setLogout(true)
}


    return (
        <div>
            <AppBar position="static">                
            <Toolbar>
            <Typography edge="start" variant="h6" >
            App de Receitas
          </Typography>
          
          { props.logged &&
            <div>
          <NavLink to={'/receitas'} exact activeStyle={linkStyle}> <Button color="inherit">Receitas</Button></NavLink>
          <NavLink to={'/minhasReceitas'} exact activeStyle={linkStyle}> <Button color="inherit">Minhas Receitas</Button></NavLink>
          <NavLink to={'/addReceita'} exact activeStyle={linkStyle}> <Button color="inherit">Adicionar Receitas</Button></NavLink>
            <IconButton
               color="inherit"
               onClick={handleClick}
              >
                <AccountCircle />
              </IconButton>
              <Menu 
              keepMounted
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              >
               <MenuItem onClick={logoutUser}>Logout</MenuItem>
              </Menu>
              <Typography edge="end" variant="h8" >
            {props.name}
          </Typography>
              </div>
            }
            {logout &&
                <Redirect to={'/login'}/>
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
  logged: state.login.logged,
  username: state.login.username,
  name: state.login.name
})
const mapDispatchToProps= dispatch=>
bindActionCreators(loginActions,dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Navbar);