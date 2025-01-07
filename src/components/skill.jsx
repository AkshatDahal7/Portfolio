
const Skill= () =>{
    return(
        <section id="skill">
                <div className="skills-container">
                    <h2>Skills</h2>
                    <div className="grid-skills">
                <div className="skill-card html">
                <i className="fa-brands fa-html5 html-icon"></i>
                <p>C</p>
                </div>
                <div className="skill-card css">
                <i className="fa-brands fa-css3-alt css-icon"></i>
                <p>CSS</p>
                </div>
                <div className="skill-card js">
                <i className="fa-brands fa-js-square js-icon"></i>
                <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                <i className="fa-brands fa-react react-icon"></i>
                <p>React</p>
                </div>
                <div className="skill-card node">
                <i className="fa-brands fa-node-js node-icon"></i>
                <p>Express</p>
                </div>
                <div className="skill-card python">
                <i className="fa-brands fa-python python-icon"></i>
                <p>Python</p>
                </div>
                </div>
            </div>
        </section>
    )
}
export default Skill;