import React, { useState } from "react";
import emailjs from "emailjs-com";
const form = () =>{
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .send("service_pkqmsrh", "template_m5uzcn6", {
            from_name: "Akshat",
            to_name: formData.user_name,
            message: formData.message,
            user_email: formData.user_email,
          },"czpYN2Q-mIbSXMLrk")
          .then((response) => {
            console.log("Email sent successfully:", response);
            setFormData({ user_name: "", user_email: "", message: "" });
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });
      };
    return(
        <div className="form-whole">
            <form onSubmit={sendEmail} className="form-container">
              <h1 style={{fontSize : "28px"}}>Leave me a message, and I'll get back to you!</h1>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="cta-btn">
            Send Message
          </button>
        </form>
        </div>
    )
}
export default form;