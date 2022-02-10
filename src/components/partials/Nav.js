import { Link } from "react-router-dom";

export const Nav = () => {
  return <nav className="navbar">
     <Link to ="/"> <img alt="" src="https://yts.mx/assets/images/website/logo-YTS.svg" /> </Link>
      <div className="nav-right">
      <div className="searchbar">
          <i className="fa fa-search"/>
          <input type='text' placeholder="Quick Search"/>
      </div>
      <Link to ="/">Browse Movies</Link>
      </div>
  </nav>
};

