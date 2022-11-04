import Fridge from "./Fridge";
import { useState, useEffect } from 'react';

const WordBank = ({ words }) => {
const [ selectedWord, setSelectedWords] = useState("");
const [ wordBank, setWordBank] = useState([]);
const [ userSelection, setUserSelection ] = useState([]);

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
        // splice out the word using array.splice(index, [indexNum])
    const clickedWord = e.target.textContent
    const indexNum = wordBank.indexOf(clickedWord);
    const newWordBankArray = wordBank;
    newWordBankArray.splice([indexNum], 1);
    setWordBank(newWordBankArray);
    
    // set word as selectedWord
    const newUserSelection = userSelection;
    newUserSelection.push(clickedWord);
    setUserSelection(newUserSelection);

    // why do we need this line of code to make everything work even though we aren't using it 
    // it console logs the clicked word only after another word has been clicked
    setSelectedWords(clickedWord);
    console.log(selectedWord, 'selectedWord')
};

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
            
            <Fridge userSelection={userSelection} />
        </div>
    )
}

export default WordBank;