
// import logo from "../assets/logo.jpeg";
// import fridge from "../assets/fridgeimgc.png";

import firebaseConfig from '../firebase';
import { getDatabase, ref, push } from "firebase/database";

import { useEffect, useState, useLayoutEffect, useRef } from "react";

import SelectedWords from "./SelectedWords";

const Fridge = ({ userSelection, handleRemoveWord }) => {

  const fridgeRef = useRef(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const [widthArray, setWidthArray ] = useState([]);
  const [heightArray, setHeightArray] = useState([])

  useLayoutEffect(() => {
    setWidth(fridgeRef.current.clientWidth); //offsetWidth includes borders, padding, vertical scrollbars, clientWidth includes padding but exclude borders, margins, scrollbars
    setHeight(fridgeRef.current.clientHeight);
    console.log(document.querySelector("#wordContainer").getBoundingClientRect());
  }, []);  

  const handleGetWordDimensions = (width, height) => {
    const newWidthArray = widthArray.map(x => x);
    const newHeightArray = heightArray.map(x => x);
    newWidthArray.push(width);
    newHeightArray.push(height);
    setWidthArray(newWidthArray);
    setHeightArray(newHeightArray);
    console.log(widthArray, heightArray, 'handlegetwords');
  }

  // useEffect(() => {
  //   document.querySelector("#wordContainer").style.height = 100;
  //   document.querySelector("#wordContainer").style.height = width;
  //   console.log(document.querySelector("#wordContainer").style);
  // }, [height, width])
  

  // const userSelectionArr = userSelection.map((wordObject) => {
  //     return wordObject.word;
  // });

  const uid = () => {
    return `poet-${Date.now().toString(36)}${Math.random().toString(36).substring(2)}`;
  };
  const [userId, setUserId] = useState(localStorage.getItem("poetUserId"));
  useEffect(() => {
    if (!localStorage.getItem("poetUserId")) {
      const userId = uid();
      localStorage.setItem("poetUserId", userId);
    }
    setUserId(localStorage.getItem("poetUserId"));
  }, []);

  const [poemHtml, setPoemHtml] = useState("");
  const [displayName, setDisplayName] = useState("Anonymous");
  const [title, setTitle] = useState("Untitled");
  const handleChange = () => {
    if (userSelection.length > 0) {
      const poem = document.querySelector(".poem");
      setPoemHtml(poem.innerHTML);
      alert("Poem saved to your fridge!");
    } else {
      setPoemHtml("");
      alert("You have no poem to save!");
    }
  };

    const database = getDatabase(firebaseConfig)
    const dbRef = ref(database)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (poemHtml !== "") {
          const obj = {
            key: userId,
            storedPoemHtml: poemHtml,
            title: title,
            user: {
              uid: userId,
              displayName: displayName,
            },
            timestamp: Date.now(),
          };
          push(dbRef, obj);
          alert("Your poem has been added to the gallery!");
        } else {
          alert("Please save your poem before submitting!");
        }
      };

  const handleUserInput = (e) => {
      setDisplayName(e.target.value);
  };
  const handleTitleInput = (e) => {
      setTitle(e.target.value);
  };

  return (
    <section className='fridge' ref={fridgeRef}>
      <div>
        width={width}
        height={height}
      </div>
      <h2>this is the fridge! User must Save to setPoem first, then they can submit to Gallery</h2>
      <ul className='poem words' id='wordContainer' style={{ 
                width: `${width}px`,
                height: `${height}px`,
            }}>
        {
          userSelection.map((item, index) => {
              return(
                <SelectedWords 
                key={item.word}
                index={index}
                handleRemoveWord={handleRemoveWord} 
                item={item}
                width={width}
                height={height}
                fridgeRef={fridgeRef}
                handleGetWordDimensions={handleGetWordDimensions}
                widthArray={widthArray}
                heightArray={heightArray}/>
              )
          })
        }
      </ul>
      <div className='btnContainer'>
        <button onClick={handleChange}>Save Your Poem</button>
        {/* add input text to update display name */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="displayName">Enter a Display Name:</label>
          <input
            type="text"
            id="displayName"
            placeholder='"Anonymous"'
            value={displayName}
            onChange={handleUserInput}
          />
          <label htmlFor="title">Enter a Title:</label>
          <input
            type="text"
            id="title"
            placeholder='"Untitled"'
            value={title}
            onChange={handleTitleInput}
          />
        <button onClick={handleSubmit} type="submit">Add Saved Poem to Gallery</button>
        </form>
      </div>
    </section>  
  );

};

export default Fridge;