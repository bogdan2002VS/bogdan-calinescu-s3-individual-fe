import React, { useState, useEffect } from 'react';
import API from './API';
import { Typography, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import styled from 'styled-components';

const CategoryListItem = styled(ListItem)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CategoryName = styled(ListItemText)`
  flex: 1;
`;

const CategoryInput = styled(TextField)`
  margin-left: 16px;
  margin-right: 16px;
`;

const UpdateButton = styled(Button)`
  margin-left: 16px;
`;

const DeleteButton = styled(Button)`
  margin-left: 16px;
`;

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
        return response;
      }
      return category;
    }));
  }

  async function handleDelete(id) {
    await API.deleteCategory(id);
    setCategories(categories => categories.filter(category => category.id !== id));
  }

  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Categories
      </Typography>
      <form onSubmit={handleCreate}>
        <CategoryInput label="Category name" value={name} onChange={event => setName(event.target.value)} />
        <CategoryInput label="Category description" value={description} onChange={event => setDescription(event.target.value)} />
        <Button variant="contained" color="primary" type="submit">Create</Button>
      </form>
      <List>
        {categories.map(category => (
          <CategoryListItem key={category.id}>
            <CategoryName primary={category.name} secondary={category.description} />
            <div>
              <CategoryInput label="New category name" value={category.newName || ''} onChange={event => {
                const newName = event.target.value;
                setCategories(categories => categories.map(c => {
                  if (c.id === category.id) {
                    return { ...c, newName };
                  }
                  return c;
                }));
              }} />
              <CategoryInput label="New category description" value={category.newDescription || ''} onChange={event => {
                const newDescription = event.target.value;
                setCategories(categories => categories.map(c => {
                  if (c.id === category.id) {
                    return { ...c, newDescription };
                  }
                  return c;
                }));
              }} />
              <UpdateButton variant="contained" color="primary" onClick={() => handleUpdate(category.id, category.newName, category.newDescription)}>Update</UpdateButton>
              <DeleteButton variant="contained" color="secondary" onClick={() => handleDelete(category.id)}>Delete</DeleteButton>
            </div>
          </CategoryListItem>
        ))}
      </List>
    </div>
  );
}

export default Categories;
