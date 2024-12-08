import React from 'react';
import MovieList from 'components/MovieList';
import MovieListHeading from 'components/MovieListHeading';
import BtnSearch from 'components/BtnSearch';
import Loader from 'components/Loader';
import useMovies from 'hooks/useMovies';
import Filters from 'components/Filters';

import './Home.css';

const Home = () => {
    const { loading, movies, title, setTitle, year, setYear, type, setType,
            fetchMovies, fetchMoviesByPage, countResultsTotal, currentPage, setCurrentPage } = useMovies('cars');

    const handleSearchClick = () => {
        setCurrentPage(1);
        fetchMovies(title, year, type);
    };

    return (
        <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies HP - Prueba Tecnica' />
            </div>
            <header className="py-3 mb-3 border-bottom">
                <div className="container-fluid d-grid gap-3 align-items-center">
                    <div className="d-flex align-items-center justify-content-start">
                        <Filters
                            title={title}
                            setTitle={setTitle}
                            year={year}
                            setYear={setYear}
                            type={type}
                            setType={setType}
                        />
                        <BtnSearch onClick={handleSearchClick} />
                    </div>
                </div>
            </header>
            {loading ? (
                <div className='d-flex justify-content-center'>
                    <Loader />
                </div>
            ) : (
                <MovieList movies={movies} countResultsTotal={countResultsTotal} fetchMoviesByPage={fetchMoviesByPage} currentPage={currentPage} />
            )}
        </div>
    );
};

export default Home;