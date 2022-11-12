//************************* */
// SEE STYLES: CURRENTLY IN THE baseStyles partial
// ************************* */


import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [poems, setPoems] = useState([]);
  const database = getDatabase(firebaseConfig);
  const dbRef = ref(database);

  useEffect(() => {
    onValue(dbRef, (res) => {
      const data = res.val();
      const newState = [];
      for (let key in data) {
        let dataKey = data[key];
        newState.push({
          key: key,
          // poemString: dataKey.poemString,
          storedPoemHtml: dataKey.storedPoemHtml,
        });
      }
      setPoems(newState);
    });
  }, [dbRef]);

  return (
    <section className="gallery">
      <h2>Beautiful Gallery</h2>
      <div className="cardContainer">     
        {
        poems.length > 0 ? poems.map(({ key, storedPoemHtml }) => {
          return (
            <div className="card" key={key}>
              <ul 
                dangerouslySetInnerHTML={{__html: storedPoemHtml}}
                className="galleryPoem"></ul>
        </div>
            );
          }) : <p>There are no poems in the gallery</p>
          }

        {/* SIMULATED POEM CARD WITH THE SAME LI POSITIONS 
          ADDED FLEXBOX TO CARD CONTAINER TO DISPLAY CARDS IN A ROW */}
{/* 
      <div className="card">
              <ul>
        <li style={{
          top: "115px", 
          left: "-50px",
          touchAction: "none", 
        }}>
          <p>give</p>
        </li>
        <li style={{
          top: "79px", 
          left: "27px"
        }}>
          <p>springtime</p>
        </li>
        <li style={{
          top: "46px", 
          left: "-108px",
          touchAction: "none",
        }}>
          <p>arise</p>
        </li>
      </ul>
      </div> */}
      </div>
    </section>
  );
};

export default Gallery;







// we might need to use ... and .join()