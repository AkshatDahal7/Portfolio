import Link from "next/link";

const Navbar = ()=>{
    return(
        <div className="nav-container">
            <div className="inside-nav">
                <Link href={"/"}>
                Akshat's Portfolio
                </Link>
                <Link href='#about'>
                About me
                </Link>
                <Link href="#skill">
                  Skills
                </Link>
                <Link href="#project">
                  Projects
                </Link>
                <Link href="#contact">
                  Contact
                </Link>
            </div>
            <a href="" className="cta-btn">Resume</a>
        </div>
    )
}
export default Navbar;