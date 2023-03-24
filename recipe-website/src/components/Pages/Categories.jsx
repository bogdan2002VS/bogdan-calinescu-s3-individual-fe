import React, { useState, useEffect } from 'react';
import API from '../API/API';
import { Typography, List, ListItem, ListItemText, TextField, Button, Box } from '@mui/material';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const categoriesData = await API.getCategories();
    setCategories(categoriesData);
  }

  async function handleCreate(event) {
    event.preventDefault();
    const response = await API.createCategory({ name, description });
    setCategories(categories => [...categories, response]);
    setName('');
    setDescription('');
  }
  

  async function handleUpdate(id, newName, newDescription) {
    const response = await API.updateCategory(id, newName, newDescription);
    setCategories(categories => categories.map(category => {
      if (category.id === response.id) {
        return { ...response };
      }
      return category;
    }))
  }
  
  
  async function handleDelete(id) {
    try {
      await API.deleteCategory(id);
      setCategories(categories => categories.filter(category => category.id !== id));
    } catch (error) {
      console.error(error);
    }
  }
  

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Categories
      </Typography>
      <List>
        <ListItem>
          <form onSubmit={handleCreate} style={{ display: 'flex' }}>
            <Box sx={{ flex: '1' }}>
              <TextField label="Category name" value={name} onChange={event => setName(event.target.value)} fullWidth />
              <TextField label="Category description" value={description} onChange={event => setDescription(event.target.value)} fullWidth />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="contained" color="primary" type="submit">Create</Button>
            </Box>
          </form>
        </ListItem>
        {categories.map(category => (
          <ListItem key={category.id}>
            <ListItemText primary={category.name} secondary={category.description} />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField label="New category name" value={category.newName || category.name} onChange={event => {
                const newName = event.target.value;
                setCategories(categories => categories.map(c => {
                  if (c.id === category.id) {
                    return { ...c, newName };
                  }
                  return c;
                }))
              }} />
              <TextField label="New category description" value={category.newDescription || category.description} onChange={event => {
                const newDescription = event.target.value;
                setCategories(categories => categories.map(c => {
                  if (c.id === category.id) {
                    return { ...c, newDescription };
                  }
                  return c;
                }))
              }} />
              <Button variant="contained" color="primary" onClick={() => handleUpdate(category.id, category.newName, category.newDescription)}>Update</Button>
              <Button variant="contained" color="secondary" onClick={() => handleDelete(category.id)}>Delete</Button>
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Categories;
