import { useState } from 'react';
import { useDrag } from '@use-gesture/react';

const SelectedWords = ({item, handleRemoveWord}) => {
    const [poemWord, setPoemWord] = useState({ x: 0, y: 0 });
    // const [addedWidths, setAddedWidths] = useState(0);
    // const [addedHeights, setAddedHeights] = useState(0)


    // add back for prop destructuring {item, index, handleRemoveWord, height, width, widthArray, handleGetWordDimensions, heightArray}
    // useEffect(() => {
    //     const wordItem = document.querySelector(`#${item.word}`)
    //     const width = wordItem.getBoundingClientRect().width;
    //     const height = wordItem.getBoundingClientRect().height;
    //     handleGetWordDimensions(width, height);
    // }, [])

    // useEffect(() => {
    //     for (let i = 0; i < index; i= i+1) {
    //         setAddedWidths(addedWidths + widthArray[i])
    //         setAddedHeights(addedHeights + heightArray[i])
    //         console.log(i);
    //         if (addedWidths > width ) {
    //             setAddedWidths(0);
    //         }
    //         if (addedHeights > height) {
    //             setAddedHeights(0);
    //         }
    //     }
    //     console.log(addedWidths);
    //     console.log(widthArray, heightArray, 'from selectedwords')
    // }, [widthArray, heightArray])

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