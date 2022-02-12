import { useState } from "react";
import { useEffect } from "react";
import { APIGetTopMovies } from "../API/Movie";
import { Loader } from "../components/common/Loader/Loader";
import { MovieCard } from "../components/common/MovieCard";
import { BaseURL } from "../config/baseURL";

export const Landing = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    await LoadMovies();
  }, []);

  const LoadMovies = async () => {
    let res = await APIGetTopMovies();
    setMovies([...res.data.data["movies"]]);
  };

  return (
    <section className="wrapper">
      <h1 className="title">Movies List</h1>
      <div className="movie-content">
        {movies.length===0 ? <Loader/> : 
        movies.map((movie, key) => (
          <MovieCard key={key} movie={movie} />
        )) }
      </div>
    </section>
  );
};
