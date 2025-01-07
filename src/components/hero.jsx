import Image from "next/image";

const Hero = () =>{
    return(
        <div className="hero-container" >
            <Image src={'/pics1.jpg' } style={{marginTop : '100px'}} className = "profile-img" width={300} height={300} alt="Joe's personal headshot"/>
            <div className="hero_text">
                <h1 className="hello">Hello! I'm Akshat...</h1>
                <p>I am a WebDeveloper based in Nepal</p>
                <div className="social-icons">
                <a 
                        href = "https://x.com/DahalAkshat"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/AkshatDahal7"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/akshat-dahal"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>

            </div>
        </div>
    )

}
export default Hero;