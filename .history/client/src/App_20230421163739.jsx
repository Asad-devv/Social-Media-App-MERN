import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {HomePage,LoginPage,ProfilePage,Navbar} from "./scenes"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/" element={<LoginPage/>}/>
    </Routes>
      <div><h1>Hello</h1></div>
    </>
  );
}

export default App;
