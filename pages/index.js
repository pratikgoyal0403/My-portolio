import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Skills from "../components/skills";
import Testimonial from "../components/Testimonial";
import Projects from "../components/projects";
import About from "../components/About";
import Contact from '../components/Contact/Index.jsx'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      {/* <Services /> */}
      {/* <Testimonial /> */}
    </div>
  );
}
