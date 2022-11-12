import firebaseConfig from '../firebase';
import { getDatabase, ref, push } from "firebase/database";

import { useEffect, useState } from "react";

import SelectedWords from "./SelectedWords";

const Fridge = ({ userSelection }) => {

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
  const onChange = () => {
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
            user: {
              uid: userId,
            },
            timestamp: Date.now(),
          };
          push(dbRef, obj);
          alert("Your poem has been added to the gallery!");
        } else {
          alert("Please save your poem before submitting!");
        }
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
                item={item}/>
              )
          })
        }
      </ul>
      <div className='btnContainer'>
        <button onClick={onChange}>Save Your Poem</button>
        <button onClick={handleSubmit} type="submit">Add Saved Poem to Gallery</button>
      </div>
    </section>  
  );
};

export default Fridge;