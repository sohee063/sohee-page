import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./page/Home";
import Work from "./page/Work/Weather";
import About from "./page/About";
import Navigation from "./component/Navigation";
import { useState } from "react";
import { PuffLoader } from "react-spinners";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {}, []);

  const loadingTime = () => {
    setLoading(false);
  };

  setTimeout(loadingTime, 2000);

  return (
    <div className={loading ? "apploading" : "app"}>
      {loading ? (
        <>
          <PuffLoader color="#fff" loading={loading} size={150} />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Navigation />
        </>
      )}
    </div>
  );
}

export default App;
