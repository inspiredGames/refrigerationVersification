import { useState } from 'react';
import { useDrag } from '@use-gesture/react';
import { useEffect } from 'react';


const SelectedWords = ({item, index, handleRemoveWord, height, width, handleGetWordDimensions, widthArray, heightArray}) => {
    const [poemWord, setPoemWord] = useState({ x: 0, y: 0 });
    const [addedWidths, setAddedWidths] = useState(0);
    const [addedHeights, setAddedHeights] = useState(0)
    // const [ selectedWord, setSelectedWord] = useState({ width: 0, height: 0})

    function handleClick () {
        // setSelectedWord({
        //     width: e.target.getBoundingClientRect().width,
        //     height: e.target.getBoundingClientRect().height
        // });
        // console.log(selectedWord.height, 'selectedWord.height')
        // console.log(selectedWord.width, 'selectedWord.width')
        // const width = this.getBoundingClientRect().width;
        // const height = this.getBoundingClientRect().height;
        // handleGetWordDimensions(width, height)
        console.log(this)
    }

    useEffect(() => {
        const wordItem = document.querySelector(`#${item.word}`)
        const width = wordItem.getBoundingClientRect().width;
        const height = wordItem.getBoundingClientRect().height;
        console.log(width, height);
        handleGetWordDimensions(width, height);
    }, [])

    useEffect(() => {
        // loop through the array add together all the widths, heights from 0 - index 
        for (let i = 0; i < index; i= i+1) {
            setAddedWidths(addedWidths + widthArray[i])
            setAddedHeights(addedHeights + heightArray[i])
            console.log(i);
            if (addedWidths > width ) {
                setAddedWidths(0);
            }
            if (addedHeights > height) {
                setAddedHeights(0);
            }
        }
        console.log(addedWidths);
        console.log(widthArray, heightArray, 'from selectedwords')
    }, [widthArray, heightArray])

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
        bounds: {
            left: (-addedWidths),
            right: (width-addedWidths),
            top: (-addedHeights),
            bottom: (height-addedHeights),
        },
        // bounds: {
        //     left: 0,
        //     right: (width),
        //     top: 0,
        //     bottom: (height),
        // },
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
            id={item.word}
            onDoubleClick={(e) => {handleRemoveWord(e.target.textContent)}}>
                {item.word}
        </li>
    );
};

export default SelectedWords;