import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Myheader from "./components/Myheader";
import MyFooter from "./components/MyFooter";
import ProfilePage from "./pages/ProfilePage";
import StorePage from "./pages/StorePage";
import MemberJoin from "./components/MemberJoin";
import JoinCourse from "./components/JoinCourse";
import Greeting from "./components/Greeting";
import Login from "./pages/LoginPage";
import Test from "./pages/Test";

function App() {
  // Main thi no se chay xuyen suot du an
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
