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
  const mode = useSelector((state)=>state.mode)
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[mode])
  console.log(mode)
  const [count, setCount] = useState(0);

  return (
    <>
    
    <div className="app">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
