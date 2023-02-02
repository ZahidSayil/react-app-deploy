import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function CarDetails({ car }) {
    if (!car) {
        console.log("No car selected");
        return null;
      }
    return (
      <div style={{margin: '25%'}}>
        
        <Card sx={{ maxWidth: 345 }} >
        {car && (
          <div>
         <CardMedia
        component="img"
        height="200"
        width = "500"
        image={car.image}
        alt= {car.name}
      />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {car.make} {car.model} {car.year}
        </Typography>
        <Typography variant="h7" color="text.secondary">
          price: ${car.price}  color: {car.color} 
        </Typography>
      </CardContent>
  
          </div>
        )}
        </Card>
  
      </div>
    );
  }
  

export default CarDetails;
