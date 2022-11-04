import axios from 'axios';
import { useState } from 'react'
// import SearchForm from './SearchForm';
// import WordBank from './WordBank';

const Main = () => {

    const [words, setWords] = useState([])
    const [userInput, setUserInput] = useState("")

    const handleGetWords = (e) => {
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
    // This will track the users typing
    const handleUserInput = (e) => {
        const input = e.target.value;
        const lowerCaseInput = input.toLowerCase();
        setUserInput(lowerCaseInput);
    }

    return (
        <div>
            {/* <SearchForm handleGetWords={handleGetWords} /> */}

            <form onSubmit={(e) => {
                handleGetWords(e, userInput)
                setUserInput('')
            }}>
                <label></label>
                <input type="text" onChange={(e) => { handleUserInput(e) }} value={userInput} />
                <button>Submit</button>
            </form>

            {/* <WordBank words={words}/> */}
            <ul>
                {
                    words.map((w) => {
                        return (
                            <li key={w.word}>{w.word}</li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default Main;