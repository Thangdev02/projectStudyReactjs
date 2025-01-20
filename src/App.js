import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Myheader from "./components/Myheader";
import MyFooter from "./components/MyFooter";
import ProfilePage from "./pages/ProfilePage";
import StorePage from "./pages/StorePage";

function App() {
  // Main thi no se chay xuyen suot du an
  return (
    <div className="App">
      {/* 1 du an react chi co duy nhat 1 router */}
      <BrowserRouter>
        <Myheader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/store' element={<StorePage />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
