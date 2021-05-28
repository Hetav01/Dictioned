import React from 'react';

const DisplayData = ({word, meanings}) => {

    const renderedList = meanings.map((mean) => {
        return (
            <div key={mean.definitions[0].example} className="wordMeaningContainer">{mean.definitions[0].definition}</div>
        );
    });


    if (!word) {
        return (
            <h3>
                Loading...
            </h3>
        );
    }

    return (
        <div>
            {renderedList}
        </div>
    );
};

export default DisplayData;