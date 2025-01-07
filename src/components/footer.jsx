

const Footer = () =>{
    return(
        <>
            {/* <hr /> */}
            <div className="footer-container">
                <p>
                    ©{new Date().getFullYear()} Akshat's Portfolio
                </p>
                <div className="social_icons">
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
        </>
    )
}


export default Footer;