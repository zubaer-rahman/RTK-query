import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../src/index.css"
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
function App() {
  return (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/edit/:bookId" element={<Edit/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
