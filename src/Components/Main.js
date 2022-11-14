import axios from 'axios';
import { useState } from 'react'
import SearchForm from './SearchForm';
import WordBank from './WordBank';

const Main = () => {

    const [words, setWords] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showInstructions, setShowInstructions] = useState(true);
    const Filter = require('bad-words')
    const filter = new Filter({placeHolder: 'x'});

    const handleGetWords = (e, userInput) => {
        e.preventDefault();
        setSearchQuery(userInput);
        console.log(userInput);
        const safeUserInput = filter.clean(userInput)
        // setUserInput(safeUserInput);
        if (safeUserInput.includes("xx")) {
            alert('No swear words ! Please enter another word')
        } else {

            axios({
                url: "https://api.datamuse.com/words",
                method: "GET",
                dataResponse: "json",
                params: {
                    ml: userInput,
                    max: 50
                }
            }).then((res) => {
                const listOfWords = res.data.map((d) => {
                    return {
                        word: d.word
                    }
                })
                console.log(listOfWords)
                setWords(listOfWords);
                setIsSubmitted(true);
            }).catch(() => {
                alert('Something went wrong. Please try again later!')
            });
        }
    }

    return (
        <main>
            <div className="instructions">
                <button onClick={() => setShowInstructions(!showInstructions)}>
                    <h2>How to Play</h2>
                    {
                    showInstructions
                        ? <i className="fa-solid fa-chevron-up"></i> 
                        : <i className="fa-solid fa-chevron-down"></i>
                    }
                </button>
                {
                    showInstructions
                        ? (
                            <ul>
                                <li>1. Enter a search term, or select a theme, to get a list of associated words.</li>
                                <li>2. Click on the words you would like to use to make them appear on the fridge. You can pick as many words as you would like from the associated words bank, as well as the helper word bank, for your poem.</li>
                                <li>3. Once the words are on the fridge, drag them around to rearrange the words.</li>
                                <li>4. Don't want a word anymore? Simply double click on the word to remove it from the fridge. </li>
                                <li>5. Create a magnetic poetry masterpiece!</li>
                            </ul>
                        )
                        : null
                }
            </div>

            <SearchForm handleGetWords={handleGetWords} />

            {
                isSubmitted === true
                    ? words.length !== 0
                        ? <WordBank words={words} searchQuery={searchQuery} />
                        : <p>There are no words that match your search. Please enter another word!</p>
                    : null
            }


        </main>
    )

}

export default Main;