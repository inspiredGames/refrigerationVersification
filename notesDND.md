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
