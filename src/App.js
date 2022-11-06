import './App.scss';
import Main from './Main';
import {
  Routes,
  Route
} from 'react-router-dom';
import NavBar from './NavBar';
import Gallery from './Gallery';
import About from './About';

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
