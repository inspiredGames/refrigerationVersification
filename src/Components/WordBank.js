import Fridge from "./Fridge";
import { useState, useEffect } from 'react';

const WordBank = ({ words, searchQuery }) => {

    console.log('wordbank has rendered');

    const [selectedWord, setSelectedWords] = useState("");
    const [wordBank, setWordBank] = useState([]);
    const [userSelection, setUserSelection] = useState([]);
    const [removeWord, setRemoveWord] = useState('');
    const [ showWords, setShowWords ] = useState(false);
    const [ showHelperWords, setShowHelperWords ] = useState(false);

    const [helperWordBank, setHelperWordBank] = useState([
        'a', 'al', 'ance', 'ence', 'ation', 'tion', 'an', 'and', 'sion', 'ure', 'as', 'age', 'aslant', 'at', 'away', 'back', 'ery', 'become', 'eer', 'ist', 'ity', 'ment', 'beside', 'between', 'by', 'else', 'even', 'ever', 'ness', 'for', 'from', 'ship', 'th', 'having', 'if', 'in', 'ty', 'into', 'not', 'of', 'off', 'often', 'ok', 'okay', 'on', 'only', 'onto', 'or', 'out', 'over', 'past', 'able', 'ible', 'simply', 'somewhat', 'sorry', 'sure', 'the', 'through', 'thru', 'to', 'too', 'top', 'towards', 'under', 'up', 'upon', 'upside', 'versus', 'very', 'via', 'with', 'withal', 'within', 'ary', 'yes', 'yet', 'all', 'always', 'any', 'ant', 'anyone', 'ward', 'both', 'came', 'did', 'do', 'does', 'done', 'each', 'either', 'every', 'had', 'has', 'have', 'he', 'her', 'here', 'hers', 'him', 'his', 'how', 'i', 'it', 'its', 'keep', 'kept', 'kind', 'ious', 'lot', 'many', 'may', 'me', 'ful', 'ic', 'more', 'most', 'much', 'my', 'ous', 'ive', 'less', 'y', 'ical', 'ate', 'ly', 'once', 'other', 'others', "others'", 'our', 'ours', 'remain', 'ish', 'like', 'shall', 'she', 'should', 'some', 'something', 'such', 'that', 'their', 'ed', 'en', 'er', 'these', 'they', 'this', 'ing', 'ton', 'ize', 'ise', 'ify', 'fy', 'we', 'what', 'where', 'which', 'who', 'whoever', 'whom', 'whose', 'why', 'will', 'you', 'your', 'yours'
    ]);

    useEffect(() => {
        const newWordBankArray = [];

        // loop through words array from api call and push each word object into the newWordBankArray if it does not already exist in there
        words.forEach((wordObject) => {
            if (!newWordBankArray.includes(wordObject)) {
                newWordBankArray.push(wordObject);
            } else {
                console.log('word is included in the array');
            }
        });

        setWordBank(newWordBankArray);
    }, [words]);
    // ^EVERYTIME PROPS CHANGES (WORDS) DISPLAY NEW RESULTS 

    const handleClick = (e, array) => {
        
        const newUserSelection = userSelection;

        if (array === 'apiWords') {
            // get index number of clickedword from wordBank array
            const isClickedWord = (element) => element.word === e.target.textContent;
            const indexNum = wordBank.findIndex(isClickedWord);
            
            // set newWordBank Array equal to existing wordBank and remove the clicked word using the index number
            const newWordBankArray = wordBank;
            const clickedWord = wordBank[indexNum];
            newWordBankArray.splice([indexNum], 1);
            setWordBank(newWordBankArray);  

            // put word on fridge
            newUserSelection.push({...clickedWord, apiData: true});
            
        } else if (array === 'helperWords') {
            const indexNum = helperWordBank.indexOf(e.target.textContent);;
            console.log(indexNum);

            // have to make clickedWord into an object so it can be pushed into newUserSelection
            const clickedWord = {word: e.target.textContent};
            const newWordBankArray = helperWordBank;
            console.log(clickedWord);
            newWordBankArray.splice([indexNum], 1);
            setHelperWordBank(newWordBankArray); 
            newUserSelection.push({...clickedWord, apiData: false});
        }

        setUserSelection(newUserSelection);

        // why do we need this line of code to make everything work even though we aren't using it 
        // it console logs the clicked word only after another word has been clicked
        setSelectedWords(e.target.textContent);
    };

    const handleRemoveWord = (wordToRemove) => {
        const newUserSelection = userSelection;
        const isClickedWord = (element) => element.word === wordToRemove ;
        const indexNum = newUserSelection.findIndex(isClickedWord);

        const clickedWord = userSelection[indexNum];
        newUserSelection.splice([indexNum], 1);
        setUserSelection(newUserSelection);

        // if clickedWord is from the api, then put it back into the wordBank, else put it into the helperWordBank
        if (clickedWord['apiData'] === true) {
            console.log(clickedWord['apiData']);
            const newWordBankArray = wordBank;
            newWordBankArray.push(clickedWord);
            setWordBank(newWordBankArray);
        } else if (clickedWord['apiData'] === false) {
            const newWordBankArray = helperWordBank;
            newWordBankArray.push(wordToRemove);
            setHelperWordBank(newWordBankArray);
        }

        setRemoveWord(wordToRemove);
    }

    return (
        <section className="displayWords">
            <div className="wordBank">
                <h2>Words associated with {searchQuery}:</h2>
                <button onClick={() => setShowWords(!showWords)}>
                    {
                    showWords 
                        ? <i className="fa-solid fa-chevron-up"></i> 
                        : <i className="fa-solid fa-chevron-down"></i>
                    }
                </button>
                

                {
                    showWords 
                        ? (
                            <ul className="associatedWords">
                                {
                                    wordBank.length > 0
                                    ? (wordBank.map((wordObject) => {
                                        return (
                                            <li onClick={(e) => { handleClick(e, 'apiWords') }} key={wordObject['word']}>{wordObject['word']}</li>
                                            )
                                        })
                                    )
                                        : <p>send help</p>
                                    }
                            </ul>
                        )
                        : null
                }
                

                <h2>Connecting Words</h2>
                <button onClick={() => setShowHelperWords(!showHelperWords)}>
                    {
                    showHelperWords 
                        ? <i className="fa-solid fa-chevron-up"></i> 
                        : <i className="fa-solid fa-chevron-down"></i>
                    }
                </button>
                {
                    showHelperWords
                        ? (
                            <ul className="helperWordBank">
                            {
                                helperWordBank.map((word) => {
                                    return (
                                        <li onClick={(e) => { handleClick(e, 'helperWords') }} key={word}>{word}</li>
                                    )
                                })
                            }
                            </ul>
                                )
                        : null
                }
                
            </div>

            <Fridge userSelection={userSelection} handleRemoveWord={handleRemoveWord} />
        </section>
    )
}

export default WordBank;