import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
  // Link
} from "react-router-dom";


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

  // to remove the previous togglemode colors
  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  // }

  // to add different togglemodes
  // const toggleMode = (cls) => {
  //   removeBodyClasses();
  //   console.log(cls);

    const toggleMode = () => {

    // to add different togglemodes
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled", "success");
      // document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
    
  }

  return (
    <>
      <Router>
      
        {/* <Navbar title="Text Utils" aboutText="About TextUtils"/> */}
        {/* for default props */}
        {/* <Navbar/> */}

        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>

        <Alert alert={alert}/>

        {/* using JS default parameters instead of defaultProps */}
        {/* <Navbar title='Text Utils' aboutText='About Us'/> */}

          <div className="container my-3">
            <Routes>
              <Route exact path="/about" element = {<About mode={mode}/>}>
              </Route>
              
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Text Utils - Word Counter - Character Counter, Remove Extra Spaces" mode={mode}/>}> 
              </Route>
            </Routes>
          </div>
        
      </Router>
    </>
    
  );
}

export default App;
