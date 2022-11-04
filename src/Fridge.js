import { useEffect } from 'react';
import { useState } from 'react';

const Fridge = ( {selectedWord} ) => {
    const [ wordList, setWordList ] = useState([]);
    // to do: reset wordList after each api search 

    useEffect(() => {
        const newWordListArray = wordList;
        if (selectedWord) {
            newWordListArray.push(selectedWord);
        } else {
            console.log('nothing to see here');
        }

        setWordList(newWordListArray);
        console.log(wordList);
    }, [selectedWord]);

    // make an array to store all the selected words
        // push selected word into array
        // on click, remove selected word from array
            // use indexOf to find its index in the wordBank Array
            // splice out the word using array.splice(index, [indexNum])
    // render array to page 

    const handleClick = (e) => {
        console.log('clicked!');
        const clickedWord = e.target.textContent
        const indexNum = wordList.indexOf(clickedWord);
        const newWordListArray = wordList;
        newWordListArray.splice([indexNum], 1);
        setWordList(newWordListArray);
        console.log(wordList);
    }

    return(
        <ul>
            <li>this is the fridge!</li>
            {
                wordList.map((word) => {
                    return(
                        <li onClick={(e) => {handleClick(e)}} key={`${word}Fridge`}>{word}</li>
                    )
                })
            }
        </ul>
    )
};

export default Fridge;