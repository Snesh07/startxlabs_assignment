import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Navbar />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Banner />}></Route>
        </Routes>
        </Router>
    </>
  );
}

export default App;
