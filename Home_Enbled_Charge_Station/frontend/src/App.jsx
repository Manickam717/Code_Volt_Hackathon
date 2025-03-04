import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Map from './componenets/map';
import Header from './componenets/navbar';
import Footer from './componenets/footer';
import Login from './componenets/Login';
import MainDash from './Dashboard/MainDash';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<MainDash />} />
        <Route path="/map" element={<Map />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<MainDash />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
