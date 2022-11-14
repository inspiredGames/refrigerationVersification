import axios from 'axios';
import { useState } from 'react'
import SearchForm from './SearchForm';
import WordBank from './WordBank';

const Main = () => {

    const [words, setWords] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
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