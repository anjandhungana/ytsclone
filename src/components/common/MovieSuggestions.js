import { useNavigate, useParams } from "react-router-dom";

export const MovieSuggestions = (props) => {
  const navigate = useNavigate();
  const routeHandler = () => {
    console.log(props)
    navigate("/movie/" + props.id);
  }; 

  return (
    <img src={props.cover_image} onClick={routeHandler}/>
  );
};
