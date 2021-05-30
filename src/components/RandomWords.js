import React, { useState, useEffect } from 'react';
import "../style/RandomWord.css";

const RandomWords = ({random, wordArray}) => {
    
    const [randomWord, setRandomWord] = useState("");
    const [randomWordArray, setRandomWordArray] = useState([]);

    useEffect(() => {
        setRandomWord(random.word);
        setRandomWordArray(wordArray);
        console.log(randomWordArray);
    }, [random.word]);
    
    randomWordArray.forEach((item, i) => {  //this is for adding a unique id to each random word generated.
        item.id = i + 1;
    });

    /* const randomWordGenerator = () => {
            //console.log(word);
            return (
                <div>
                    <div className="randomWord">{randomWord}</div>
                    <div>
                    </div>
                </div>
            );
    }; */
    //above function was a starter program for testing.

    const randomWordArrayRender = randomWordArray.map((arrEle) => {
        return (
            <div className="elementBox" key={arrEle.id}>
                <div className="elementWord">{arrEle.word}</div>
                <div className="elementMeaning">{arrEle.definition}</div>
                <div className="elementPronounce">{arrEle.pronunciation}</div>
            </div>
        )
    });


    return (
        <div className="randomWordsBox">
            {randomWordArrayRender}
        </div>
    );
};

export default RandomWords;