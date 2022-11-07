import axios from 'axios';
import { useState } from 'react'
import SearchForm from './SearchForm';
import WordBank from './WordBank';

const Main = () => {

    const [words, setWords] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleGetWords = (e, userInput) => {
        e.preventDefault();
        console.log(userInput);
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
        }).catch(() =>{
            alert('Something went wrong. Please try again later!')
        })
    }

    return (
        <div>
            <SearchForm handleGetWords={handleGetWords} />

            {
                isSubmitted === true 
                    ? words.length !== 0
                        ? <WordBank words={words}/>
                        : <p>There are no words that match your search. Please enter another word!</p>
                    : null
            }
            

        </div>
    )

}

export default Main;