import axios from 'axios';
import { useState } from 'react'

const SearchForm = (props) => {

    const [userInput, setUserInput] = useState("")
    const [autoCompleteRes, setAutoCompleteRes] = useState([])
    const [dropDownSelection, setDropDownSelection] = useState('placeholder')

    // This will track the users typing
    const handleUserInput = (e) => {
        const input = e.target.value;
        getAutocomplete(input)
        const lowerCaseInput = input.toLowerCase();
        setUserInput(lowerCaseInput);
    }

    const userDropDownSelection = (e) => {
        const input = e.target.value;
        console.log(e.target.value)
        setDropDownSelection(input);

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
                return {
                    word: d.word
                }
            })
            setAutoCompleteRes(autoCompleteResults);
        }).catch(() => {
            alert('Something went wrong. Please try again later!')
        })
    }

    return (
        <div className='searchForm flexContainer'>
            <div className='searchTerm'>
                <form onSubmit={(e) => {
                    props.handleGetWords(e, userInput)
                    setUserInput('')
                }}>
                    <label htmlFor="searchBar">Enter a word below</label>
                    <input type="text" id="searchBar" list="searchList" onChange={(e) => { handleUserInput(e) }} value={userInput} required/>
                    <datalist id="searchList">
                        {autoCompleteRes.map((item) => {
                            
                            return (
                                <option value={item.word} key={item.word}>{item.word} </option>
                            )
                        })}
                    </datalist>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                <form id='dropDownForm' onSubmit={(e) => {
                    // this is how the if statement knows if we are selected 'dropDown':
                    props.handleGetWords(e, dropDownSelection);
                    setDropDownSelection('placeholder');
                }}>
                    <label htmlFor='themes'>please select a theme!</label>
                    <select name="themes" id="themes" required onChange={(e) => { userDropDownSelection(e) }} value={dropDownSelection}>
                        <option value="placeholder" disabled>select a theme</option>
                        <option value="winter">Winter</option>
                        <option value="spring">Spring</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;