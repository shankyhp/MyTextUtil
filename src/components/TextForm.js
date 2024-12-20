import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")

    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Area Cleared", "success")

    }

    const handleOnChange = (event) => {

        setText(event.target.value)
    }


    const handleCopy = () => {


        navigator.clipboard.writeText(text);

        props.showAlert("Copied to Clipboard!", "success");

    }


    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed", "success")

    }

    const capitalize = () => {
        if (!text) return ''; // Handle empty or undefined strings
        let newText = text.charAt(0).toUpperCase() + text.slice(1)
        setText(newText);
        props.showAlert("Capitalized", "success")

    }


    const handleDownload = () => {
        if (!text) {
            props.showAlert("No text to download", "warning");
            return;
        }

        const filename = "downloaded_text.txt";
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        props.showAlert("File downloaded", "success");
    };

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>



                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>

                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={capitalize}>Capitalize First Letter</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownload}>Download Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>
                    {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.trim().length} characters
                </p>
                <p>{0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>


        </>
    )
}