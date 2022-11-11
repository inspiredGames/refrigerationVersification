const Fridge = ( { userSelection, handleRemoveWord} ) => {
    console.log('Fridge component has rendered');
   
    return(
        <div className="fridge">
            <h2>this is the fridge!</h2>
            <ul className="words">
                 {
                userSelection.map((wordObject) => {
                    return(
                        <li onClick={(e) => {handleRemoveWord(e.target.textContent)}} key={`${wordObject['word']}Fridge`}>{wordObject['word']}</li>
                    )
                  })
                }
            </ul>
        </div>
    )
};

export default Fridge;