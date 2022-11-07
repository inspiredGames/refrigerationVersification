import Fridge from "./Fridge";
import { useState, useEffect } from 'react';

const WordBank = ({ words }) => {

    console.log('wordbank has rendered');

    const [selectedWord, setSelectedWords] = useState("");
    const [wordBank, setWordBank] = useState([]);
    const [userSelection, setUserSelection] = useState([]);
    const [removeWord, setRemoveWord] = useState('');
    const [suffixes, setSuffixes] = useState([
        'a', 'al', 'ance', 'ence', 'ation', 'tion', 'an', 'and', 'sion', 'ure', 'as', 'age', 'aslant', 'at', 'away', 'back', 'ing', 'ery', 'become', 'eer', 'ist', 'ity', 'ment', 'beside', 'between', 'bottom', 'by', 'come', 'comes', 'coming', 'down', 'else', 'even', 'ever', 'ness', 'for', 'or', 'from', 'ship', 'th', 'having', 'highly', 'if', 'in', 'hoop', 'ty', 'instead', 'into', 'less', 'like', 'maybe', 'near', 'nearer', 'nearest', 'neath', 'never', 'not', 'of', 'off', 'often', 'ok', 'okay', 'on', 'only', 'onto', 'or', 'out', 'over', 'past', 'able', 'ible', 'al', 'simply', 'somewhat', 'sorry', 'sure', 'the', 'through', 'thru', 'to', 'too', 'top', 'towards', 'under', 'up', 'upon', 'upside', 'versus', 'very', 'via', 'with', 'withal', 'within', 'ary', 'yes', 'yet', 'all', 'always', 'any', 'ant', 'anyone', 'ward', 'both', 'came', 'did', 'do', 'does', 'done', 'each', 'either', 'every', 'wise', 'everything', 'few', 'fewer', 'had', 'has', 'have', 'he', 'her', 'here', 'hereby', 'hers', 'him', 'his', 'how', 'i', 'it', 'its', 'keep', 'kept', 'kind', 'ious', 'lot', 'many', 'may', 'me', 'ful', 'ic', 'more', 'most', 'much', 'my', 'ous', 'ive', 'less', 'y', 'ical', 'ate', 'ly', 'once', 'other', 'others', "others'", 'our', 'ours', 'remain', 'ish', 'like', 'shall', 'she', 'should', 'some', 'someone', 'something', 'stay', 'stayed', 'stays', 'such', 'that', 'their', 'ed', 'en', 'er', 'these', 'they', 'this', 'ing', 'ton', 'ize', 'ise', 'ify', 'fy', 'we', 'what', 'where', 'which', 'who', 'whoever', 'whom', 'whose', 'why', 'will', 'you', 'your', 'yours'
    ])


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
    }, [words]);
    // ^EVERYTIME PROPS CHANGES (WORDS) DISPLAY NEW RESULTS 

    const handleClick = (e, array) => {
        // remove word from wordBank
        // use indexOf to find its index in the wordBank Array
        // splice out the word using array.splice(index, 1)
        const clickedWord = e.target.textContent;
        if (array === 'wordBank') {
            const indexNum = wordBank.indexOf(clickedWord);
            const newWordBankArray = wordBank;
            newWordBankArray.splice([indexNum], 1);
            setWordBank(newWordBankArray);
        } else if (array === 'suffixes') {
            const indexNum = suffixes.indexOf(clickedWord);
            const newWordBankArray = suffixes;
            newWordBankArray.splice([indexNum], 1);
            setSuffixes(newWordBankArray);
        }

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

    console.log(wordBank)
    const handleRemoveWord = (wordToRemove, array) => {
        const newUserSelection = userSelection;
        const indexNum = newUserSelection.indexOf(wordToRemove);
        console.log(indexNum);
        newUserSelection.splice([indexNum], 1);
        console.log(newUserSelection, 'from handleremove');
        setUserSelection(newUserSelection);
        console.log(userSelection);

        if (array === 'wordbank') {
            const newWordBankArray = wordBank;
            newWordBankArray.push(wordToRemove);
            setWordBank(newWordBankArray);
        } else if (array === 'suffixes') {
            const newWordBankArray = suffixes;
            newWordBankArray.push(wordToRemove);
            setSuffixes(newWordBankArray);
        }

        setRemoveWord(wordToRemove);
    }

    return (
        <div>
            <ul>
                {
                    wordBank.length > 0
                        ? (wordBank.map((w) => {
                            return (
                                <li onClick={(e) => { handleClick(e, 'wordBank') }} key={w}>{w}</li>
                            )
                        })
                        )
                        : <p>send help</p>
                }
            </ul>

            <ul>
                {
                    suffixes.map((suffix) => {
                        return (
                            <li onClick={(e) => { handleClick(e, 'suffixes') }} key={suffix}>{suffix}</li>
                        )
                    })
                }
            </ul>

            <Fridge userSelection={userSelection} handleRemoveWord={handleRemoveWord} />
        </div>
    )
}

export default WordBank;