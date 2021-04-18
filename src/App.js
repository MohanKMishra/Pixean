import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navigation/Navigation";
import Portfolio from "./components/portfolio/Portfolio";
import Sliding from "./components/Sliding";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Portfolio />
      <Sliding />
    </div>
  );
};

export default App;
