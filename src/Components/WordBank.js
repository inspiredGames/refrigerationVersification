import Fridge from "./Fridge";
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useState, useEffect } from 'react';

const WordBank = ({ words, searchQuery }) => {

    console.log('wordbank has rendered');

    const [wordBank, setWordBank] = useState([]);
    const [userSelection, setUserSelection] = useState([]);
    const [ showWords, setShowWords ] = useState(false);
    const [ showHelperWords, setShowHelperWords ] = useState(false);

    const [helperWordBank, setHelperWordBank] = useState(['a', 'able', 'al', 'am', 'an', 'ance', 'and', 'are', 'ary', 'as', 'at', 'ation', 'by', 'do', 'did', 'ed', 'else', 'en', 'er', 'ery', 'for', 'from', 'ful', 'fy', 'had', 'has', 'have', 'he', 'her', 'hers', 'him', 'his', 'I', 'ible', 'ic', 'ical', 'if', 'ify', 'in', 'ing', 'ious', 'is', 'ise', 'ish', 'ist', 'it', 'its', 'ity', 'ize', 'ly', 'make', 'may', 'me', 'ment', 'my', 'ness', 'not', 'of', 'off', 'on', 'onto', 'or', 'our', 'ours', 'ous', 'out', 'she', 'should', 'sion', 'th', 'that', 'the', 'their', 'these', 'they', 'this', 'tion', 'to', 'ton', 'too', 'ty', 'we', 'what', 'where', 'which', 'who', 'whom', 'whose', 'why', 'will', 'with', 'y', 'you', 'your', 'yours'
    ]);

    console.log(helperWordBank.sort())

    const { width } = useWindowDimensions();

    useEffect(() => {
        if (width >= 750) {
            setShowWords(true);
            setShowHelperWords(true);
        }
    }, [])

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

    useEffect(() => {
        setUserSelection([]);
    }, [searchQuery]);

    const handleClick = (e, array) => {
        
        const newUserSelection = userSelection.map(x => x);

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
        // setSelectedWords(e.target.textContent);
    };

    const handleRemoveWord = (wordToRemove) => {
        console.log(wordToRemove)
        const newUserSelection = userSelection.map(x => x);
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
    }

    return (
        <section className="displayWords">
            <div className="wordBank">
                    
                <button onClick={() => setShowWords(!showWords)}>
                    <h2>Words associated with {searchQuery}:</h2>
                    {
                    showWords 
                        ? <i className="fa-solid fa-chevron-up"></i> 
                        : <i className="fa-solid fa-chevron-down"></i>
                    }
                </button> 
                
                {
                    showWords 
                        ? (
                            <ul className="associatedWords words">
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
                

                <button onClick={() => setShowHelperWords(!showHelperWords)}>
                    <h2>Connecting Words</h2>
                    {
                    showHelperWords 
                        ? <i className="fa-solid fa-chevron-up"></i> 
                        : <i className="fa-solid fa-chevron-down"></i>
                    }
                </button>

                {
                    showHelperWords
                        ? (
                            <ul className="helperWordBank words">
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