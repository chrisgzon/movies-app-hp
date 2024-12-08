import React from 'react';
import MovieList from 'components/MovieList';
import MovieListHeading from 'components/MovieListHeading';
import SearchBox from 'components/SearchBox';
import useMovies from 'hooks/useMovies';
import BtnSearch from 'components/BtnSearch';

// styles
import './Home.css';
import Loader from 'components/Loader';

const Home = () => {
  const { loading, movies, searchValue, setSearchValue, fetchMovies, countResultsTotal } = useMovies('cars');

  const handleSearchClick = () => {
      fetchMovies(searchValue);
  };

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies HP - Prueba Tecnica' />
      </div>
      <header className="py-3 mb-3 border-bottom">
        <div className="container-fluid d-grid gap-3 align-items-center">
          <div className="d-flex align-items-center">
            <div className="w-100 me-3">
              <SearchBox label='Titulo' searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
              <BtnSearch onClick={handleSearchClick} />
          </div>
        </div>
      </header>
      {loading ? (
        <div className='d-flex justify-content-center'>
          <Loader />
        </div>
      ) : (
        <MovieList movies={movies} countResultsTotal={countResultsTotal} />
      )}
    </div>
  );
};

export default Home;