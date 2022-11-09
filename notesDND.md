//Step 1: Create a list and make its elements draggable
  //import useRef
  //WordBank will be draggable and the start position
  //Fridge will be the draggable end position
  //****NEXT LEVEL: when word needs to be removed from fridge, allow it to be draggable from Fridge back to WordBank
  
  // li's from WordBank that will be draggable
    //.associatedWords li
    //.sufFuncWords li


//Step 2: locate the item to be dragged
  //HTML Element: dragstart event = https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragstart_event
    
  //create the dragStart function for the onDragStart
    // create variable dragItem = useRef();
    // const dragStart = (e, position) => {
      //dragItem.current = position;
      //console.log(e.target.innerHTML)
    //}

    //return()
      // for the .wordBank div add the HTML Element 
      //let index = {wordObject['word']}
      // add an index parameter to wordBank.map((wordObject, index)=>{})
      //draggable = true
      //onDragStart={(e) => dragStart(e, index)}


//Step 3: locate the item to be dragged
  //under dragStart create a variable for dragEnter
  


//Step 4: Rearrange the list

//new hook we may need to use
  //useRef() = https://reactjs.org/docs/hooks-reference.html#useref
fire




## create a new component called "Instruction.js" and call it in Main.js
  - it will live under the SearchForm.js

## Step 1 
  - choose the li to be draggable
### Fridge.js

## Step 2 
  - set draggable = true on the .fridge li
    // create variable dragItem = useRef();
    // const dragStart = (e, position) => {
      //dragItem.current = position;
      //console.log(e.target.innerHTML)
    //}


---
### Code so far 
   //create useRef state variable
    const dragItem = useRef();
    const dragOverItem = useRef();
    const [ fridgePoem, setFridgePoem ] = useState([]);
    const x = useRef(0);
    const y = useRef(0);
    const [ position, setPosition ] = useState({x:x, y:y})

    // create the function for dragStart
    const dragStart = (e, index) => {
        dragItem.current = index;
        console.log(dragItem.current);
        const xCoord = e.target.offsetLeft;
        const yCoord = e.target.offsetTop
        x.current = xCoord;
        y.current = yCoord;
        setPosition({x:x, y:y})
        console.log(x, y, 'from dragStart');
    }

    const dragEnter = (e, index) => {
        dragOverItem.current = index;
        const x = e.target.offsetLeft;
        const y = e.target.offsetTop
        console.log(x, y, 'from dragEnter');
    }

    const drop = (e) => {
        const xCoord = e.target.offsetLeft;
        console.log(e);
        const yCoord = e.target.offsetTop;
        console.log(xCoord, yCoord);
        const copyPoem = [...fridgePoem];
        console.log(copyPoem)
        const dragPoemContent = copyPoem[dragItem.current];
        console.log(dragPoemContent)
        copyPoem.splice(dragItem.current, 1);
        copyPoem.splice(dragOverItem.current, 0, dragPoemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setFridgePoem(copyPoem);
    }
  return(
        <div className="fridge">
            <h2>this is the fridge!</h2>
            <ul>
                 {
                userSelection.map((wordObject, index) => {
                    return(
                        <li 
                        ref={dragItem}
                        
                        //adding the draggable
                        draggable = "true"
                        //adding the onDragStart
                        onDragStart =
                        { 
                            (e) => dragStart(e, index) 
                    }
                        //adding the onDragStart
                        onDragEnter =
                        { 
                            (e) => dragEnter(e, (`${wordObject['word']}Fridge`)) 
                    }
                        //adding the onDragEnd
                        onDragEnd = { drop }
                        

                        onClick={(e) => {handleRemoveWord(e.target.textContent)}} 
                        key={`${wordObject['word']}Fridge`}>{wordObject['word']}</li>
                    )
                  })
                }
            </ul>
            <div>
                <h2>drop stuff here!</h2>
            </div>
        </div>
    )
};


---
### Second Try
   const [ word, setWord ] = useState('');

    console.log(useRef(0));
    const handleDragStart = (e) => {
        console.log('dragstart')
        e.dataTransfer.clearData();
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    const handleDragOver = (e) => {
        console.log('dragover');
        e.preventDefault();
        console.log(e.dataTransfer)
        console.log(e.dataTransfer.getData('text'))
        setWord(e.dataTransfer.getData('text'));
    }

    const handleDrop = (e) => {
        
        e.preventDefault();
        console.log('dropzone');
        console.log(e.dataTransfer.getData('text'))
        setWord(e.dataTransfer.getData('text'));
        
    }

    return(
        <div className="fridge">
            <h2>this is the fridge!</h2>
            <ul>
                 {
                userSelection.map((wordObject, index) => {
                    return(
                        <li 
                        id={wordObject['word']}
                        //adding the draggable
                        draggable = "true"
                        
                        onDragStart={(e) => {handleDragStart(e)}}

                        // onClick={(e) => {handleRemoveWord(e.target.textContent)}} 
                        key={`${wordObject['word']}Fridge`}>{wordObject['word']}</li>
                    )
                  })
                }
            </ul>
            <div id='target' onDragEnd={(e) => {handleDrop(e)}} onDragOver={(e) => {handleDragOver(e)}}>
                <h2>drop stuff here!</h2>
                <p>{word}</p>
            </div>
        </div>
    )
};
