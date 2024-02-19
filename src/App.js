import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div className="App">
      <h1 className="heading">RANDOM GIFS</h1>
      <div className="container">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
