import React, { useState } from 'react';
import Header from './Header';
import WordInput from "./WordInput";
import Dictionary from "../APIs/Dictionary";
import DisplayData from './DisplayData';
//import { Container } from "@material-ui/core";

const App = () => {
    //const [ wordData, setWordData ] = useState([]);
    const [ searchedWord, setSearchedWord ] = useState("");
    const [meanings, setMeanings ] = useState([]);

    const retrieveData = async (word) => {                  //if we are rendering after each input we will use the useEffect hook.
        try {
            const response = await Dictionary.get(`/${word}`);    
            //setWordData(response.data);
            setSearchedWord(word);
            console.log(response.data[0].meanings);
            setMeanings(response.data[0].meanings);
        }
        catch(error) {
            console.log(error);
        }

    };

    return (
        <div className="ui container">
            <Header />
            <WordInput onFormSubmit={retrieveData} />
            <DisplayData word={searchedWord} meanings={meanings}/>
        </div>
    );
};

export default App;