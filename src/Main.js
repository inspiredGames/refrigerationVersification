import axios from 'axios';
import { useState } from 'react'
import SearchForm from './SearchForm';
import WordBank from './WordBank';

const Main = () => {

    const [words, setWords] = useState([])

    const handleGetWords = (e, userInput) => {
        e.preventDefault();

        axios({
            url: "https://api.datamuse.com/words",
            method: "GET",
            dataResponse: "json",
            params: {
                ml: userInput
            }
        }).then((res) => {
            console.log(res)
            const listOfWords = res.data.map((d) => {
                return {
                    word: d.word
                }
            })
            console.log(listOfWords)
            setWords(listOfWords);
        })
    }
    // // This will track the users typing
    // const handleUserInput = (e) => {
    //     const input = e.target.value;
    //     const lowerCaseInput = input.toLowerCase();
    //     setUserInput(lowerCaseInput);
    // }

    return (
        <div>
            <SearchForm handleGetWords={handleGetWords} />

            <WordBank words={words}/>

        </div>
    )

}

export default Main;