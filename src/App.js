import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "succes");
      document.title = "TextUtils - Light Mode";
    }
    
  }

  return (
    <>
    {/* <Navbar title="Text Utils" aboutText="About TextUtils"/> */}
    {/* for default props */}
    {/* <Navbar/> */}

    <Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>

    <Alert alert={alert}/>

    {/* using JS default parameters instead of defaultProps */}
    {/* <Navbar title='Text Utils' aboutText='About Us'/> */}

    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode}/>

      {/* <About/> */}
    </div>
    

    </>
  );
}

export default App;
