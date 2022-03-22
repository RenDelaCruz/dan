import { Container, Grid, Skeleton } from '@mantine/core';
import React from 'react';

// const useStyles = createStyles(theme => ({}));

const child = <Skeleton sx={{ zIndex: 0 }} height={350} radius='md' animate={false} />;

function Portfolio() {
  return (
    <Container id='portfolio' size={900}>
      <h1>Portfolio</h1>
      <Container my='md'>
        <Grid>
          <Grid.Col xs={4}>{child}</Grid.Col>
          <Grid.Col xs={8}>{child}</Grid.Col>
          <Grid.Col xs={8}>{child}</Grid.Col>
          <Grid.Col xs={4}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={6}>{child}</Grid.Col>
        </Grid>
      </Container>
    </Container>
  );
}

export default Portfolio;
