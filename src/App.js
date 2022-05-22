import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { constants } from "./constants";
import { MainPage } from "./pages/MainPage";
import { RepositoriesNotFound } from "./pages/RepositoriesNotFound";
import { UserNotFound } from "./pages/UserNotFound";
import { apiRequest } from "./Utils/api";

function App() {
  const [isLoader, setIsLoader] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userRepositories, setUserRepositories] = useState(null);
  const navigate = useNavigate();

  const loaderHandler = (isLoader) => {
    setIsLoader(isLoader);
  };

  const getRepositories = async (username, page) => {
    try {
      loaderHandler(true);
      const resp = await apiRequest(username + "/repos", {
        page,
        per_page: constants.PageLimit,
      });
      setUserRepositories(resp);
    } catch {
      setUserRepositories(null);
    }
    loaderHandler(false);
  };

  const getUserData = async (username) => {
    try {
      loaderHandler(true);
      const resp = await apiRequest(username);
      setUserData(resp);
      getRepositories(resp.login, 1);
    } catch {
      setUserData(null);
    }
    loaderHandler(false);
  };

  useEffect(() => {
    if (!userData) {
      navigate("/user-not-found");
    } else {
      navigate("/");
    }
  }, [navigate, userData]);

  return (
    <div className="app-wrapper">
      <Loader isLoader={isLoader} />
      <Header getUserData={getUserData} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                userData={userData}
                userRepositories={userRepositories}
                getRepositories={getRepositories}
              />
            }
          />
          <Route path="/user-not-found" element={<UserNotFound />} />
          <Route
            path="/repositories-not-found"
            element={<RepositoriesNotFound userData={userData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
