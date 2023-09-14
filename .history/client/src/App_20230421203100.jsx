import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {HomePage,LoginPage,ProfilePage,Navbar} from "./scenes"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state)=>state.auth.mode)
  console.log(mode)
  const [count, setCount] = useState(0);

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/profile/:userId" element={<ProfilePage/>}/>
    </Routes>
      <div><h1>Hello</h1></div>
    </>
  );
}

export default App;
