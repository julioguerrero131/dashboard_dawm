import { useState } from 'react';
import { Button, Input, Typography } from '@mui/material';

function InputText({ setValue }) {
  const [inputValue, setInputValue] = useState('');
  const [savedValue, setSavedValue] = useState('');

  const handleButtonClick = () => {
    if (inputValue !== null) {
      let ciudad = inputValue.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      setSavedValue(ciudad);
      setValue(ciudad)
    } else {
      setSavedValue('Guayaquil');
      setValue('Guayaquil')
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ingresa una ciudad"
        style={{ marginRight: '10px', marginTop: '30px', color: 'white', width: '80%' }}
      />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Cambiar
      </Button>
    </>
  );
}

export default InputText