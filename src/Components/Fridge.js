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
  const database = getDatabase(firebaseConfig)
  const dbRef = ref(database)

  const handleSubmit = (e) => {
    e.preventDefault();
    const poem = document.querySelector(".poem");
    setPoemHtml(poem.innerHTML);
    if (poemHtml !== "") {
      const obj = {
        key: userId,
        storedPoemHtml: poemHtml,
        user: {
          uid: userId,
        },
      };
      push(dbRef, obj);
      alert("Your poem has been added to the gallery!");
    } else {
      alert("Please add a poem to the fridge before submitting!");
    }
  };


  return (
    <section className='fridge'>
      <h2>this is the fridge!</h2>
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
      <button 
      onClick={handleSubmit}
      type="submit">Submit</button>
    </section>  
  );
};

export default Fridge;