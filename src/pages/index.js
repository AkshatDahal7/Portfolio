import App from "./_app";
import { useEffect } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skill from "@/components/skill";
import Project from "@/components/project";
import Contact from "@/components/contact";

export default function Home() {

  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      {/* <canvas
        id="sketch"
        style={{
          // display: "block",    
          // width: "100%",      
          // height: "100vh",    
          // backgroundColor: "black",
          zIndex: -1,          
        }}
      ></canvas> */}
    </>
  );
}
