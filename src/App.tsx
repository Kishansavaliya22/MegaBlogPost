import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import appwriteauth from "./appwrite/appWriteAuth";
import { storeLogin, storeLogout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    appwriteauth.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(storeLogin(userData));
      } else {
        dispatch(storeLogout());
      }

      setLoading(false);
    });
  });

  return !loading ? (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  ) : null;
};

export default App;
