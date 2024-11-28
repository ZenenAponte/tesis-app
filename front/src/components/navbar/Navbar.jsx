import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Notificacion from '../notificaciones/Notificacion'

export default function Navbar() {
  const [anchorElContribuyentes, setAnchorElContribuyentes] = React.useState(null);
  const [anchorElNuevoMenu, setAnchorElNuevoMenu] = React.useState(null);
  const navegate = useNavigate();

  // Manejo del menú de contribuyentes
  const handleContribuyentesClick = (event) => {
    setAnchorElContribuyentes(event.currentTarget);
  };

  const handleContribuyentesClose = () => {
    setAnchorElContribuyentes(null);
  };

  // Manejo del nuevo menú
  const handleNuevoMenuClick = (event) => {
    setAnchorElNuevoMenu(event.currentTarget);
  };

  const handleNuevoMenuClose = () => {
    setAnchorElNuevoMenu(null);
  };

  return (
    <AppBar position="static" color="success">
      <Toolbar>
        {/* Título */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#eee' }}>OAT-FAR</Link>
        </Typography>

        {/* Menú Contribuyentes */}
        <Button
          color="inherit"
          onClick={handleContribuyentesClick}
          endIcon={<MenuIcon />}
        >
          CONTRIBUYENTES
        </Button>
        <Menu
          anchorEl={anchorElContribuyentes}
          open={Boolean(anchorElContribuyentes)}
          onClose={handleContribuyentesClose}
        >
          <MenuItem component={Link} to="/contribuyente" onClick={handleContribuyentesClose}>Contribuyente</MenuItem>
          <MenuItem component={Link} to="/bloqueo" onClick={handleContribuyentesClose}>Bloqueo</MenuItem>
          <MenuItem component={Link} to="/impuesto" onClick={handleContribuyentesClose}>Impuestos</MenuItem>
          <MenuItem component={Link} to="/reclamo" onClick={handleContribuyentesClose}>Reclamos</MenuItem>
          <MenuItem component={Link} to="/declaracionTabla" onClick={handleContribuyentesClose}>Declaraciones</MenuItem>
          <MenuItem component={Link} to="/devolucion" onClick={handleContribuyentesClose}>Devoluciones</MenuItem>
        </Menu>

        {/* Nuevo Menú */}
        <Button
          color="inherit"
          onClick={handleNuevoMenuClick}
          endIcon={<MenuIcon />}
        >
          MÁS
        </Button>
        <Menu
          anchorEl={anchorElNuevoMenu}
          open={Boolean(anchorElNuevoMenu)}
          onClose={handleNuevoMenuClose}
        >
          <MenuItem component={Link} to="/contribuyenteMas" onClick={handleNuevoMenuClose}>Contribuyentes</MenuItem>
          <MenuItem component={Link} to="/bloqueoMas" onClick={handleNuevoMenuClose}>Bloqueo</MenuItem>
          <MenuItem component={Link} to="/reclamoMas" onClick={handleNuevoMenuClose}>Reclamo</MenuItem>
          <MenuItem component={Link} to="/impuestoMas" onClick={handleNuevoMenuClose}>Impuesto</MenuItem>
          <MenuItem component={Link} to="/declaracionMas" onClick={handleNuevoMenuClose}>Declaración</MenuItem>
        </Menu>

        {/* Otros botones */}
        <Button component={Link} to="/informe" color="inherit">Reportes e Informes</Button>
        <Button component={Link} to="/autenticar" color="inherit">Usuarios</Button>
        

          <Notificacion/>
        {/* Icono de Logout */}
        <IconButton color="inherit">
          <LogoutIcon onClick={() => navegate('/')}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}




