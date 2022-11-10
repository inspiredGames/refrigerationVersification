import { useState } from 'react';
import { useDrag } from '@use-gesture/react';


const Fridge = ({ userSelection }) => {
    // map over the userSelection array and return a list of words
    const userSelectionArr = userSelection.map((wordObject) => {
        return wordObject.word;
    });
    console.log(userSelectionArr, 'userSelectionArr');


  const [poemWord, setPoemWord] = useState({ x: 0, y: 0 });
  const bindPoemWordPos = useDrag( (params) => {
    setPoemWord({ 
      x: params.offset[0], 
      y: params.offset[1] 
    });
  });

  console.log(poemWord, 'poemWord');

  return (
    <div className='fridge'>
        <h2>this is the fridge!</h2>
        <ul>
          {/* {
            userSelection.map((wordObject) => {
              return(
                <li
                {...bindPoemWordPos()} 
                className="tester"
                style={{
                  top: poemWord.y,
                  left: poemWord.x,
                  backgroundColor: 'red',
                }}
                key={`${wordObject['word']}Fridge`}>{wordObject['word']}
                </li>
              )
            })
          } */}



    {
    userSelectionArr.map((item, index) => {
        return(
          <li
          {...bindPoemWordPos()} 
          style={{
            top: poemWord.y,
            left: poemWord.x,
            touchAction: 'none',
          }}
          key={index}>
            {item} {index}
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