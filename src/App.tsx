import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Work from "./pages/Work";
import Aside from "./components/Aside";

function App() {
  return (
    <div>
      <Navbar />
      <Aside />
      <Home />
      <About />
      <Experience />
      <Work />
    </div>
  );
}

export default App;
