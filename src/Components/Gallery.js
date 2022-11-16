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
      <h2>Welcome to the Gallery</h2>
      <div className='construction'>
          🚧 Under Construction! Upcoming feature - stay tuned to publish your poem to the Gallery! 🚧
      </div>
      <div className="cardContainer">     
        {
        poems.length > 0 ? poems.map(({ key, storedPoemHtml, displayName, userId, title }) => {
          return ( 
            <div className='poemContainer' key={`${key}${displayName}`}>
              <h3>
                {title ? title : "Untitled"} by <Link to={`/rv/${userId}`}> { displayName ? displayName : "Anonymous" }  </Link>
              </h3>
              <div className="card">
                <ul
                  dangerouslySetInnerHTML={{__html: storedPoemHtml}}
                  className="galleryPoem">
                  
                </ul>
              </div>
            </div>
            );
          }) : <h3>Thanks for visiting the Gallery. There are no poems currently.</h3>
        }
      </div>
    </section>
  );
};

export default Gallery;