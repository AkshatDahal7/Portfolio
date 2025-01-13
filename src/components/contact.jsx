import React, { useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p>
          If you want us to work together, have any questions, or want me to
          speak at your event, my inbox is always open. Whether I just want to
          say hi, I'll try my best to get back to you! Cheers!
        </p>
        <Link href={"/form"}>
        <button className="contact-button" >Say Hello!</button>
        </Link>

        
      </div>
    </section>
  );
};

export default Contact;
