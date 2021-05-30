import React from 'react';

const RandButton = (props) => {

    const onButtonClick = (e) => {
        e.preventDefault();
        props.onButtonClick();
    }

    const onButtClick = (e) => {
        props.onButtClick();
    };

    return (
        <div className="randButton">
            <button className="ui button" onClick={(e) => {onButtonClick(e); onButtClick(e);}}>Surprise Me!</button>
        </div>
    );
};

export default RandButton;