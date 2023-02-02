
import { Grid } from '@material-ui/core';
import Car from './Car';
import CarDetails from './CarDetails';
import CarForm from './CarForm';
import React, { useState } from 'react';
import carData from '../data/carsData.json'

function Home() {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <Grid container>
      <Grid item xs={2}>
        {carData.map(car => (
          <Car key={car.id} car={car} onClick={() => setSelectedCar(car)} />
        ))}
      </Grid>
      <Grid item xs={6}>
        {selectedCar ? <CarDetails car={selectedCar} /> : <p>Select a car to see its details.</p>}
      </Grid>

      <Grid xs={4}>
          <CarForm/>
      </Grid>
    </Grid>
  );
}
export default Home