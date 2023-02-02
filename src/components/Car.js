import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Car = ({ car, onClick }) => {
  const classes = useStyles();

  const handleClick = () => {
    onClick(car);
  }

  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardMedia
        className={classes.media}
        image={car.image}
        title={`${car.make} ${car.model} ${car.year}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {`${car.year} ${car.make} ${car.model}`}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Car;
