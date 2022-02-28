import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Skills from "../components/skills";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      {/* <Testimonial /> */}
    </div>
  );
}
