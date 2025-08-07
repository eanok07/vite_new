// src/components/Home.jsx
import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Button,
} from '@mui/material';

const restaurants = [
  {
    name: 'Spicy Delight',
    image: 'https://source.unsplash.com/400x300/?indian-food',
    cuisine: 'Indian, Biryani, North Indian',
  },
  {
    name: 'Burger House',
    image: 'https://source.unsplash.com/400x300/?burger',
    cuisine: 'American, Fast Food',
  },
  {
    name: 'Pasta Palace',
    image: 'https://source.unsplash.com/400x300/?pasta',
    cuisine: 'Italian, Pasta, Pizza',
  },
  {
    name: 'Sushi World',
    image: 'https://source.unsplash.com/400x300/?sushi',
    cuisine: 'Japanese, Sushi',
  },
  {
    name: 'Taco Treat',
    image: 'https://source.unsplash.com/400x300/?taco',
    cuisine: 'Mexican, Tacos',
  },
  {
    name: 'Healthy Bowl',
    image: 'https://source.unsplash.com/400x300/?salad',
    cuisine: 'Salads, Vegan, Organic',
  },
];

const Home = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        shop
      </Typography>

      <Grid container spacing={5}>
        {restaurants.map((rest, index) => (
          <Grid item key={index} xs={2} sm={6} md={4} lg={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="160"
                image={rest.image}
                alt={rest.name}
              />
              <CardContent>
                <Typography variant="h6">{rest.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {rest.cuisine}
                </Typography>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Order Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
