import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../screens/Home";
import News from "../screens/News";
import Contact from "../screens/Contact";

import Footer from "../components/Footer";
import Header from "../components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;