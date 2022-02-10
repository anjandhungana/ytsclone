import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { MovieCard } from "../components/common/MovieCard";
export const Landing = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("https://yts.mx/api/v2/list_movies.json").then((res) => {
      setMovies([...res.data.data["movies"]]);
    });
  }, []);



  return (
    <section className="wrapper">
      <h1>Movies List</h1>
      <div className="movie-content">
        {movies.map((movie,key) => (
          <MovieCard key={key}  movie={movie} />
        ))}
      </div>
    </section>
  );
};
