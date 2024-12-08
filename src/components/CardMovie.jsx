import React from 'react';

const CardMovie = ({ movie }) => {

    return (
        <div className='card m-3'  style={{ maxWidth: '22rem' }}>
            <img src={movie.Poster} className='card-img-top' alt={'image '+movie.Title} />
            <div className='card-body'>
                <h5 className='card-title'>{movie.Title}</h5>
                <p className='card-text'>Año: {movie.Year}</p>
                <a href={`https://www.imdb.com/title/${movie.imdbID}/`} target='_blank' rel='noopener noreferrer' className='btn btn-primary'>
                    Ver en IMDb
                </a>
            </div>
        </div>
    );
};

export default CardMovie;