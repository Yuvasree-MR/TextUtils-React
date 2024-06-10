import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value)
  }

  const [text, setText] = useState('');
  // text = 'New Text';  // Wrong way to change the state
  // setText('New Text'); // Correct way to change state
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
    </div>

    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
    </div>
    <h1>Preview</h1>
    <p>{text}</p>
    </>
  )
}
