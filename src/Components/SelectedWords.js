import { useState, useRef, useEffect } from 'react';
import { useDrag } from '@use-gesture/react';

const SelectedWords = ({item, handleRemoveWord, fridgeRef}) => {

    const [poemWord, setPoemWord] = useState({ x: 0, y: 0});
    const wordRef = useRef(null);

    const bind = useDrag((params) => {
        setPoemWord({
            x: params.offset[0],
            y: params.offset[1],
        });
    }, {
        bounds: fridgeRef,
    });
    
    return (
        <li 
            ref={wordRef}
            {...bind()} 
            style={{ 
                top: poemWord.y,
                left: poemWord.x,
                touchAction: 'none',
                position: 'absolute'
            }}
            id={item.word.replace(/\s/g, '')}
            onDoubleClick={(e) => {handleRemoveWord(e.target.textContent)}}>
                {item.word}
        </li>
    );
};

export default SelectedWords;