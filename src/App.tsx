import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import appwriteauth from "./appwrite/appWriteAuth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import { Outlet } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    appwriteauth.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }

      setLoading(false);
    });
  }, []);

  return !loading ? (
    <>
      <Header />
      <main>TODO {/* <Outlet />  */}</main>
      <Footer />
    </>
  ) : null;
};

export default App;
