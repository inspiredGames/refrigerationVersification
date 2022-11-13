import firebaseConfig from '../firebase';
import { getDatabase, ref, push } from "firebase/database";

import { useEffect, useState } from "react";

import SelectedWords from "./SelectedWords";

const Fridge = ({ userSelection, handleRemoveWord }) => {

    const userSelectionArr = userSelection.map((wordObject) => {
        return wordObject.word;
    });

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
    <section className='fridge'>
      <h2>this is the fridge! User must Save to setPoem first, then they can submit to Gallery</h2>
      <ul className='poem'>
        {
          userSelectionArr.map((item) => {
              return(
                <SelectedWords 
                key={item}
                handleRemoveWord={handleRemoveWord} 
                item={item}/>
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