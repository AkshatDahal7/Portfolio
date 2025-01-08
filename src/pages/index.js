import { useEffect } from "react";
import App from "./_app";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skill from "@/components/skill";
import Project from "@/components/project";
import Contact from "@/components/contact";
import Lenis from "@/components/smoothScrolling";

export default function Home() {
  useEffect(() => {
  
    const textElement = document.querySelector(".hello");
    if (textElement) {
      const text = textElement.textContent;
      textElement.textContent = "";
      [...text].forEach((letter, index) => {
        const span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0" : letter; // Handle spaces
        span.style.animationDelay = `${index * 0.1}s`;
        span.style.animation = "fadeIn 1s ease forwards";
        textElement.appendChild(span);
      });
    }
  }, []);

  useEffect(() => {
    const loadParticles = () => {
      particlesJS.load("particles-js", "/particles.json", () => {
        console.log("Particles.js loaded and initialized");
      });
    };

    if (window.particlesJS) {
      loadParticles();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      script.onload = loadParticles; 
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <>
     

        <div id="particles-js"></div>
        <Hero />
        <About />
        <Skill />
        <Project />
        <Contact />
    </>
  );
}
