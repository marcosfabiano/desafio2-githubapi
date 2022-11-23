import { Link } from "react-router-dom";

import './styles.css';

const Header = () => {
  return (
    <nav className="navbar main-nav">
      <Link to="/" className="nav-logo-text">
        <h4>Github API</h4>
      </Link>
    </nav>
  );
};

export default Header;
