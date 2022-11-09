import { useDrag } from 'react-dnd';
import {useState, useCapture} from 'react';

const Fridge = ( { userSelection, handleRemoveWord} ) => {
    console.log('Fridge component has rendered');

    const [ offset, setOffset ] = useState([]);
    const [ isDown, setIsDown ] = useState(false);
    

    const handleMouseDown = (e, id) => {
        setIsDown(true);
        setOffset([
            id.offsetLeft - e.clientX,
            id.offsetTop - e.clientY
        ])
    };
    // remember to add the true in 

    const handleMouseUp = () => {
        setIsDown(false);
    }

    const handleMouseMove = (e, id) => {
        e.preventDefault();
        if (isDown) {
            setOffset([
                id.style.left = (e.clientX + offset[0]) + 'px',
                id.style.top  = (e.clientY + offset[1]) + 'px'
            ]) 
        }
    }
    // var offset = [0,0];
    // var divOverlay = document.getElementById ("overlay");
    // var isDown = false;
    // divOverlay.addEventListener('mousedown', function(e) {
    //     isDown = true;
    //     offset = [
    //         divOverlay.offsetLeft - e.clientX,
    //         divOverlay.offsetTop - e.clientY
    //     ];
    // }, true);


    // document.addEventListener('mouseup', function() {
    //     isDown = false;
    // }, true);

    // document.addEventListener('mousemove', function(e) {
    //     event.preventDefault();
    //     if (isDown) {
    //         divOverlay.style.left = (e.clientX + offset[0]) + 'px';
    //         divOverlay.style.top  = (e.clientY + offset[1]) + 'px';
    //     }
    // }, true);

    return(
        <div className="fridge">
            <h2>this is the fridge!</h2>
            <ul>
                 {
                userSelection.map((wordObject, index) => {
                    return(
                        <li 
                        id={`${wordObject['word']}Fridge`}
                        className='draggableWord'
                        //adding the draggable
                        onMouseDown={(e) => {handleMouseDown(e, (`${wordObject['word']}Fridge`))}}
                        onMouseUp={() => handleMouseUp()}
                        onMouseMove={(e) => {handleMouseMove(e, (`${wordObject['word']}Fridge`))}}
                        // onClick={(e) => {handleRemoveWord(e.target.textContent)}} 
                        key={`${wordObject['word']}Fridge`}>{wordObject['word']}</li>
                    )
                  })
                }
            </ul>
            <div id='target'>
                <h2>drop stuff here!</h2>
            </div>
        </div>
    )
};

export default Fridge;