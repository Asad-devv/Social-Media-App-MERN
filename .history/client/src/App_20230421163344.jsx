import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {HomePage,LoginPage,ProfilePage,Navbar} from "./scenes"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Routes>
      <Route />

    </Routes>
      <div></div>
    </>
  );
}

export default App;
