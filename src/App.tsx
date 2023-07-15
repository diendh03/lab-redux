import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Caculate from "./components/Caculate";
import ShowInfo from "./components/ShowInfo";

function App() {
  return (
    <>
      <div className="App">
        <Caculate />
        <ShowInfo />
      </div>
    </>
  );
}

export default App;
