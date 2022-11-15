import { useState, useLayoutEffect, useRef } from 'react';
import { useDrag } from '@use-gesture/react';
import { useEffect } from 'react';


const SelectedWords = ({item, index, handleRemoveWord, fridgeHeight, fridgeWidth, fridgeX, fridgeY, userSelection}) => {
    // console.log(`selectedword has rerendered ${item.word}`)
    const [poemWord, setPoemWord] = useState({ x: 0, y: 0 });
    const [marginX, setMarginX] = useState(0);
    const [marginY, setMarginY] = useState(0);
    const [wordWidth, setWordWidth] = useState(0);
    const [wordHeight, setWordHeight] = useState(0);

    const [wordX, setWordX] = useState(0);
    const [wordY, setWordY] = useState(0);
    const wordRef = useRef(null);


    // set word position to absolute once it has rendered on the page(?)
    // reset style for positioning on initial render
    // update wordX, wordY, marginX, marginY everytime userselection updates in fridge



    // set position, top, left to empty strings on initial layout
    // everytime user selection changes, set top and left to last dragged position 
    useLayoutEffect(() => {
        const wordX = wordRef.current.getBoundingClientRect().left;
        const wordY = wordRef.current.getBoundingClientRect().top;

        setWordWidth(wordRef.current.getBoundingClientRect().width);
        setWordHeight(wordRef.current.getBoundingClientRect().height);

        setMarginX(wordX-fridgeX);
        setMarginY(wordY-fridgeY);
        console.log(wordX, wordY, `wordX and wordY ${item.word}`)
        console.log(wordX-fridgeX, 'marginx')
        console.log(wordY-fridgeY, 'marginy')

        console.log(fridgeHeight, fridgeWidth, 'fridge height and width', fridgeX, fridgeY, 'fridge X and Y');
        // wordItem.style.position = '';
        // wordItem.style.top = '';
        // wordItem.style.left = '';
        // console.log(wordItem.style.position, wordItem.style.top, wordItem.style.left)

        console.log(wordRef.current.getBoundingClientRect())
    }, [])

    useEffect(() => {
        wordRef.current.style.top = poemWord.y;
        wordRef.current.style.left = poemWord.x;

        // setPoemWord({x:wordRef.current.getBoundingClientRect().left , y:wordRef.current.getBoundingClientRect().top})

    }, [userSelection])


    const bind = useDrag((params) => {
        setPoemWord({
            x: params.offset[0],
            y: params.offset[1],
        });
    }, {
        bounds: {
            left: (0-marginX),
            right: (fridgeWidth-marginX-wordWidth),
            top: (0-marginY),
            bottom: (fridgeHeight-marginY-wordHeight),
        },
    });

    return (
        <li 
            // onClick = {(e) => {handleClick(e)}}
            ref={wordRef}
            {...bind()} 
            style={{ 
                // position: 'absolute',
                top: poemWord.y,
                left: poemWord.x,
                touchAction: 'none',
                
            }}
            id={item.word.replace(/\s/g, '')}
            onDoubleClick={(e) => {handleRemoveWord(e.target.textContent)}}>
                {item.word}
        </li>
    );
};

export default SelectedWords;