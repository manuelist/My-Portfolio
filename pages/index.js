import { Fragment } from "react";
import Hero from "../components/UI/Hero";
import Expercience from "../components/UI/Expercience";
import About from "../components/UI/About";
import Portfolio from "../components/UI/Portfolio";
import Testimonial from "../components/UI/Testimonial";
import Contact from "../components/UI/Contact";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Expercience />
      <About />
      <Portfolio />
      <Contact />
    </Fragment>
  );
}
