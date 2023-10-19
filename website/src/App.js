import "./App.css";
import About from "./components/About/About";
import Classes from "./components/Classes/Classes";
import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Classes />
    </div>
  );
}

export default App;
