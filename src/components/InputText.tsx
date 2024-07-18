import React, { useState } from 'react';

function InputText({ setValue }) {
  const [inputValue, setInputValue] = useState('');
  const [savedValue, setSavedValue] = useState('');

  const handleButtonClick = () => {
    if (inputValue !== null) {
      setSavedValue(inputValue);
      setValue(inputValue)
    } else {
      setSavedValue('Guayaquil');
      setValue('Guayaquil')
    }
    
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleButtonClick}>Save</button>
      <p>Saved value: {savedValue}</p>
    </div>
  );
}

export default InputText