import { Route, Routes } from "react-router-dom";
import "./App.css";
import  { Header } from "./components/Header";
import { MainPage } from "./pages/MainPage";
import { RepositoriesNotFound } from "./pages/RepositoriesNotFound";
import { UserNotFound } from "./pages/UserNotFound";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user-not-found" element={<UserNotFound />} />
          <Route path="/repositories-not-found" element={<RepositoriesNotFound/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
