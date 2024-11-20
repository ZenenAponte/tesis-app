import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    < Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color='success'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  >
            <strong>OAT-FAR</strong>
          </Typography>
          
          <Button color="inherit" component={Link} to="/">Home</Button>

          
          <Button
            color="inherit"
            onClick={handleClick}
            endIcon={<MenuIcon />}
          >
            CONTRIBUYENTES
          </Button>
          <Menu
            anchorEl ={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/contribuyente" onClick={handleClose}>Contribuyente</MenuItem>
            <MenuItem component={Link} to="/impuesto" onClick={handleClose}>Impuestos</MenuItem>
            <MenuItem component={Link} to="/reclamo" onClick={handleClose}>Reclamos</MenuItem>
            <MenuItem component={Link} to="/declaracion" onClick={handleClose}>Declaraciones</MenuItem>
            <MenuItem component={Link} to="/devolucion" onClick={handleClose}>Devolucionesss</MenuItem>
          </Menu>
          <Button
            color="inherit"
            onClick={handleClick}
            endIcon={<MenuIcon />}
          >
            MÁS 
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/contrib_mas" onClick={handleClose}>Contribuyente</MenuItem>
            <MenuItem component={Link} to="/decla_mas" onClick={handleClose}>Declaración</MenuItem>
            <MenuItem component={Link} to="/impu_mas" onClick={handleClose}>Impuestos</MenuItem>
            <MenuItem component={Link} to="/recla_mas" onClick={handleClose}>Reclamaciones</MenuItem>
            <MenuItem component={Link} to="/prueba" onClick={handleClose}>Prueba</MenuItem>
          </Menu>
          
          <Button color="inherit" component={Link} to="/reporteInfo">Reportes</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;


