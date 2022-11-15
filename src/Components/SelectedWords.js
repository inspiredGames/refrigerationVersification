import { useState, useLayoutEffect } from 'react';
import { useDrag } from '@use-gesture/react';
import { useEffect } from 'react';


const SelectedWords = ({item, index, handleRemoveWord, fridgeHeight, fridgeWidth, fridgeX, fridgeY, handleGetWordDimensions, widthArray, heightArray}) => {
    // console.log(`selectedword has rerendered ${item.word}`)
    const [poemWord, setPoemWord] = useState({ x: 0, y: 0 });
    const [addedWidths, setAddedWidths] = useState(0);
    const [addedHeights, setAddedHeights] = useState(0);
    const [marginX, setMarginX] = useState(0);
    const [marginY, setMarginY] = useState(0);
    const [wordWidth, setWordWidth] = useState(0);
    const [wordHeight, setWordHeight] = useState(0);

    const [wordX, setWordX] = useState(0);
    const [wordY, setWordY] = useState(0);

    useLayoutEffect(() => {
        const wordItem = document.querySelector(`#${item.word.replace(/\s/g, '')}`);
        const wordX = wordItem.getBoundingClientRect().left;
        const wordY = wordItem.getBoundingClientRect().top;

        setWordWidth(wordItem.getBoundingClientRect().width);
        setWordHeight(wordItem.getBoundingClientRect().height);
        handleGetWordDimensions(wordX, wordY);

        setMarginX(wordX-fridgeX);
        setMarginY(wordY-fridgeY);
        console.log(wordX, wordY, `wordX and wordY ${item.word}`)
        console.log(wordX-fridgeX, 'marginx')
        console.log(wordY-fridgeY, 'marginy')

        console.log(fridgeHeight, fridgeWidth, 'fridge height and width', fridgeX, fridgeY, 'fridge X and Y')
    }, [])

    

    // useEffect(() => {
    //     // loop through the array add together all the widths, heights from 0 - index 
    //     for (let i = 0; i < index; i= i+1) {
    //         setAddedWidths(addedWidths + widthArray[i])
    //         setAddedHeights(addedHeights + heightArray[i])
    //         console.log(i);
    //         if (addedWidths > fridgeWidth ) {
    //             setAddedWidths(0);
    //         }
    //         if (addedHeights > fridgeHeight) {
    //             setAddedHeights(0);
    //         }
    //     }
    //     // console.log(addedWidths);
    //     // console.log(widthArray, heightArray, 'from selectedwords')
    // }, [widthArray, heightArray])

    useEffect(() => {
        const wordItem = document.querySelector(`#${item.word.replace(/\s/g, '')}`)
        setWordX(wordItem.getBoundingClientRect().left);
        setWordY(wordItem.getBoundingClientRect().top);
    }, [widthArray, heightArray]);

    const bind = useDrag((params) => {
        setPoemWord({
            x: params.offset[0],
            y: params.offset[1],
        });
    }, {

// *** SEE _fridge.scss for the styles that are applied to the "ul" for poemWord ***
      // list items are positioned absolute, so we need to set the bounds to the parent element which we have set ul as position relative
      // we need to figure out what to set the bounds to for different media queries
        // bounds: {
        //     left: -200,
        //     right: 200,
        //     top: -100,
        //     bottom: 200,
        // }
        // bounds: {
        //     minX:0 - poemWord.x,
        //     maxX:width - poemWord.x,
        //     minY:0 - poemWord.y,
        //     maxY:height - poemWord.y,
        // }
        // bounds: {
        //     left: (-selectedWord.width),
        //     right: (width-selectedWord.width-50),
        //     top: 0,
        //     bottom: (height-selectedWord.height-50),
        // },
        // bounds: {
        //     left: (-addedWidths),
        //     right: (fridgeWidth-addedWidths),
        //     top: (-addedHeights),
        //     bottom: (fridgeHeight-addedHeights),
        // },
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