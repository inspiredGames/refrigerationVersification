import firebaseConfig from '../firebase';
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        let user = dataKey.user;
        newState.push({
          key: key,
          storedPoemHtml: dataKey.storedPoemHtml,
          title: dataKey.title,
          userId: user.uid,
          displayName: user.displayName,
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
        poems.length > 0 ? poems.map(({ key, storedPoemHtml, displayName, userId, title }) => {
          return ( 
            <>
              <h2>
                {title ? title : "Untitled"} by <Link to={`/rv/${userId}`}> { displayName ? displayName : "Anonymous" }  </Link>
                </h2>
            <div className="card" key={key}>
              <ul 
                dangerouslySetInnerHTML={{__html: storedPoemHtml}}
                className="galleryPoem"></ul>
        </div>
            </>
            );
          }) : <p>There are no poems in the gallery</p>
          }
      </div>
    </section>
  );
};

export default Gallery;