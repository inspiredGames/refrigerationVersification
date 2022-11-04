import Fridge from "./Fridge";
import { useState, useEffect } from 'react';

const WordBank = ({ words }) => {
const [ selectedWord, setSelectedWords] = useState("");
const [ wordBank, setWordBank] = useState([])

useEffect(() => {
    console.log("it's working!")
    const newWordBankArray = [];
    words.forEach((w) => {
        if (newWordBankArray.includes(w['word'])) {
            console.log("it's a dupe!");
        } else {
            newWordBankArray.push(w['word']);
        }
    });
    setWordBank(newWordBankArray);
    console.log(wordBank);
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
    setSelectedWords(clickedWord);
        // pass down selectedWord to Fridge as props 
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
            
            <Fridge selectedWord={selectedWord} />
        </div>
    )
}

export default WordBank;