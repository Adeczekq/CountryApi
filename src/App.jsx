import { useState } from "react";
import Navbar from "./Components/Navbar";

import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Country from "./Pages/Country";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  return (
    <div className="flex flex-col pb-7">
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<HomePage theme={theme} />} />
        <Route path="country/:countryName" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
