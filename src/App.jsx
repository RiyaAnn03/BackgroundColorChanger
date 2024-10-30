import React, { useState } from 'react';
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('white');
    const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <>
         <div className="App  d-flex justify-content-center align-items-center" style={{ backgroundColor: bgColor, height: '100vh' }} >
      <h1>Background Color Changer: </h1>
      <br />
      <br />
      <div className="button-container ">
        
        <button  onClick={() => changeColor('#00FFFF')} style={{ backgroundColor: '#00FFFF',margin:'10px 10px'}}>Cyan</button>
        <button onClick={() => changeColor('#FFD700')} style={{ backgroundColor: '#FFD700',margin:'10px 10px' }}>Gold</button>
        <button onClick={() => changeColor('#C2E9E9')} style={{ backgroundColor: '#C2E9E9',margin:'10px 10px' }}>Mint</button>
        <button onClick={() => changeColor('#008080')} style={{ backgroundColor: '#008080',margin:'10px 10px' }}>Teal</button>

      </div>
      </div>
    
    </>
  )
}

export default App
