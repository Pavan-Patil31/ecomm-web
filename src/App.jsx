import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage.jsx";
import MainNavbar from "./components/MainNavbar.jsx";
import data from "./data.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardDetail from "./components/CardDetail.jsx";
import { ThemeProvider } from "./hooks/ThemeContext.jsx";


function App() {
const [isLoggin, setIsLogin] = useState(false)
const [loggedUser, setLoggedUser] = useState('')
console.log("isLoggin on App.js",isLoggin);
console.log("loggedUser on App.js",loggedUser);

  return (
    <>
      <Router>
        <ThemeProvider>

        <div>
        <MainNavbar />
        
        <Routes>
          <Route path="/login" element={<LoginPage  setIsLogin={setIsLogin} setLoggedUser={setLoggedUser} />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/home" element={<HomePage data={data} />}></Route>
          <Route path="/card-detail/:ID/*" element={<CardDetail />}></Route>
        </Routes>
        </div>
        </ThemeProvider>
      </Router>
      {/* <RegisterPage ></RegisterPage>

      <LoginPage />
      <HomePage data={data} /> */}
    </>
  );
}

export default App;
