import { useState } from 'react';
import { useDrag } from '@use-gesture/react';

const SelectedWords = ({item}) => {

    const [poemWord, setPoemWord] = useState({ x: 0, y: 0 });
    const bindPoemWordPos = useDrag( (params) => {
        setPoemWord({ 
          x: params.offset[0], 
          y: params.offset[1] 
        });
      });
    return (
        <li 
          {...bindPoemWordPos()} 
          style={{
            top: poemWord.y,
            left: poemWord.x,
            touchAction: 'none',
          }}
        >{item}</li>
    )
}

export default SelectedWords;