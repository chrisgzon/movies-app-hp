import React from "react";
import CardMovie from "components/CardMovie";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

const MovieList = ({
  movies,
  countResultsTotal,
  fetchMoviesByPage,
  currentPage,
}) => {
  const moviesPerPage = 10;
  const totalPages = Math.ceil(countResultsTotal / moviesPerPage);

  if (movies.length === 0) {
    return null;
  }

  return (
    <>
      <div className="row">
        <p>Resultados totales: {countResultsTotal}</p>
      </div>
      <div className="row">
        {movies.map((movie) => (
          <CardMovie key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <MDBPagination className="mb-4 pagination">
        <MDBPaginationItem disabled={currentPage === 1}>
          <MDBPaginationLink
            onClick={() => fetchMoviesByPage(currentPage - 1)}
            tabIndex={-1}
            aria-disabled="true"
          >
            Anterior
          </MDBPaginationLink>
        </MDBPaginationItem>
        {[...Array(totalPages)].map((_, index) => (
          <MDBPaginationItem active={index + 1 === currentPage} key={index}>
            <MDBPaginationLink onClick={() => fetchMoviesByPage(index + 1)}>
              {index + 1}
            </MDBPaginationLink>
          </MDBPaginationItem>
        ))}
        <MDBPaginationItem disabled={currentPage === totalPages}>
          <MDBPaginationLink onClick={() => fetchMoviesByPage(currentPage + 1)}>
            Siguiente
          </MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </>
  );
};

export default MovieList;
