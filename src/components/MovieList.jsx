import React from 'react';
import CardMovie from './CardMovie';

const MovieList = ({movies, countResultsTotal}) => {
    if (movies.length === 0) {
        return null;
    }

    return (
        <>
            <div className='row'>
                <p>Resultados totales: {countResultsTotal}</p>
            </div>
            <div className='row'>
                {movies.map((movie) => (
                    <CardMovie key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </>
    );
};

export default MovieList;