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
      </div>
    </section>
  );
};

export default Gallery;