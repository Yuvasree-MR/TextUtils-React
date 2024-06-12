import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase", "success");
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success");
  }
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value)
  }

  const handleClearClick= () => {
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared", "success");
  }

  const handleCopy = () => {
    console.log("I am a copy");
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces", "success");
  }

  const [text, setText] = useState('');
  // text = 'New Text';  // Wrong way to change the state
  // setText('New Text'); // Correct way to change state
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    </div>

    <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter Something to Preview it here"}</p>
    </div>
    
    </>
  )
}
