import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loader } from "../components/common/Loader/Loader";
import { APIGetMovieDetails, APIGetMovieSuggestList } from "../API/Movie";
import { MovieSuggestions } from "../components/common/MovieSuggestions";

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const [suggestion, setSuggestion] = useState([]);

  const movieSuggestions = async () => {
    let movieSuggestList = await APIGetMovieSuggestList(id);
    setSuggestion(movieSuggestList.data.data["movies"]);
  };
  useEffect(() => {
    // LoadMovieDetails();
    // movieSuggestions();
    Promise.all([LoadMovieDetails(),movieSuggestions()])
  }, []);

  useEffect(()=>{
    LoadMovieDetails();
    movieSuggestions();
    // Promise.all([LoadMovieDetails(),movieSuggestions()])
  },[id])

  const LoadMovieDetails = async () => {
    let res = await APIGetMovieDetails(id);

    setMovie(res.data.data["movie"]);
  };

  return (
    <>
      {movie.length === 0 ? (
        <Loader />
      ) : (
        <div className="movie-details">
          <div className="image-desc">
            <div>
              <img
                src={movie.large_cover_image}
                alt=""
                className="detail-image"
              />
              <div className="btn">
                <i className="fa fa-download" />
                Download
              </div>
            </div>

            <div className="flex-col">
              <div className="two-columns">
                <div>
                  <div>
                    <div className="description">
                      <h1>{movie.title}</h1>
                      <h2>{movie.year}</h2>
                    </div>

                    <div>
                      Available in:
                      {movie.torrents.map((val, key) => {
                        return (
                          <span className="torrentquality" key={key}>
                            <a href={val.url}> {val.quality} </a>
                          </span>
                        );
                      })}
                    </div>

                    <div className="stats">
                      <div>
                        <i className="fa fa-heart"></i>
                        <h3>{movie.like_count}</h3>
                      </div>
                      <div>
                        <i className="fa fa-download"></i>
                        <h3>{movie.download_count}</h3>
                      </div>
                      <div>
                        <i className="fa fa-star"></i>
                        <h3>{movie.rating}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="movie-suggestion">
                  <h3>Similar Movies</h3>
                  <div className="movie-grid">
                    {suggestion.map((val,key)=>{
                      return <MovieSuggestions cover_image={val.medium_cover_image} id={val.id}/>
                    })}
                  </div>
                </div>
              </div>
              <div className="synopsis">
                <h2>Synopsis</h2>
                <p>{movie.description_full}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
