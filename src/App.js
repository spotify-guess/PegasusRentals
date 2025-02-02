import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Navbar from './components/Navbar';
import ContactUsPage from './components/ContactUsPage';
import OurFleetPage from './components/OurFleetPage';
import Home from './components/Home';
import AboutUsPage from './components/AboutUsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ScrollToTop>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ContactUs" element={<ContactUsPage/>}/>
                <Route path="/OurFleet" element={<OurFleetPage/>}/>
                <Route path="/AboutUs" element={<AboutUsPage/>}/>
              </Routes>
            </ScrollToTop>
      </BrowserRouter>    
    </div>
  );
}

export default App;
