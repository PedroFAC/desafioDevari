import React from 'react';
import {AppBar,Toolbar,Typography, Button,IconButton, Menu,MenuItem} from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import {Link} from 'react-router-dom'
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
          <Link to={'/receitas'}> <Button color="inherit">Receitas</Button></Link>
          <Link to={'/minhasReceitas'}> <Button color="inherit">Minhas Receitas</Button></Link>
          <Link to={'/addReceita'}> <Button color="inherit">Adicionar Receitas</Button></Link>
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
               <Link to={'/login'}><MenuItem onClick={handleClose}>Logout</MenuItem></Link>
              </Menu>

            </Toolbar>

            </AppBar>
            
        </div>
    );
};

export default Navbar;