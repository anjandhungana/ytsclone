import { useNavigate } from "react-router-dom";

export const MovieCard = (props) => {
  const navigate = useNavigate();
  const routeHandler = () => {
    navigate("/movie/" + props.movie.id);
  };

  return (
    <div className="movie-card" onClick={routeHandler}>
      <div className="image-container">
        <img
          alt=""
          className="movie-image"
          src={props.movie.medium_cover_image}
        />
        <div className="img-overlay">
          <div className="overlay-inside-wrapper">
            <i className="fa fa-star" />
            <h1>{props.movie.rating}/10</h1>
            {props.movie.genres.map((genre, key) => {
              if (key<3){
                return <h2 key={key}>{genre}</h2>;
              }
              else{
                return null
              }
            })}
            <div className="detail-btn">View Details</div>
          </div>
        </div>
      </div>
      <div className="movie-name-year">
        <p className="movie-title">{props.movie.title}</p>
        <p>{props.movie.year}</p>
      </div>
    </div>
  );
};
