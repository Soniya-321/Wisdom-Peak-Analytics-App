import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import Header from "./components/Header";
import Home from "./components/Home";
import UserDetail from "./components/UserDetail";
import "./App.css";

const App = () => {
  return (
    <DarkModeProvider>
      <UserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>
        </Router>
      </UserProvider>
    </DarkModeProvider>
  );
};

export default App;
