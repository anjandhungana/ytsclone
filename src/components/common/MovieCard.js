import { useNavigate } from "react-router-dom";

export const MovieCard = (props) =>{ 
    
        const navigate = useNavigate();
        const routeHandler  = () =>{
            navigate ('/movie/'+ props.movie.id)
        }
    
    return (
    <div className="movie-card" onClick={routeHandler}>
        <img alt="" className="movie-image" src={props.movie.medium_cover_image}/>
        <div className="movie-name-year">
            <p className="movie-title">{props.movie.title}</p>
            <p>{props.movie.year}</p> 
        </div>
    </div>
    );
}