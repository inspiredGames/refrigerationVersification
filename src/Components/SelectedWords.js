import { useState, useLayoutEffect, useRef } from 'react';
import { useDrag } from '@use-gesture/react';
import { useEffect } from 'react';

const SelectedWords = ({item, index, handleRemoveWord, fridgeHeight, fridgeWidth, fridgeX, fridgeY, fridgeRef, userSelection}) => {
    const [poemWord, setPoemWord] = useState({ x: 0, y: 0 });

    const [wordX, setWordX] = useState(0);
    const [wordY, setWordY] = useState(0);
    const wordRef = useRef(null);

    // const [arrayLength, setArrayLength] = useState(userSelection.length);

    // useEffect(() => {
    //     // const wordX = wordRef.current.getBoundingClientRect().left;
    //     // const wordY = wordRef.current.getBoundingClientRect().top;


    //     // setWordWidth(wordRef.current.getBoundingClientRect().width);
    //     // setWordHeight(wordRef.current.getBoundingClientRect().height);

    //     // setMarginX(wordX-fridgeX);
    //     // setMarginY(wordY-fridgeY);
        
    //     if (wordX !== 0 && wordY !== 0) {
    //         wordRef.current.position = 'absolute';
        
    //         wordRef.current.style.top = '';
    //         wordRef.current.style.left = '';
    //     } else {
    //         console.log(wordX, wordY, 'wordX and y')
    //     }
        


    // }, [userSelection])


    useEffect(() => {

        if (wordX !== 0 || wordY !== 0) {
            wordRef.current.position = 'absolute';
            wordRef.current.style.top = wordY;
            wordRef.current.style.left = wordX;
            wordRef.current.style.display = 'inline';
            console.log('yayyyyy')

        }
        

    }, [userSelection])

    useEffect(() => {
        setWordX(wordRef.current.getBoundingClientRect().left);
        setWordY(wordRef.current.getBoundingClientRect().top);
        console.log(wordRef.current)
        console.log(wordX, wordY, 'from getwordcoords')
    }, [poemWord])


    // useEffect(() => {
        
    //     wordRef.current.position = 'absolute';

    //     // const wordX = wordRef.current.getBoundingClientRect().left;
    //     // const wordY = wordRef.current.getBoundingClientRect().top;

    //     // setMarginX(wordX-fridgeX);
    //     // setMarginY(wordY-fridgeY);
        
    //     // console.group(`'from useeffect' ${item.word}`)
    //     // console.log(wordX, wordY, 'wordX and wordY')
    //     // console.log(wordX-fridgeX, wordY-fridgeY, 'marginx and y')
    //     // console.log(fridgeX, fridgeY, 'fridge x and y')
    //     // console.groupEnd();

        
    // }, [userSelection])


    // const bind = useDrag((params) => {
    //     setPoemWord({
    //         x: params.offset[0],
    //         y: params.offset[1],
    //     });
    // }, {
    //     bounds: {
    //         left: (0-marginX),
    //         right: (fridgeWidth-marginX-wordWidth),
    //         top: (0-marginY),
    //         bottom: (fridgeHeight-marginY-wordHeight),
    //     },
        
    // });

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
            }}

            id={item.word.replace(/\s/g, '')}
            onDoubleClick={(e) => {handleRemoveWord(e.target.textContent)}}>
                {item.word}
        </li>
    );
};

export default SelectedWords;