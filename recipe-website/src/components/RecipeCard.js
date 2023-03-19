import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RecipeCard;