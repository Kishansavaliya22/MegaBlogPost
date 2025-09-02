import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { Rootstate } from "../../store/store";
import { NavLink } from "react-router";
import Logo from "../Logo";
import { Button } from "antd";
import { storeLogout } from "../../store/authSlice";
import appwriteauth from "../../appwrite/appWriteAuth";

const Header = () => {
  const authStatus = useSelector((state: Rootstate) => state.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    dispatch(storeLogout());
    try {
      appwriteauth.logout();
    } catch (error) {
      console.log("Appwrite :: LogoutError :: ", error);
    }

    navigate("/");
  };

  const navItems = [
    {
      name: "Home",
      key: "home",
      location: "/",
      loginstatus: authStatus,
    },
    {
      name: "Login",
      key: "login",
      location: "/login",
      loginstatus: authStatus,
    },
    {
      name: "SignUp",
      key: "signup",
      location: "/signup",
      loginstatus: authStatus,
    },
    {
      name: "BlogPost",
      key: "blogpost",
      location: "/blogpost",
      loginstatus: !authStatus,
    },
    {
      name: "CreateBlog",
      key: "createblog",
      location: "/createblog",
      loginstatus: !authStatus,
    },
  ];

  return (
    <header>
      <nav className="flex flex-row justify-between m-3">
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
                  <li key={items.key}>{items.name}</li>
                </Button>
              ) : null
            )}
          </ul>
        </div>
        <div>
          {authStatus ? (
            <Button type="primary" onClick={() => logoutHandler()}>
              Logout
            </Button>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
