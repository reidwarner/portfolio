import projects from '../data/projects.js';

function ProjectsPage(){
    return (
        <div className="">
            <div className="mx-4 my-4 sm:my-4 xl:mx-8 lg:mx-8 md:mx-6 sm:mx-4 grid lg:grid-cols-2 md:grid-cols-2 lg:gap-8 md:gap-6 sm:gap-4 sm:grid-cols-1">
                <div className="flex flex-col items-center text-center border-4 border-gray-300 mb-6 p-6 rounded-lg bg-gray-800">
                    <div className="flex justify-between">
                        <h4 className="text-3xl font-semibold text-white mb-4 text-center">Indian River Social</h4>
                        <div>&nbsp;</div>
                        <a className="h-8 w-8 p-1 rounded-full bg-[#171510] hover:bg-blue-500 transition-colors duration-300" href="https://github.com/reidwarner/irs_react" target="_blank">
                                <img className="w-6 h-6" src={require("../images/github-logo.png")}/>
                        </a>
                    </div>
                    <p className="text-lg text-white leading-relaxed">
                        A webapp that helps Indian and Banana River boaters find and share new points of interest.
                    </p>
                    <br></br>
                    <img className="object-cover border-4 border-gray-300 mb-6" src={require('../data/images/IRS-img.png')} alt="project preview"/>
                    <a className="text-xl text-white underline hover:text-gray-400" href='https://indianriversocial.onrender.com/' target='_blank'>Live Site</a><br></br>
                </div>
                <div className="flex flex-col items-center text-center border-4 border-gray-300 mb-6 p-6 rounded-lg bg-gray-800">
                    <div className="flex justify-between">
                        <h4 className="text-3xl font-semibold text-white mb-4 text-center">Atomic Chess</h4>
                        <div>&nbsp;</div>
                        <a className="h-8 w-8 p-1 rounded-full bg-[#171510] hover:bg-blue-500 transition-colors duration-300" href="https://github.com/reidwarner/atomic_chess" target="_blank">
                            <img className="w-6 h-6" src={require("../images/github-logo.png")}/>
                        </a>
                    </div>
                    <p className="text-lg text-white leading-relaxed">Two player chess variant. Capture your opponents king directly or via an indirect explosion attacks.</p><br></br>
                    <br></br>
                    <img className="object-cover border-4 border-gray-300 mb-6" src={require('../data/images/Atomic.png')} alt="project preview"/>
                    <br></br>
                </div>
                <div className="flex flex-col items-center text-center border-4 border-gray-300 mb-6 p-6 rounded-lg bg-gray-800">
                    <div className="flex justify-between">
                        <h4 className="text-3xl font-semibold text-white mb-4 text-center">Portfolio Site</h4>
                        <a className="h-8 w-8 p-1 rounded-full bg-[#171510] hover:bg-blue-500 transition-colors duration-300"  href="https://github.com/reidwarner/portfolio" target="_blank">
                            <img className="w-6 h-6" src={require("../images/github-logo.png")}/>
                        </a>
                    </div>
                    <p className="text-lg text-white leading-relaxed">You are on it right now!</p>
                <br></br>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;