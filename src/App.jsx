import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./components/News";

const App = () => {
  const pageSize = 5;
  const apiKey = "71bcb3b880854d56a63d072a52de7d28";
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
