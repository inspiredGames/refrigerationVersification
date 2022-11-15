import './App.scss';
import Main from './Components/Main';
import {
  Routes,
  Route
} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Gallery from './Components/Gallery';
import About from './Components/About';
import User from './Components/User';
import ErrorPage from './Components/ErrorPage';

function App() {

  return (

    <main className="wrapper">

  
      <NavBar />

      <header>
        <h1><div className="title title1">Refrigeration</div> 
        <div className="title">Versification</div></h1>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/rv/:userId" element={<User />} />
        <Route path="*" element={<ErrorPage />} />        

      </Routes>


      <footer>
        <p>Copyright © 2022 <a href="https://junocollege.com/">Juno College</a></p>
      </footer>
      
    </main>
  );
}

export default App;
