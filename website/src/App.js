// import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/Aboutpage/AboutPage";
import ClassesPage from "./pages/ClassesPage/ClassesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ChallengesPage from "./pages/ChallengesPage/ChallengesPage";
import PlansPage from "./pages/PlansPage/PlansPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
