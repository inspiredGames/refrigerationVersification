import axios from 'axios';
import { useState } from 'react'

const SearchForm = (props) => {

    const [userInput, setUserInput] = useState("");
    const [autoCompleteRes, setAutoCompleteRes] = useState([]);
    const [dropDownSelection, setDropDownSelection] = useState('');
    const Filter = require('bad-words')
    const filter = new Filter({placeHolder: 'x'});

    // This will track the users typing
    const handleUserInput = (e) => {
        const input = e.target.value;
        getAutocomplete(input);
        const lowerCaseInput = input.toLowerCase();
        setUserInput(lowerCaseInput)
    }

    const userDropDownSelection = (e) => {
        const input = e.target.value;
        setDropDownSelection(input);
    }
    // API call to the Datamuse API autocomplete endpoint
    const getAutocomplete = (userInput) => {
        axios({
            url: "https://api.datamuse.com/sug",
            method: "GET",
            dataResponse: "json",
            params: {
                s: userInput
            }

        }).then((res) => {
            const autoCompleteResults = res.data.map((d) => {
                return {
                    word: d.word
                }
            })
            // implemented 'bad' words filter using the npm bad-words package to exclude bad words from API results
            const cleanResults = [];

            autoCompleteResults.forEach((w) =>{
                const cleanWord = filter.clean(w.word)
                if(!cleanWord.includes("xx")){
                    cleanResults.push(cleanWord)
                }
            })
            
            setAutoCompleteRes(cleanResults);
        }).catch(() => {
            alert('Something went wrong. Please try again later!')
        })
    }

    return (
        <div className='searchForm'>
            <div className='searchTerm'>
                <form onSubmit={(e) => {
                    props.handleGetWords(e, userInput)
                    setUserInput('')
                }}>
                    <label htmlFor="searchBar">Enter a word:</label>
                    <div className='flexForm'>
                        <input type="text" id="searchBar" list="searchList" placeholder='try "animals"' onChange={(e) => { handleUserInput(e) }} value={userInput} required/>
                        <datalist id="searchList">
                            {autoCompleteRes.map((item) => {
                                
                                return (
                                    <option value={item} key={item}>{item} </option>
                                )
                            })}
                        </datalist>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <div className='searchTheme'>
                <form onSubmit={(e) => {
                    props.handleGetWords(e, dropDownSelection);
                    setDropDownSelection('');
                }}>
                    <label htmlFor='themes'>Or Select a Theme:</label>
                    <div className='flexForm'>
                        <select name="themes" id="themes" required onChange={(e) => { userDropDownSelection(e) }} value={dropDownSelection}>
                            <option value='' disabled>select a theme</option>
                            <option value="winter">Winter</option>
                            <option value="spring">Spring</option>
                            <option value="summer">Summer</option>
                            <option value="fall">Fall</option>
                        </select>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;