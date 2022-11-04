import { useEffect } from 'react';
import { useState } from 'react';

const Fridge = ( { userSelection, handleRemoveWord} ) => {
    console.log('Fridge component has rendered');
    const [ wordList, setWordList ] = useState(userSelection);
    // to do: reset wordList after each api search 

    useEffect(() => {
        setWordList(userSelection);
        console.log(wordList);
    }, []);
    // const handleClick = (e) => {
    //     console.log('clicked!');
    //     const clickedWord = e.target.textContent
    //     const indexNum = wordList.indexOf(clickedWord);
    //     const newWordListArray = wordList;
    //     newWordListArray.splice([indexNum], 1);
    //     setWordList(newWordListArray);
    //     console.log(wordList);
    // }

    return(
        <ul>
            <li>this is the fridge!</li>
            {
                wordList.map((word) => {
                    return(
                        <li onClick={(e) => {handleRemoveWord(e.target.textContent)}} key={`${word}Fridge`}>{word}</li>
                    )
                })
            }
        </ul>
    )
};

export default Fridge;