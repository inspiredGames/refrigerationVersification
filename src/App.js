import './App.scss';
import Main from './Components/Main';
import {
  Routes,
  Route
} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Gallery from './Components/Gallery';
import About from './Components/About';

function App() {

  return (

    <main className="wrapper">

  
      <NavBar />

      <header>
        <h1>Refrigeration Versification</h1>
      </header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>


      <footer>
        <p>Copyright © 2022 <a href="https://junocollege.com/">Juno College</a></p>
      </footer>
      
    </main>
  );
}

export default App;
