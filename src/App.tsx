import "./App.css";
import {
  About,
  Hero,
  Navbar,
  ViewCount,
  Certifications,
  Projects,
  Contact,
} from "./components";

function App() {
  return (
    <div className="text-white flex flex-col items-center font-inter selection:bg-cerulean selection:text-black">
      <Navbar />
      <ViewCount />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
