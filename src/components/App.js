import React, { useState } from 'react';
import Header from './Header';
import WordInput from "./WordInput";
import Dictionary from "../APIs/Dictionary";
import DisplayData from './DisplayData';
import Random from "../APIs/Random";
//import { Container } from "@material-ui/core";

const App = () => {
    //const [ wordData, setWordData ] = useState([]);
    const [ searchedWord, setSearchedWord ] = useState("");
    const [ meanings, setMeanings ] = useState([]);
    const [ phonetics, setPhonetics ] = useState([]);

    const generateRandomWordData = async () => {
        const response = await Random.get();
        console.log(response.data);
    }

    const retrieveData = async (word) => {                  //if we are rendering after each input we will use the useEffect hook.
        try {
            const response = await Dictionary.get(`/${word}`);    
            //setWordData(response.data);
            setSearchedWord(response.data[0].word);
            console.log(response.data[0].meanings);
            setMeanings(response.data[0].meanings);
            setPhonetics(response.data[0].phonetics[0]);
        }
        catch(error) {
            console.log(error);
        }

    };

    return (
        <div className="ui container">
            <Header />
            <WordInput onFormSubmit={retrieveData} />
            <DisplayData word={searchedWord} meanings={meanings} phonetics={phonetics}/>
        </div>
    );
};

export default App;