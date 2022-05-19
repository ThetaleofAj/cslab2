import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter,Route,Routes, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {

  return (
  <div>
    <h1 className="appTitle">Andyson's temperature and humidity portal</h1>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
