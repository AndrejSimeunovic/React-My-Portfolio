import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import TechExperience from "./pages/TechExperience";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <TechExperience />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
