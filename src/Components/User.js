import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import firebaseConfig from "../firebase";
import { getDatabase, onValue, ref } from "firebase/database";


const User = () => {
  const { userId } = useParams();
  const [userPoems, setUserPoems] = useState(null);
  const database = getDatabase(firebaseConfig);
  const dbRef = ref(database);


  useEffect(() => {
    onValue(dbRef, (res) => {
      const data = res.val();
      const newState = [];
      for (let key in data) {
        let dataKey = data[key];
        let user = dataKey.user;
        if (user.uid === userId) {
          newState.push({
            key: userId,
            storedPoemHtml: dataKey.storedPoemHtml,
            title: dataKey.title,
            displayName: user.displayName,
          });
        }
      }
      setUserPoems(newState);
    });
  }, [dbRef, userId]);


  return (
    <section className="gallery">
      <div className="cardContainer">
        {
          userPoems ? userPoems.map(({ key, storedPoemHtml, displayName, title }) => {
            return (
              <div className="poemContainer">
                <h3>
                {title ? title : "Untitled"} by { displayName ? displayName : "Anonymous" }
                  </h3>
              <div className="card" key={key}>                
                <ul
                  dangerouslySetInnerHTML={{ __html: storedPoemHtml }}
                  className="galleryPoem"
                  ></ul>
              </div>
                  </div>
            );
          }
          ) : <h3>Thanks for visiting the Gallery. There are no poems currently.</h3>
        }
      </div>
    </section>
  );
};

export default User;