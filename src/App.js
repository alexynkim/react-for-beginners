// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Movies from "./Routes/Movies";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />}></Route>
    //     <Route path="movies" element={<Movies />}></Route>
    //   </Routes>
    // </Router>
    <div>
      <Movies />
    </div>
  );
}

export default App;
