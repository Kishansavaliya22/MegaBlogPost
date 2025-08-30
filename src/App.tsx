import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import appwriteauth from "./appwrite/appWriteAuth";
import { storeLogin, storeLogout } from "./store/authSlice";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
    </Route>
  )
);
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

  return !loading ? <RouterProvider router={router} /> : null;
};

export default App;
