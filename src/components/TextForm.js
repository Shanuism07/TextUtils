import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("Upper Case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "Success");
    }
    const handleLoClick = () =>{
        console.log("Lower Case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "Success");

    }
    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value);
    }
    const calculateReadingTime = () => {
        return 0.008 * text.split(" ").length;
      };

      const handleSpeechConversion = () => {
        const speech = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(speech);
    }
    const [text, setText] = useState('');



  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3" >
    <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
  </div>
  <div className="d-flex justify-content-center">
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleSpeechConversion}>Convert to Speech</button>
</div>
    </div>
    <div className="container my-3" style={{backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} {text.split(" ").length === 1 ? 'word' : 'words'} and {text.length} characters</p>
        <p>{calculateReadingTime()} Minutes Reading Time</p>
    </div>
    </>
  )
}
