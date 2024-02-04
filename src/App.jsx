// import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/project/Project";
import Services from "./components/services/Services";
import CircularProgressBar from './SkillsAndExperience';


const App = () => {
  const progressPercentage = 75;
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>


      <section id="SKILLS">
        <Parallax type="services" />
      </section>
      <section>
        {/* <Services /> */}
        <div>
      <h1 className="H1PRO">SKILLS</h1>
      <CircularProgressBar percentage={progressPercentage} />
    </div>
      </section>
     

      <section id="Project">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;