import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { Rootstate } from "../../store/store";
import { NavLink } from "react-router";

const Header = () => {
  const authStatus = useSelector((state: Rootstate) => state.status);
  const navigate = useNavigate();

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
      name: "post",
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
        <div></div>
      </nav>
    </header>
  );
};

export default Header;
