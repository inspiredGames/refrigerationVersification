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
            const listOfWords = res.data.map((d) => {
                return {
                    word: d.word
                }
            })
            setWords(listOfWords);
        })
    }

    return (
        <div>
            <SearchForm handleGetWords={handleGetWords} />

            {
                words.length > 0
                    ? <WordBank words={words}/>
                    : <p>enter a search term</p>
                
            }
            

        </div>
    )

}

export default Main;