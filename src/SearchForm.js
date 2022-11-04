import { useState } from 'react'

const SearchForm = (props) => {

    const [userInput, setUserInput] = useState("")

    // This will track the users typing
    const handleUserInput = (e) => {
        const input = e.target.value;
        const lowerCaseInput = input.toLowerCase();
        setUserInput(lowerCaseInput);
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