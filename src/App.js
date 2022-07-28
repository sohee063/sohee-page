import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Work from "./page/Work";
import About from "./page/About";
import Main from "./page/Main";
import Navigation from "./component/Navigation";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";

function App() {
  const [loading, setLoading] = useState(true);

  const loadingTime = () => {
    setLoading(false);
  };

  setTimeout(loadingTime, 2000);

  return (
    <>
      <div className={loading ? "apploading" : "app"}>
        {loading ? (
          <>
            <PuffLoader color="#2C3333" loading={loading} size={150} />
          </>
        ) : (
          <>
            <Navbar>
              <Navigation />
            </Navbar>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </>
        )}
      </div>
    </>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 1rem;
  z-index: 1;
`;

export default App;
