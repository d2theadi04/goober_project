import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/NavBar"; // Import the NavBar
import LogPage from "./components/Log_and_Regist"; // Import the LogPage
import InfoRegistPage from "./components/Info_Regist_Page"; // Import the InfoRegistPage
import "./App.css";

function App() {
  return (
    <Router>
      {/* Global NavBar (Visible on All Pages) */}
      <NavBar />

      <div className="app">

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<LogPage />} />
          <Route path="/info-regist" element={<InfoRegistPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
