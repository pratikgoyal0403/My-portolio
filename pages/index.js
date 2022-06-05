import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Skills from "../components/skills";
import Testimonial from "../components/Testimonial";
import Projects from "../components/projects";
import About from "../components/About";
import Contact from "../components/Contact/Index.jsx";
import Container from "../components/Container/Container";
import Experiences from "../components/Experiences/Experiences";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Hero />
        <Skills />
        {/* <Experiences /> */}
        <Projects />
        <About />
        <Contact />
        {/* <Services /> */}
        {/* <Testimonial /> */}
      </Container>
    </>
  );
}
