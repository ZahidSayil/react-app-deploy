import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const CarForm = ({ addCar, editCar, removeCar }) => {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [image, setImage] = useState('');
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editing) {
      addCar({ year, make, model, image });
    } else {
      editCar({ id, year, make, model, image });
    }
    setYear('');
    setMake('');
    setModel('');
    setImage('');
    setEditing(false);
    setId(null);
  }

//   const handleEdit = (car) => {
//     setYear(car.year);
//     setMake(car.make);
//     setModel(car.model);
//     setImage(car.image);
//     setEditing(true);
//     setId(car.id);
//   }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Year"
        value={year}
        onChange={e => setYear(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Make"
        value={make}
        onChange={e => setMake(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Model"
        value={model}
        onChange={e => setModel(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Image URL"
        value={image}
        onChange={e => setImage(e.target.value)}
        margin="normal"
        variant="outlined"
      />
      <div>
        <Button variant="contained" color="primary" type="submit">
          {editing ? 'Save Changes' : 'Add Car'}
        </Button>
        {editing && (
          <Button variant="contained" color="secondary" onClick={() => removeCar(id)}>
            Remove Car
          </Button>
        )}
      </div>
    </form>
  );
}

export default CarForm;
