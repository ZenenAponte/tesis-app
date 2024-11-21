import React from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="success" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> <Link to="/" style={{ textDecoration: 'none', color: '#eee' }} >OAT-FAR</Link>  </Typography>
        <Button
          color="inherit"
          onClick={handleClick}
          endIcon={<MenuIcon />}
        >
          CONTRIBUYENTES
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/contribuyente" onClick={handleClose}>Contribuyente</MenuItem>
          <MenuItem component={Link} to="/impuesto" onClick={handleClose}>Impuestos</MenuItem>
          <MenuItem component={Link} to="/reclamo" onClick={handleClose}>Reclamos</MenuItem>
          <MenuItem component={Link} to="/declaracion" onClick={handleClose}>Declaraciones</MenuItem>
          <MenuItem component={Link} to="/devolucion" onClick={handleClose}>Devolucionesss</MenuItem>
        </Menu>

        <Button component={Link} to="/lugar" color="inherit">Prueba lugar</Button>
        <Button component={Link} to="/forma" color="inherit">Prueba Forma</Button>
        <Button component={Link} to="/tipo" color="inherit">Prueba Tipo</Button>


        <IconButton color="inherit">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};



