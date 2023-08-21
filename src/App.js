import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { Home, Contact, Resume } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pw-2023-2/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
