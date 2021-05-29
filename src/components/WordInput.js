import React, { useState } from 'react';
import "../style/WordInput.css";

const WordInput = (props) => {
    const [input, setInput] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onFormSubmit(input);  //callback for the parent component.
    }

    return (
        <div className="ui container wordInput">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="ui grid container inputBody">
                    <div className="ui transparent input field sixteen wide column">
                        <input autoComplete="off" placeholder="Enter a word" type="text" name="inputWord" className="inputWord" value={input} onChange={(e) => setInput(e.target.value)}></input>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WordInput;

/*<div className="three wide column buttonDiv">
                        <button className="ui positive button" onClick={onFormSubmit}>Submit</button> 
                    </div> */