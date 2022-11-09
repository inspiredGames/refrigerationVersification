import { useRef, useState } from 'react';

const Fridge = ( { userSelection, handleRemoveWord} ) => {
    console.log('Fridge component has rendered');
   //create useRef state variable
    const dragItem = useRef();
    const dragOverItem = useRef();
    const [ fridgePoem, setFridgePoem ] = useState();

    // create the function for dragStart
    const dragStart = (e, position) => {
        dragItem.current = position;
        console.log(e.target.innerHtml);
    }

    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHtml);
    }

    const drop = (e) => {
        const copyPoem = [...fridgePoem];
        const dragPoemContent = copyPoem[dragItem.current];
        copyPoem.splice(dragItem.current, 1);
        copyPoem.splice(dragOverItem.current, 0, dragPoemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setFridgePoem(copyPoem);
    }


    return(
        <div className="fridge">
            <h2>this is the fridge!</h2>
            <ul>
                 {
                userSelection.map((wordObject) => {
                    return(
                        <li 
                        //adding the draggable
                        draggable = "true"
                        //adding the onDragStart
                        onDragStart =
                        { 
                            (e) => dragStart(e, (`${wordObject['word']}Fridge`)) 
                    }
                        //adding the onDragStart
                        onDragEnter =
                        { 
                            (e) => dragEnter(e, (`${wordObject['word']}Fridge`)) 
                    }
                        //adding the onDragEnd
                        onDragEnd = { drop }
                        

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