import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Uppercase was clicked: ' + text)   yeh sirf debugging checking ke liye use kia tha
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleLoClick = () => {
        // console.log('Uppercase was clicked: ' + text)   yeh sirf debugging checking ke liye use kia tha
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }
    const handleReverseClick = () => {
        let newText = text.split("").reverse().join("");
        // let newText = text[0].toUpperCase() + text.substring(1).toLowerCase() //Capitalize wala function hai
        setText(newText)
        props.showAlert("Text Reversed!", "success")
    }

    const handleOnChange = (event) => {
        // console.log('On change')      yeh sirf debugging checking ke liye use kia tha
        setText(event.target.value)
    }

    // Credits: A
    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select();     //pura text select hojayega isse
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success")
    }

    // Credits: Coding Wala //Regex ka use kia hua hai isne
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);  //yeh extra spaces hata dega
        setText(newText.join(" "))         //yeh string ko single space se mila dega
        props.showAlert("Extra spaces removed!", "success")
    }

    // const [text, setText] = useState("Enter text here2");
    const [text, setText] = useState("");
    // text = 'new text'; //Wrong way to change the state
    // setText('new text'); //Correct way to change the state


    return (
        <>
        <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white',
            color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
