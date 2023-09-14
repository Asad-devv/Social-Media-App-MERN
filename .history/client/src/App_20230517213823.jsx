import { useState } from "react";
import "./App.css";
import { Route, Routes ,Navigate ,BrowserRouter} from "react-router-dom";
import {HomePage,LoginPage,ProfilePage,Navbar} from "./scenes"
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import Loading

function App() {
  const mode = useSelector((state)=>state.mode)
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])

  
  const isAuth = Boolean(useSelector((state) => state.token));
console.log(isAuth)

  return (
    <>
    
    <div className="app">
      
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/home"
              element={isAuth ? <HomePage /> : <Navigate to="/" />}
            />
            <Route
              path="/profile/:userId"
              element={isAuth ? <ProfilePage /> : <Navigate to="/" />}
            />
          </Routes>
        </ThemeProvider>
      
    </div>
    </>
  );
}

export default App;
