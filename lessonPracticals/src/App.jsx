import Content from "./Content.jsx";
import { useState } from 'react';

function App() {
  /* 1. DECLARE REACT USESTATE FOR DYNAMIC RESULT HERE */
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText ] = useState('')

  /*2. DECLARE YOUR FUNCTION-METHOD/PROPS HERE*/

  
  /*3. ADD YOUR FUNCTION COMPONENT & THEIR PROPERTY FOR PROPS DRILLING HERE */

  return (
    <Content
      colorValue={colorValue}
      setColorValue={setColorValue}
      hexValue={hexValue}
      setHexValue={setHexValue}
      isDarkText={isDarkText}
      setIsDarkText={setIsDarkText}
    />
  );
}

export default App;