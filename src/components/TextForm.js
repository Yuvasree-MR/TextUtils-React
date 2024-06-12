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
    // console.log("I am a copy");
    // var text = document.getElementById("myBox");
    // text.select();
    // text.setSelectionRange(0, 9999);
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
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
      <h2  className='mb-4'>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
    </div>

    <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    
    </>
  )
}
