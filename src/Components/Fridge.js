import { useState } from 'react';

const Fridge = ( { userSelection, handleRemoveWord} ) => {
    console.log('Fridge component has rendered');

    const [ offset, setOffset ] = useState([0, 0]);
    const [ isDown, setIsDown ] = useState(false);


    const handleMouseDown = (e) => {
        setIsDown(true);
        setOffset([
            e.target.offsetLeft - e.clientX,
            e.target.offsetTop - e.clientY
        ])
    };
    // remember to add capture = true

    const handleMouseUp = () => {
        setIsDown(false);
    }

    const handleMouseMove = (e) => {
        e.preventDefault();
        console.log(e.target);
        if (isDown) {
            setOffset([
                e.target.style.left = (e.clientX + offset[0]) + 'px',
                e.target.style.top  = (e.clientY + offset[1]) + 'px'
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
                userSelection.map((wordObject) => {
                    return(
                        <li 
                        id={`${wordObject['word']}Fridge`}
                        className='draggableWord'
                        draggable='true'
                        //adding the draggable
                        onMouseDown={(e) => {handleMouseDown(e)}}
                        onMouseUp={() => handleMouseUp()}
                        onMouseMove={(e) => {handleMouseMove(e)}}
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