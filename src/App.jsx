import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/cart'} element={<Cart />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </Router>
  )
}

export default App;
