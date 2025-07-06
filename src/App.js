// src/App.js
import "./App.css";
import "./index.css";
import AllRoutes from "./routes/AllRoutes";

import { Header, Footer } from "./components";
// import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
