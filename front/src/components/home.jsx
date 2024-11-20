import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom align="center">
        Bienvenido al sitio web de la OAT
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/140"
              alt="Imagen 1"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Título de la Carta 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Información relevante de la carta 1. Aquí puedes agregar una breve descripción o información relevante para los usuarios.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/140"
              alt="Imagen 2"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Título de la Carta 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Información relevante de la carta 2. Puedes seguir este mismo formato para añadir más cartas con información diferente.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/140"
              alt="Imagen 3"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Título de la Carta 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Información relevante de la carta 3. Continúa agregando tarjetas según sea necesario para tu contenido.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
