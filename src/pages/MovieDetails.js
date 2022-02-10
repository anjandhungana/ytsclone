import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/movie_details.json?movie_id=" + id)
      .then((res) => {
        setMovie(res.data.data["movie"]);
      });
  }, []);



  return (
    <div className="movie-details">
      <div className="image-desc">
        <img src={movie.large_cover_image} alt="" className="detail-image" />

        <div>
          <div className="description">
            <h1>{movie.title}</h1>
            <h2>{movie.year}</h2>
          </div>

          <div>
            Available in: 
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
          <div className="synopsis">
            <h2>Synopsis</h2>
            <p>{movie.description_full}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
