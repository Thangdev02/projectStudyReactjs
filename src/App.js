import React from "react";

import Salary from "./components/Salary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicePage from "./pages/ServicePage";
import Myheader from "./layouts/Myheader";
import MyFooter from "./layouts/MyFooter";
import ContactPage from "./pages/ContactPage";
import Layouts from "./layouts/Layouts";
import StorePage from "./pages/StorePage";
import Login from "./pages/LoginPage";

function App() {
  // Main thi no se chay xuyen suot du an
  return (
    // 1 project react chi co duy nhat 1 router// bo duong dan
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login/>}/>

        <Route path="/*" element={ 
          //cai gi cung duoc
          <Layouts>
          <Routes>
          <Route path="/store" element={<StorePage/>}/>
          <Route path="/service" element={<ServicePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
        </Layouts>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
