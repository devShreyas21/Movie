import './App.css';
import Navbar from './components/navbar/Navbar';
import Movie from './components/movie/Movie';
// import Read from './components/read/Read.js';
import ReadArticle from './components/ReadArticle/ReadArticle.js';
import Booking from './components/Booking/Booking.js';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (


    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Movie />} />
          <Route exact path='/read' element={<ReadArticle/>} />
          <Route exact path='/booking' element={<Booking/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
