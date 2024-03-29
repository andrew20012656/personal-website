import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer } from "./components";
import { Home, Project, Resume } from "./pages";

const routerBaseName = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <Router basename={routerBaseName}>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/personal-website" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
