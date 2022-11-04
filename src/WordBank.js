import Fridge from "./Fridge";
import { useState, useEffect } from 'react';

const WordBank = ({ words }) => {

console.log('wordbank has rendered');

const [ selectedWord, setSelectedWords] = useState("");
const [ wordBank, setWordBank] = useState([]);
const [ userSelection, setUserSelection ] = useState([]);
const [ removeWord, setRemoveWord] = useState('');

useEffect(() => {
    const newWordBankArray = [];
    words.forEach((w) => {
        if (newWordBankArray.includes(w['word'])) {
            console.log("it's a dupe!");
        } else {
            newWordBankArray.push(w['word']);
        }
    });
    setWordBank(newWordBankArray);
}, []);

const handleClick = (e) => {
    // remove word from wordBank
        // use indexOf to find its index in the wordBank Array
        // splice out the word using array.splice(index, 1)
    const clickedWord = e.target.textContent
    const indexNum = wordBank.indexOf(clickedWord);
    const newWordBankArray = wordBank;
    newWordBankArray.splice([indexNum], 1);
    setWordBank(newWordBankArray);
    
    // put word on fridge 
    const newUserSelection = userSelection;
    newUserSelection.push(clickedWord);
    setUserSelection(newUserSelection);
    console.log(userSelection, 'from handle click')

    // why do we need this line of code to make everything work even though we aren't using it 
    // it console logs the clicked word only after another word has been clicked
    setSelectedWords(e.target.textContent);
    console.log(selectedWord, 'selectedWord')
};

const handleRemoveWord = (wordToRemove) => {
    const newUserSelection = userSelection;
    const indexNum = newUserSelection.indexOf(wordToRemove);
    console.log(indexNum);
    newUserSelection.splice([indexNum], 1);
    console.log(newUserSelection, 'from handleremove');
    setUserSelection(newUserSelection);
    console.log(userSelection);

    const newWordBankArray = wordBank;
    newWordBankArray.push(wordToRemove);
    setWordBank(newWordBankArray);

    setRemoveWord(wordToRemove);
}

    return (
        <div>
            <ul>
                {
                    wordBank.length > 0
                        ? (wordBank.map((w) => {
                            return (
                                <li onClick={(e) => {handleClick(e)}} key={w}>{w}</li>
                            )
                            })
                        )
                        : <p>send help</p>
                } 
            </ul>
            
            <Fridge userSelection={userSelection} handleRemoveWord={handleRemoveWord} />
        </div>
    )
}

export default WordBank;