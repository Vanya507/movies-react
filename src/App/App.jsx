import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from '../components/pages/MainPage';
import MovieInfoAndCast from '../components/pages/MovieInfoAndCast';
import SearchedMovies from '../components/pages/SearhedMovies';
import ActorInfoAndMovies from '../components/pages/ActorInfoAndMovies';

import '../styles/reset.scss'
import '../styles/style.scss'

const App = () => {
    return (
      <Router basename='/movies-react/'>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/movieInfoAndCast" element={<MovieInfoAndCast />} />
          <Route path ="/searchedMoviesList" element={<SearchedMovies />}/>
          <Route path ="/actorInfo" element={<ActorInfoAndMovies />}/>
        </Routes>
      </Router>
    );
  };

export default App;