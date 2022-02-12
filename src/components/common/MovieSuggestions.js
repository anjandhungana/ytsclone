import { useState, useEffect } from "react";
import { APIGetMovieSuggestList } from "../../API/Movie";
import { useNavigate, useParams } from "react-router-dom";

export const MovieSuggestions = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
 

  const routeHandler = () => {
    console.log();
    navigate("/movie/" + id);
  };

  
  return (
    <img src={props.cover_image} onClick={routeHandler}/>
  );
};
