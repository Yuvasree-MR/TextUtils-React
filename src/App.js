import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {
  return (
    <>
    {/* <Navbar title="Text Utils" aboutText="About TextUtils"/> */}
    {/* for default props */}
    {/* <Navbar/> */}

    {/* <Navbar title="TextUtils"/> */}

    {/* using JS default parameters instead of defaultProps */}
    <Navbar title='Text Utils' aboutText='About Us'/>

    <div className="container my-3">
      <TextForm heading="Enter the Text to Analyze below"/>

      {/* <About/> */}
    </div>
    

    </>
  );
}

export default App;
