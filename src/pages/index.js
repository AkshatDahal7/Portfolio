import App from "./_app";
import { useEffect } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skill from "@/components/skill";
import Project from "@/components/project";
import Contact from "@/components/contact";

export default function Home() {
  useEffect(() => {
    const textElement = document.querySelector('.hello');
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
    } else {
      setTimeout(() => {
        // Retry after 100ms if element is not available immediately
        const textElementRetry = document.querySelector('.hello');
        if (textElementRetry) {
          const text = textElementRetry.textContent;
          textElementRetry.textContent = "";
          [...text].forEach((letter, index) => {
            const span = document.createElement("span");
            span.textContent = letter === " " ? "\u00A0" : letter; // Handle spaces
            span.style.animationDelay = `${index * 0.1}s`;
            span.style.animation = "fadeIn 1s ease forwards";
            textElementRetry.appendChild(span);
          });
        }
      }, 100); // Retry after 100ms if the element is not found
    }
  }, []);
  

  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}
