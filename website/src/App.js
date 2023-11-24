import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import About from "./components/About/About";
import Classes from "./components/Classes/Classes";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import WhyUs from "./components/WhyUs/WhyUs";
import JoinUs from "./components/JoinUs/JoinUs";
import { SlidingCarousel } from "./components/SlidingCarousel/SlidingCarousel";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Classes />
      {/* <ParallaxProvider> */}
        <WhyUs />  
      {/* </ParallaxProvider> */}
      <JoinUs />
      <SlidingCarousel />
      <Footer />
    </div>
  );
}

export default App;
