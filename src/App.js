
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accessories from "./components/Accessories";
import CenterSection from "./components/CenterSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import SaleSection from "./components/SaleSection";
import ShopCategory from "./components/ShopCategory";
import Signup from "./components/Signup";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ShopCategory />
                <NewArrivals />
                <CenterSection />
                <Accessories />
                <SaleSection />
                <Testimonials />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;