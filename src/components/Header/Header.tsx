import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { Rootstate } from "../../store/store";
import { NavLink } from "react-router";
import Logo from "../Logo";
import Button from "../Button";
import { logout } from "../../store/authSlice";

const Header = () => {
  const authStatus = useSelector((state: Rootstate) => state.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const navItems = [
    {
      name: "Home",
      location: "/",
      loginstatus: authStatus,
    },
    {
      name: "Login",
      location: "/login",
      loginstatus: authStatus,
    },
    {
      name: "SignUp",
      location: "/signup",
      loginstatus: authStatus,
    },
    {
      name: "BlogList",
      location: "/bloglist",
      loginstatus: !authStatus,
    },
    {
      name: "Post",
      location: "/post",
      loginstatus: !authStatus,
    },
  ];

  return (
    <header>
      <nav>
        <div>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div>
          <ul>
            {navItems.map((items) =>
              !items.loginstatus ? (
                <button onClick={() => navigate(items.location)}>
                  <li key={items.name}>{items.name}</li>
                </button>
              ) : null
            )}
          </ul>
        </div>
        <div>
          {authStatus ? (
            <Button
              btnText="Logout"
              type="button"
              onClick={() => logoutHandler()}
            />
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
