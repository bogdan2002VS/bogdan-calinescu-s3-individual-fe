import React from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import theme from './Theme';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <RecipeList />
      </Container>
    </ThemeProvider>
  )
}

export default App;