import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Movies from "./Routes/Movies";
import Crypto from "./Routes/Crypto";

function App() {
  return (
    <Router basename="/react-for-beginners">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </Router>
  );
}

export default App;
