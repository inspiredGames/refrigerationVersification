import { useState } from 'react';
import { useDrag } from '@use-gesture/react';

const SelectedWords = ({item, handleRemoveWord}) => {

    const [poemWord, setPoemWord] = useState({ x: 0, y: 0 });
    const bindPoemWordPos = useDrag( (params) => {
        setPoemWord({ 
          x: params.offset[0], 
          y: params.offset[1] 
        });
      });

    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <li 
          {...bindPoemWordPos()} 
          style={{
            top: poemWord.y,
            left: poemWord.x,
            touchAction: 'none',
          }}
          className='words'
          onDoubleClick={(e) => {handleRemoveWord(e.target.textContent); handleClick(e)}}
        >{item}</li>
    )
}

export default SelectedWords;