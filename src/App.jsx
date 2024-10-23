import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Available from "./components/Available";
import About from "./components/About";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <Hero />
      <Features />
      <Available />
      <About />
      <CTA />
      <FAQ />
      <Team />
      <Contact />
      <Footer />
    </Router>
  );
};

export default App;
