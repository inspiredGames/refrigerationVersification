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



// Galley.js 
// create firebase.js
  //- link firebase and config

// create firebase project and realtime database
  //decide on how we'd like to structure our data and how to store the poems
  
  // create variables
    //state variable
      // const [poems, setPoems] = useState([]);
  //variable to hold database
    // const database = getDatabase(firebaseConfig)
  //variable to hold the database reference
  // const dbRef = ref(database)

// render thoughts from firebase
  // useEffect()
    //get values from firebase
    //create a newState array variable to push the firebase data into as an object
    //loop thru data
    //setPoems(newState);

  //return()
    //section.gallery
    //ul
      //write ternary operator to if there are poems
      //than map the poems and return poems as li's
        //each li can have a div for stored poem
        //**** POEM STRING WOULD MOST LIKELY BE BROKEN DOWN TO INDIVIDUAL WORDS TO DISPLAY THE POEM AS MAGNETS */
          //OR STRUCTURE THE FIREBASE DATA TO STORE THE HTML FROM EACH FRIDGE POEM

  // we might need to use ... and .join()
    

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Beautiful Gallery</h2>
    </div>
  );
};

export default Gallery;