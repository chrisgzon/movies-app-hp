import { useState, useEffect } from "react";
import { getMovies } from "services/searchMovies";
import Swal from "sweetalert2";

const useMovies = (initialTitleValue) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [countResultsTotal, setCountResultsTotal] = useState(0);
  const [title, setTitle] = useState(initialTitleValue);
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMovies = async (title, year, type, page = 1) => {
    if (!title.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Titulo es requerido",
        text: "Por favor, ingrese un título de película para buscar.",
      });
      return;
    }

    setLoading(true);
    const response = await getMovies(title, year, type, page);
    setLoading(false);

    if (response.Response === "False") {
      setMovies([]);
      setCountResultsTotal(0);
      Swal.fire({
        icon: "error",
        title: "No movies found",
        text: response.Error,
      });
      return;
    }

    setMovies(response.Search);
    setCountResultsTotal(response.totalResults);
  };

  const fetchMoviesByPage = (page) => {
    setCurrentPage(page);
    fetchMovies(title, year, type, page);
  };

  // se podria agregar el searchValue como dependencia para que se ejecute cada vez que cambie
  // no se realiza en este caso ya que el boton de busqueda no tendria sentido
  useEffect(() => {
    fetchMovies(title, year, type);
  }, []);

  return {
    movies,
    countResultsTotal,
    title,
    setTitle,
    year,
    setYear,
    type,
    setType,
    fetchMovies,
    fetchMoviesByPage,
    loading,
    currentPage,
    setCurrentPage,
  };
};

export default useMovies;
