import React, { useState } from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Paper,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { v4 as uuidv4 } from 'uuid';

const Forma = () => {
  const [places, setPlaces] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentPlace, setCurrentPlace] = useState({ id: '', name: '' });

  const handleOpen = (place = { id: '', name: '' }) => {
    setCurrentPlace(place);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentPlace({ id: '', name: '' });
  };

  const handleSave = () => {
    if (currentPlace.id) {
      setPlaces(places.map(place => (place.id === currentPlace.id ? currentPlace : place)));
    } else {
      setPlaces([...places, { ...currentPlace, id: uuidv4() }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setPlaces(places.filter(place => place.id !== id));
  };

  return (
    <Container sx={{ bgcolor: 'white', padding: 4, width: '50%', marginTop: 4 }}>
      <Box
        component={Paper}
        sx={{
            bgcolor: 'lightgrey',
            padding: 2,
            border: '1px solid #ccc',
            borderRadius: 2,
            height: '100%',
            overflow: 'auto',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <h2>Formas de Pago</h2>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => handleOpen()}>
            Añadir
          </Button>
        </Box>
        <List>
          {places.map((place) => (
            <ListItem
              key={place.id}
              secondaryAction={
                <>
                  <IconButton edge="end" aria-label="edit" color="warning" onClick={() => handleOpen(place)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete" color="error" onClick={() => handleDelete(place.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              sx={{ border: '1px solid #ccc', marginBottom: 1 }}
            >
              <ListItemText primary={place.name} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentPlace.id ? 'Edit Place' : 'Añadir Forma de Pago'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Forma"
            type="text"
            fullWidth
            value={currentPlace.name}
            onChange={(e) => setCurrentPlace({ ...currentPlace, name: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">Cancel</Button>
          <Button onClick={handleSave} color='primary'>Save</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Forma;