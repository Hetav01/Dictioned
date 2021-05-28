import React, { useState } from 'react';

const WordInput = (props) => {
    const [input, setInput] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.onFormSubmit(input);  //callback for the parent component.
    }

    return (
        <div className="ui container">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="ui grid container">
                    <div className="field thirteen wide column">
                        <input placeholder="Enter a word" type="text" name="inputWord" value={input} onChange={(e) => setInput(e.target.value)}></input>
                    </div>
                    <div className="three wide column">
                        <button className="ui positive button" onClick={onFormSubmit}>Submit</button> 
                    </div>
                </div>
            </form>
        </div>
    );
};

export default WordInput;