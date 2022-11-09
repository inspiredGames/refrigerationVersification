import { useRef } from 'react';

const Fridge = ( { userSelection, handleRemoveWord} ) => {
    console.log('Fridge component has rendered');
   //create useRef state variable
   // the parameter initialValue is the current position of dragItem
    const dragItem = useRef(initialValue);
    // create the function for dragStart
    



    return(
        <div className="fridge">
            <h2>this is the fridge!</h2>
            <ul>
                 {
                userSelection.map((wordObject) => {
                    return(
                        <li 
                        draggable = "true"
                        onClick={(e) => {handleRemoveWord(e.target.textContent)}} 
                        key={`${wordObject['word']}Fridge`}>{wordObject['word']}</li>
                    )
                  })
                }
            </ul>
        </div>
    )
};

export default Fridge;