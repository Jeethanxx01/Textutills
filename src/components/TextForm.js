import React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick =() => {
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleLoClick =() => {
    let newText=text.toLowerCase();
    setText(newText)
  }

  const handleclear =() => {
    let newText=' ';
    setText(newText)
  }

  const handleOnChange =(event) => {
    setText(event.target.value)

  }
  const [text,setText]=useState(" ");
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text}  onChange={handleOnChange} id="mybox" style={{backgroundColor:props.mode==='dark'?'#121212':'white',color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleclear}>Clear</button>
      </div>

      <div className='container my-3'style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>your text summary </h2>
        <p>{text.split(" ").length} words and {text.length} character </p>
        <p>{0.008 * text.split(" ").length} minutes taken read</p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Enter your text in the above box to preview it here"}</p>
        </div>
      </>
  )
}
 