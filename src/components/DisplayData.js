import React from 'react';
import "../style/DisplayData.css";

const DisplayData = ({word, meanings, phonetics}) => {
    meanings.forEach((item, i) => {
        item.id = i + 1;
    });

    const renderedMeaningList = meanings.map((mean) => {
        return (
            <div key={mean.id} className="wordMeaningContainer">
                <div className="partOfSpeech">{mean.partOfSpeech}</div>
                <div className="meaning">{mean.definitions[0].definition}</div>
                <div className="example"><span className="span">Example:-</span> {mean.definitions[0].example}</div>
            </div>
        );
    });

    const renderPhonetic = () => {
        
        return (
            <div className="phonetics">
                <h3 className="phoneticText">{phonetics.text}</h3>
                <i className="fas fa-volume-up speakerIcon"></i>
            </div>
        )
    }


    if (!word) {
        return (
            <div>
                <div className="ui active centered inline loader loaderInit"></div>
            </div>
        );
    }

    return (
        <div>
            {renderPhonetic()}
            <div className="gridBox">
                {renderedMeaningList}
            </div>
        </div>
    );
};

export default DisplayData;