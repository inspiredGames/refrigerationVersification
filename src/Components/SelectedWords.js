import { useState } from 'react';
import { useDrag } from '@use-gesture/react';

const SelectedWords = ({item, handleRemoveWord}) => {
    const [poemWord, setPoemWord] = useState({ x: 0, y: 0 });

    const bind = useDrag((params) => {
        setPoemWord({
            x: params.offset[0],
            y: params.offset[1],
        });
    });

    return (
        <li 
            {...bind()} 
            style={{ 
                top: poemWord.y,
                left: poemWord.x,
                touchAction: 'none',
            }}
            id={item.word}
            onDoubleClick={(e) => {handleRemoveWord(e.target.textContent)}}>
                {item.word}
        </li>
    );
};

export default SelectedWords;