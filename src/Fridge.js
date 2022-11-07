const Fridge = ( { userSelection, handleRemoveWord} ) => {
    console.log('Fridge component has rendered');
   
    return(
        <ul>
            <li>this is the fridge!</li>
            {
                userSelection.map((wordObject) => {
                    return(
                        <li onClick={(e) => {handleRemoveWord(e.target.textContent)}} key={`${wordObject['word']}Fridge`}>{wordObject['word']}</li>
                    )
                })
            }
        </ul>
    )
};

export default Fridge;