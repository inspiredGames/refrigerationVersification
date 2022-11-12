// FIXME:
// extra code from dnd added bounds
    // // get fridge by id
    // const fridge = document.getElementById('fridge');
    // //add id to fridge in jsx
    // //get fridgePosition
    // const fridgePosition = fridge.getBoundingClientRect();


//TODO:

//on Fridge.js Component
  //onClick publish to gallery
    //each user will be assigned a uid
    //push user's Fridge.js poem to firebase database
    //route user to gallery to view their poem with other stored poems in gallery
  //STRETCH STRETCH GOAL user can update their UID to a unique display name 


  //figure out how to capture an image of the poem and store it in the database
  //figure out how to store the poems in the database
  //figure out how to retrieve the poems from the database
  //figure out how to display the poems on the gallery page

  //return()
    //section.gallery
    //ul
      //write ternary operator to if there are poems
      //than map the poems and return poems as li's
        //each li can have a div for stored poem
        //**** POEM STRING WOULD MOST LIKELY BE BROKEN DOWN TO INDIVIDUAL WORDS TO DISPLAY THE POEM AS MAGNETS */
          //OR STRUCTURE THE FIREBASE DATA TO STORE THE HTML FROM EACH FRIDGE POEM

import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [poems, setPoems] = useState([]);
  const database = getDatabase(firebaseConfig)
  const dbRef = ref(database)

  useEffect(() => {
    onValue(dbRef, (res) => {
      const data = res.val();
      const newState = [];
      for (let key in data) {
        let dataKey = data[key];
        newState.push({
          key: key,
          poem: dataKey.poem,
        });
      }
      setPoems(newState);
    });
  }, []);

  return (
    <div className="gallery">
      <h2>Beautiful Gallery</h2>
      <ul>
        {poems.length > 0 ? poems.map((poem) => {
          return (
            <li key={poem.key}>
              <div className="galleryPoem">
                <p>{poem.poem}</p>
              </div>
            </li>
          );
        }) : <p>There are no poems in the gallery</p>}
      </ul>
    </div>
  );
};

export default Gallery;







// we might need to use ... and .join()