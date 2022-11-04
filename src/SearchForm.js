import axios from 'axios';
import { useState } from 'react'

const SearchForm = (props) => {

    const [userInput, setUserInput] = useState("")
    const [autoUserInput, setAutoUserInput] = useState("")

    // This will track the users typing
    const handleUserInput = (e) => {
        getAutocomplete(autoUserInput)
        const input = e.target.value;
        const lowerCaseInput = input.toLowerCase();
        setUserInput(lowerCaseInput);
    }

    const getAutocomplete = () => {
        axios({
            url: "https://api.datamuse.com/sug",
            method: "GET",
            dataResponse: "json",
            params: {
                s: 'a'
            }
        }).then((res) => {
            const autoCompleteResults = res.data.map((d) =>{
                return{
                    word: d.word
                }
            })
            console.log(autoCompleteResults)
        })
    }

    return (
        <form onSubmit={(e) => {
            props.handleGetWords(e, userInput)
            setUserInput('')
        }}>
            <label htmlFor="searchBar">Enter a word below</label>
            <input type="text" id="searchBar" onChange={(e) => { handleUserInput(e) }} value={userInput} />
            <button>Submit</button>
        </form>
    )
}

export default SearchForm;