import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { Rootstate } from "../../store/store";
import { NavLink } from "react-router";
import Logo from "../Logo";
import { Button } from "antd";
import { storeLogout } from "../../store/authSlice";

const Header = () => {
  const authStatus = useSelector((state: Rootstate) => state.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(storeLogout());
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
                <Button type="text" onClick={() => navigate(items.location)}>
                  <li key={items.name}>{items.name}</li>
                </Button>
              ) : null
            )}
          </ul>
        </div>
        <div>
          {authStatus ? (
            <Button type="primary" onClick={() => logoutHandler()} />
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
