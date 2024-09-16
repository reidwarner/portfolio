import projects from '../data/projects.js';

function ProjectsPage(){
    return (
        <>
            <h1>Projects</h1>
            <div className='projects-container'>
                <div className='project'>
                    <h4>Indian River Social</h4>
                    <p>
                        A webapp that helps Indian and Banana River boaters find and share new points of interest.
                    </p><br></br>
                    <a href="https://github.com/reidwarner/irs_react" target="_blank"><img className='gh-logo' src={require("../images/github-logo.png")}/></a><br></br>
                    <a href='https://indianriversocial.onrender.com/' target='_blank'>Live Site</a><br></br>
                    <img className="irs-img" src={require('../data/images/IRS-img.png')} alt="project preview"/>
                </div>
                <div className='project'>
                    <h4>Atomic Chess</h4>
                    <p>Two player chess variant. Capture your opponents king directly or via an indirect explosion attacks.</p><br></br>
                    <a href="https://github.com/reidwarner/atomic_chess" target="_blank"><img className='gh-logo' src={require("../images/github-logo.png")}/></a><br></br>
                    <img className="atomic-img" src={require('../data/images/Atomic.png')} alt="project preview"/>
                </div>
                <div className='project'>
                    <h4>Portfolio Site</h4>
                    <p>You are on it right now!</p>
                    <a href="https://github.com/reidwarner/portfolio" target="_blank"><img className='gh-logo' src={require("../images/github-logo.png")}/></a><br></br>
                </div>
            </div>
        </>
    )
}

export default ProjectsPage;