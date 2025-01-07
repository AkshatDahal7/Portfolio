import Link from "next/link";

const Navbar = ()=>{
    return(
        <div className="nav-container">
            <div className="inside-nav">
                <Link href={"/"}>
                Akshat's Portfolio
                </Link>
                <div className="nav-about">
                <Link href='#about'>
                About me
                </Link>
                </div>
                <div className="nav-skill">
                <Link href="#skill">
                  Skills
                </Link>
                </div>
                <div className="nav-project">
                <Link href="#project">
                  Projects
                </Link>
                </div>
                <div className="nav-contact">
                <Link href="#contact">
                  Contact
                </Link>
                </div>
            </div>
            <a href="/AkshatDahal_Resume.pdf" className="cta-btn">Resume</a>
        </div>
    )
}
export default Navbar;