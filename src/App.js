import React from "react";
import Roguelike from "./Roguelike";

const App = () => (
  <div className="App">
    <Roguelike width={40} height={40} tileSize={16} />
  </div>
);

export default App;
