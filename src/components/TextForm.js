import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase!","success");
    }

    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowerCase!","success");
    }

    const handleOnChange = (event) => {

        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowerCase</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter something in textbox to preview'}</p>
            </div>
        </>
    )
}
