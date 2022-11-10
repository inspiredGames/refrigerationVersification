import React, { useState, useRef } from 'react';
 
const Fridge = ({ userSelection }) => {
    console.log(userSelection, 'userSelection');
    // map over the userSelection array and return a list of words
    const userSelectionArr = userSelection.map((wordObject) => {
        return wordObject.word;
    });
    console.log(userSelectionArr, 'userSelectionArr');

  const dragItem = useRef();
  const dragOverItem = useRef();
  const [poem, setPoem] = useState(['Empty Fridge']);


  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML, 'dragStart');
  };
 
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML, 'dragEnter');
  };

    
//   const drop = (e) => {
//     const copyPoemItems = [...userSelectionArr];
//     const dragItemContent = copyPoemItems[dragItem.current];
//     copyPoemItems.splice(dragItem.current, 1);
//     copyPoemItems.splice(dragOverItem.current, 0, dragItemContent);
//     dragItem.current = null;
//     dragOverItem.current = null;
//     setPoem(copyPoemItems);
//   };

  const drop = (e) => {
    const dragItemContent = userSelectionArr[dragItem.current];
    userSelectionArr.splice(dragItem.current, 1);
    userSelectionArr.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setPoem(userSelectionArr);
  };

  return (
    <div className='fridge'>
        <h2>this is the fridge!</h2>
        <ul>
    {
        // if poem is not empty, map over it and return a list of words, else return a message
        poem.length > 0 ? poem.map((word, index) => {
            return (
                <li
      style={{ backgroundColor:'lightblue', margin:'5px 50px'}}
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
          {word}
      </li>
            );
        }) : <p>your fridge is empty!</p>
}
      </ul>
      <ul>
    {
    userSelectionArr.map((item, index) => {
        return(
      <li
        onDragStart={(e) => dragStart(e, index)}
        onDragEnter={(e) => dragEnter(e, index)}
        onDragEnd={drop}
        key={index}
        draggable>
          {item}
      </li>
        )
    })
}
      </ul>
    </div>
  );
};









//     //make userSelection draggable
//     const [draggable, setDraggable] = useState(true);
//     //make userSelection droppable
//     const [droppable, setDroppable] = useState(true);

    



//     const handleDragStart = (e) => {
//         console.log(e, 'drag start');
//         e.dataTransfer.setData('text/plain', e.target.id);
//         e.dataTransfer.dropEffect = 'move';
//     }

//     const handleDragEnd = (e) => {
//         console.log(e, 'drag end');
//         setDraggable(false);
//     }

//     //make userSelection droppable
//     const handleDragOver = (e) => {
//         console.log(e, 'drag over');
//         e.preventDefault();
//         e.dataTransfer.dropEffect = 'move';
//     }

//     const handleDrop = (e) => {
//         console.log(e, 'drop');
//         e.preventDefault();
//         const data = e.dataTransfer.getData('text');
//         e.target.appendChild(document.getElementById(data));
//     }

// //useEffect to update draggable and droppable
//     useEffect(() => {
//         setDraggable(true);
//         setDroppable(true);
//     }, [userSelection]);
    


//     return (
//         <div className="fridge">
//             <h2>Fridge</h2>
//             <ul className="fridge-words">
//                 {userSelection.map((wordObject) => (
//                     <li
//                         draggable={draggable}
//                         key={`${wordObject['word']}Fridge`}
//                         id={`${wordObject['word']}Fridge`}
//                         onDragStart={handleDragStart}
//                         onDragEnd={handleDragEnd}
//                         onDragOver={handleDragOver}
//                         onDrop={handleDrop}

//                         className="fridge-word"
//                     >
//                         {wordObject['word']}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }


// //     return(
// //         <div className="fridge">
// //             <h2>this is the fridge!</h2>
// //             <ul>
// //                 {
// //                 userSelection.map((wordObject) => {
// //                     return(
// //                         <li 
// //                         id={`${wordObject['word']}Fridge`}

// //                         key={`${wordObject['word']}Fridge`}>
// //                             {wordObject['word']}</li>
// //                     )
// //                 })
// //                 }
// //             </ul>
// //             <div id='target'>
// //                 <h2>drop stuff here!</h2>
// //             </div>
// //         </div>
// //     )

export default Fridge;