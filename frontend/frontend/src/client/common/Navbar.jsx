import { Link, NavLink, useNavigate } from "react-router-dom";

import UserContext from "store/context/UserContext";
import { useContext } from "react";
import "./style.css";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      <header className="nav-container">
        <img
          className="logo"
          src="assets/images/logo.png"
          alt="logo"
          width="150px"
        />
        <nav>
          <ul className="nav_links" id="hamburger">
            <li>
              <Link className="nav-links-href" to="/">
                Home
              </Link>
            </li>
            {/* <li>
              <Link className="nav-links-href" to="/predict">
                Predict
              </Link>
            </li> */}
            <li>
              <Link className="nav-links-href" to="/formDetails">
                Details
              </Link>
            </li>
            {user?.role === "user" ? (
              <li className="nav-links-href">
                <Link className="nav-links-href " to="/details">
                <button className="btn btn-primary">{user?.name}</button>
                </Link>
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-links-href">
                <Link className="nav-links-href " to="/login">
                  Signup
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
