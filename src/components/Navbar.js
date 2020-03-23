import React from 'react';
import {AppBar,Toolbar,Typography, Button,IconButton, Menu,MenuItem} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div>
            <AppBar position="static">                
            <Toolbar>
            <Typography edge="start" variant="h6" >
            App de Receitas
          </Typography>
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
               <NavLink to={'/login'}><MenuItem onClick={handleClose}>Logout</MenuItem></NavLink>
              </Menu>

            </Toolbar>

            </AppBar>
            
        </div>
    );
};
const linkStyle = {
    color:'white'
}

export default Navbar;