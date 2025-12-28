import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";

import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
