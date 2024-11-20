import React, { useState } from 'react';
import { Button, TextField, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Paper } from '@mui/material';
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';

const Otro = () => {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: '', index: null });

  const handleInputChange = (e) => {
    setCurrentItem({ ...currentItem, text: e.target.value });
  };

  const handleAddItem = () => {
    if (currentItem.index !== null) {
      const updatedItems = items.map((item, index) => 
        index === currentItem.index ? currentItem.text : item
      );
      setItems(updatedItems);
    } else {
      setItems([...items, currentItem.text]);
    }
    setCurrentItem({ text: '', index: null });
  };

  const handleEditItem = (index) => {
    setCurrentItem({ text: items[index], index });
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <Paper style={{ padding: 16 }}>
      <TextField
        label="New Item"
        value={currentItem.text}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddItem}
        fullWidth
      >
        {currentItem.index !== null ? 'Edit Item' : 'Add Item'}
      </Button>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={() => handleEditItem(index)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDeleteItem(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Otro;