//Version 2, ability to add a input text field to submit a poem to the gallery.



import firebaseConfig from '../firebase';
import { getDatabase, ref, push } from "firebase/database";
import { useEffect } from "react";
import { useState } from "react";



import SelectedWords from "./SelectedWords";

const Fridge = ({ userSelection }) => {

    // map over the userSelection array and return a list of words
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
    // const [displayName, setDisplayName] = useState("");
    const database = getDatabase(firebaseConfig)
    const dbRef = ref(database)
    const handleSubmit = (e) => {
      console.log("submitting");
        e.preventDefault();
        // push the new poem to the database
        if (newPoem !== "") {
          const obj = {
            key: userId,
            poem: newPoem,
            user: {
              uid: userId,
              // displayName: displayName,
            },
          };
          push(dbRef, obj);
          setNewPoem("");
          alert("Your poem has been added to the gallery!");
          //TODO:route user to gallery
        } else {
          alert("Please add a poem to the fridge before submitting!");
        }
      };

      const onChange = (e) => {
        // setDisplayName(e.target.value);
        setNewPoem(e.target.value);
      };


  return (
    <section className='fridge'>
        <h2>this is the fridge!</h2>
        <ul>
          {
            userSelectionArr.map((item) => {
                return(
                  <SelectedWords 
                  key={item} 
                  // value={newPoem}
                  // onChange={onChange}
                  item={item}/>
                )
            })
          }
        </ul>
        {/* create an input that the value will be pushed to firebase */}
        <form>
          <input
            type="text"
            value={newPoem}
            onChange={onChange}
            placeholder="Add your display name here"
          />
      {/* create a button that will submit the userSelectionArr */}
        <button 
        style={{margin: '-20vh 0'}}
        onClick={handleSubmit}
        type="submit">Submit</button>
        </form>
    </section>  
  );
};

export default Fridge;