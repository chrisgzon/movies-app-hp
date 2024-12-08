import { useState, useEffect } from 'react';
import { getMovies } from 'services/searchMovies';
import Swal from 'sweetalert2';

const useMovies = (initialSearchValue) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [countResultsTotal, setCountResultsTotal] = useState(0);
    const [searchValue, setSearchValue] = useState(initialSearchValue);

    const fetchMovies = async (searchValue) => {

        setLoading(true);
        const response = await getMovies(searchValue);
        setLoading(false);

        if (response.Response === 'False') {
            setMovies([]);
            setCountResultsTotal(0);
            Swal.fire({
                icon: 'error',
                title: 'No movies found',
                text: response.Error,
            });
            return;
        }
        
        setMovies(response.Search);
        setCountResultsTotal(response.totalResults);
    };

    // se podria agregar el searchValue como dependencia para que se ejecute cada vez que cambie
    // no se realiza en este caso ya que el boton de busqueda no tendria sentido
    useEffect(() => {
        fetchMovies(searchValue);
    }, []);

    return { movies, countResultsTotal, searchValue, setSearchValue, fetchMovies, loading };
};

export default useMovies;