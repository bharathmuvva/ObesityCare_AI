import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import About from "./pages/About";
import Help from "./pages/Help";
import Dataset from "./pages/Dataset";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="logo">ObesityCare AI</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/predict">Predict</Link>
          <Link to="/about">About</Link>
          <Link to="/help">Help</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dataset" element={<Dataset />} />
      </Routes>
      <div style={{
  marginTop: "100px",
  padding: "30px",
  textAlign: "center",
  fontSize: "14px",
  color: "#94a3b8",
  borderTop: "1px solid rgba(255,255,255,0.05)"
}}>
  © 2026 ObesityCare AI · Prevent Early. Live Better.
</div>

    </BrowserRouter>
    
  );
}

export default App;