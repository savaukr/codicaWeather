import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";

import CityList from "./components/cityList/cityList";
import CityDetails from "./components/cityDetails/cityDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/city/:id" element={<CityDetails />} />
      </Routes>
    </div>
  );
}

export default App;
