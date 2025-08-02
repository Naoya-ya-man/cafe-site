import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Access from './pages/Access';
import Contact from './pages/Contact';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Footer from './components/Footer';


const appStyle = {
  backgroundImage: "url('/backkafe.jpg')",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
};


function App() {
  return (
    <div style={appStyle}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/access' element={<Access />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
