import axios from 'axios';
import { useState } from 'react'

const SearchForm = (props) => {

    const [userInput, setUserInput] = useState("")
    const [autoCompleteRes, setAutoCompleteRes] = useState([])

    // This will track the users typing
    const handleUserInput = (e) => {
        const input = e.target.value;
        getAutocomplete(input)
        const lowerCaseInput = input.toLowerCase();
        setUserInput(lowerCaseInput);
    }

    const getAutocomplete = (userInput) => {
        axios({
            url: "https://api.datamuse.com/sug",
            method: "GET",
            dataResponse: "json",
            params: {
                s: userInput
            }
            
        }).then((res) => {
            // sorry could someone please explain the purpose of the d here and then whats happening in the return✨✨✨✨✨
            const autoCompleteResults = res.data.map((d) => {
                return{
                    word: d.word
                }
            })
            setAutoCompleteRes(autoCompleteResults);
        }).catch(() =>{
            alert('Something went wrong. Please try again later!')
        })
    }

    return (
        <form onSubmit={(e) => {
            props.handleGetWords(e, userInput)
            setUserInput('')
        }}>
            <label htmlFor="searchBar">Enter a word below</label>
            <input type="text" id="searchBar" list="searchList" onChange={(e) => { handleUserInput(e) }} value={userInput} />
            <datalist id="searchList">
                {autoCompleteRes.map((item) => {
                    console.log(item);
                    return (
                        <option value={item.word}>{item.word}</option>
                    )
                })}
            </datalist>
            <button>Submit</button>
        </form>
    )
}

export default SearchForm;