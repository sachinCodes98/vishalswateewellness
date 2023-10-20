import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";
import About from "./components/About/About";
import Classes from "./components/Classes/Classes";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import WhyUs from "./components/WhyUs/WhyUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Classes />
      <ParallaxProvider>
        <WhyUs />
      </ParallaxProvider>
    </div>
  );
}

export default App;
