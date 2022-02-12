import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIGetSearchMovieDetails } from "../API/Movie";
import { Loader } from "../components/common/Loader/Loader";
import { MovieCard } from "../components/common/MovieCard";

export const Search = () => {
  const { keyword } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    await loadMovies();
  }, [keyword]);

  const loadMovies = async () => {
    setLoading(true);
    let res = await APIGetSearchMovieDetails(keyword);
    setMovies(res.data.data.movies ?? []);
    setLoading(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <section className="wrapper">
        <h1 className="title">
          Found {movies.length} results for{" "}
          <span style={{ fontStyle: "italic" }}>{keyword}</span>
        </h1>
        <div className="movie-content">
          {movies.map((movie, key) => (
            <MovieCard key={key} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};
