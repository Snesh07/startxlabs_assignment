import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import NewArrivals from './components/NewArrivals';
import JoinNowBanner from './components/JoinNowBanner';

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
        <Routes>
          <Route path="/" element={<NewArrivals />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<JoinNowBanner />}></Route>
        </Routes>
        </Router>
    </>
  );
}

export default App;
