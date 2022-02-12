import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Nav = () => {
  const [keyword, setKeyword] = useState();
  const navigate = useNavigate();

  const keywordHandler = (e) => {
    setKeyword(e.target.value);
    console.log(e.target.value);
  };


  const changeRoute = () => {
    console.log("hello");
    navigate("/search/" + keyword);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        {" "}
        <img
          alt=""
          src="https://yts.mx/assets/images/website/logo-YTS.svg"
        />{" "}
      </Link>
      <div className="nav-right">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Quick Search"
            onChange={keywordHandler}
          />
          <i className="fa fa-search" onClick={changeRoute} />
        </div>
        <Link to="/">Browse Movies</Link>
      </div>
    </nav>
  );
};
