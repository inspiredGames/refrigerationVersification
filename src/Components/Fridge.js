import { useState } from 'react';
import { useDrag, useGesture } from '@use-gesture/react';




//*****USE-GESTURE DOCS */
// // // when you use a gesture-specific hook
// useDrag(state => doSomethingWith(state), { ...sharedOptions, ...dragOptions })

// // when you use the useGesture hook
// useGesture({
//   onDrag: state => doSomethingWith(state),
//   onPinch: state => doSomethingWith(state),
//   // ...
//   {
//   // global options such as `target`
//   ...sharedOptions,
//   // gesture specific options
//   drag: dragOptions,
//   wheel: wheelOptions,
//   pinch: pinchOptions,
//   scroll: scrollOptions,
//   hover: hoverOptions,
//   }
// })








import { useRef } from 'react';



const Fridge = ({ userSelection }) => {
    // map over the userSelection array and return a list of words
    const userSelectionArr = userSelection.map((wordObject) => {
        return wordObject.word;
    });
    // console.log(userSelectionArr, 'userSelectionArr');


  const [poemWord, setPoemWord] = useState({ x: 0, y: 0 });
  // const [ drag, setDrag ] = useState(true);


  // setting useRef
  const myRef = useRef(null)

  //   // try using target and useRef 
  useDrag(({ event }) => event.preventDefault(), {
  target: myRef,
  eventOptions: { passive: false }
})

console.log(useDrag, 'useDrag');


  // const bindPoemWordPos = useDrag( (params, state) => {
    
    
    
  //   const { event, dragging } = state;

  //   console.log(state, 'state');
  //   setPoemWord({ 
  //     x: params.offset[0], 
  //     y: params.offset[1] 
  //   });
  //   // setDrag(false)
  // });





console.log(myRef, 'myRef');



const handleClick = () => {
  console.log(myRef, 'onclick');
}


// // // when you use a gesture-specific hook
// useDrag(state => doSomethingWith(state), { ...sharedOptions, ...dragOptions })

// // when you use the useGesture hook
// useGesture({
//   onDrag: state => doSomethingWith(state),
//   onPinch: state => doSomethingWith(state),
//   // ...
//   {
//   // global options such as `target`
//   ...sharedOptions,
//   // gesture specific options
//   drag: dragOptions,
//   wheel: wheelOptions,
//   pinch: pinchOptions,
//   scroll: scrollOptions,
//   hover: hoverOptions,
//   }

// })













  // const bindPoemWordPos = useDrag( (params, state) => {
  //   // TODO: bound li to fridge
    
  //   // try using target and useRef 
    
    
  //   const { event, dragging } = state;

  //   console.log(state, 'state');
  //   setPoemWord({ 
  //     x: params.offset[0], 
  //     y: params.offset[1] 
  //   });
  //   // setDrag(false)
  // });

  // console.log(poemWord, 'poemWord');

  return (
    <div className='fridge'>
        <h2>this is the fridge!</h2>
        <ul>
    {
    userSelectionArr.map((item, index) => {
        return(
          <li
          // {...bindPoemWordPos()} 


          //testing myRef
          ref={myRef}
          onClick={handleClick}


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