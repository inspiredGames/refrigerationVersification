import { useState } from 'react';
import { useDrag } from '@use-gesture/react';

const SelectedWords = ({item, handleRemoveWord}) => {


    const [poemWord, setPoemWord] = useState({ x: 0, y: 0 });

    const bind = useDrag((params) => {
        setPoemWord({
            x: params.offset[0],
            y: params.offset[1],
        });
    }, {

// *** SEE _fridge.scss for the styles that are applied to the "ul" for poemWord ***
      // list items are positioned absolute, so we need to set the bounds to the parent element which we have set ul as position relative
      // we need to figure out what to set the bounds to for different media queries
        bounds: {
            left: -200,
            right: 200,
            top: -100,
            bottom: 200,
        }
    });

    return (
        <li 
            {...bind()} 
            style={{ 
                top: poemWord.y,
                left: poemWord.x,
                touchAction: 'none',
            }}
            onDoubleClick={(e) => {handleRemoveWord(e.target.textContent)}}>
                <p>{item}</p>
        </li>
    );
};

export default SelectedWords;