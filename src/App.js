import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Portfolio from './components/Portfolio/portfolio'
import Technologies from './components/Technologies/technologies'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <Technologies />
    </div>
  );
}

export default App;
