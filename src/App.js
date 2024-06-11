import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
    
  }

  return (
    <>
    {/* <Navbar title="Text Utils" aboutText="About TextUtils"/> */}
    {/* for default props */}
    {/* <Navbar/> */}

    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>

    {/* using JS default parameters instead of defaultProps */}
    {/* <Navbar title='Text Utils' aboutText='About Us'/> */}

    <div className="container my-3">
      <TextForm heading="Enter the Text to Analyze below" mode={mode}/>

      {/* <About/> */}
    </div>
    

    </>
  );
}

export default App;
