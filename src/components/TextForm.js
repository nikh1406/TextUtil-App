import React, { useState } from "react";
import PropTypes from "prop-types";


export default function Textform(props) {
  // Declare a new state variable, which we'll call "text"

  const handleUpClick = ()=>{
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!" , "success");
  }

  const handlelowerClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!" , "success");

  }
  
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!" , "success");
  }


  // Extra : 
  const handelCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!" , "success");

  }


  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  }

  const [text, setText] = useState(" ");
  // text = "new text";  wrong format to change the state
  // setText("new text") Correct ay to change the state

  return (
    <>
    <div className="container" style={{color :props.mode === 'dark' ? 'white' : '#042743'}}>
      <div className="mb-3">
        <h1 >{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === "dark" ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handlelowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handelCopy}>Copy</button>
    </div>



    <div className="container my-3 " style={{color :props.mode === 'dark' ? 'white' : '#042743'}}>
      <h2>Your text summary</h2>
      
      <p>{((text !== "") ? text.split(" ").length : 0)} words and  {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes taken by program to read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text :"Enter something into the textbox above to preview it here"}</p>
    </div>
    </>
  );
}

Textform.propTypes = {
  heading: PropTypes.string,
}; 

Textform.defaultProps = {
  heading: "Set heading",
};
