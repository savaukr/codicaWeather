import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CityList from "./components/cityList/cityList";
import City from "./components/city/city";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/:id" element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
