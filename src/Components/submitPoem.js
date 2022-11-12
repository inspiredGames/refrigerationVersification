// move submit button to a new component


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


    const [newPoem, setNewPoem] = useState("");
    const database = getDatabase(firebaseConfig)
    const dbRef = ref(database)
    const handleSubmit = (e) => {
      console.log("submitting");
        e.preventDefault();
        if (poemString !== "") {
          const obj = {
            key: userId,
            poemString: poemString,
            user: {
              uid: userId,
            },
          };
          push(dbRef, obj);
          alert("Your poem has been added to the gallery!");
          //TODO:route user to gallery
        } else {
          alert("Please add a poem to the fridge before submitting!");
        }
      };


      // create a function that will take the userSelectionArr and turn it into a string and store it in a variable to push to the database
      const poemString = userSelectionArr.join(" ");

  return (
    <section className='fridge'>
      <h2>this is the fridge!</h2>
      <ul>
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
      <ul>
      <button 
      style={{margin: '-20vh 0'}}
      onClick={handleSubmit}
      type="submit">Submit</button>
      </ul>
    </section>  
  );
};

export default Fridge;