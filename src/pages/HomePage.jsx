function HomePage(){
    return (
        <div className="">
            <div className="mx-auto my-4 xl:my-8 lg:my-6 md:my-4 sm:my-2 px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 lg:gap-8 md:gap-6 sm:gap-4 sm:grid-cols-1">
                    <div className="flex flex-col items-center text-center border-4 border-gray-300 mb-6 p-6 rounded-lg bg-gray-800">
                        <img className="profile-pic w-64 h-64 rounded-full object-cover border-4 border-gray-300 mb-6" src={require("./../images/profilepic.png")} alt="profile pic"/>
                        <div>
                            <h4 className="text-2xl font-semibold text-white">Reid Singleton</h4>
                            <h5 className="text-lg text-white mb-2">Software Engineer</h5>
                            <h6 className="text-sm text-white">Melbourne, FL</h6>
                            <div className="flex space-x-4 mt-4 justify-center">
                                <a className="inline-block p-2 rounded-full bg-[#0077B5] hover:bg-blue-500 transition-colors duration-300" href="https://www.linkedin.com/in/reid-singleton-968a7710b/" target="_blank">
                                    <img className="w-6 h-6 opacity-75" src={require("./../images/linkedin-logo.png")} alt="Linkedin Logo"/>
                                </a>
                                <a className="inline-block p-2 rounded-full bg-[#171510] hover:bg-blue-500 transition-colors duration-300" href="https://github.com/reidwarner" target="_blank">
                                    <img className="w-6 h-6 opacity-70" src={require("./../images/github-logo.png")} alt="Github Logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 border-4 border-gray-300 mb-6 p-6 rounded-lg bg-gray-800">
                        <h4 className="text-3xl font-semibold text-white mb-4 text-center">About Me</h4>
                        <p className="text-lg text-white leading-relaxed">Hello! My name is Reid. Welcome to my portfolio site. This is my
                        little corner of the internet where I like to showcase my personal projects and
                        dump my thoughts as I progress as a software developer. <br></br><br></br>
                        Professionally, I have worked as an engineer in the aerospace industry and am
                        currently working in technical sales for IBM. <br></br><br></br>
                        I have a wide range of interest in computer science and a desire to tackle a 
                        diverse set of software topics as I develope my hobby projects. Feel free to 
                        reach out to connect. I am always happy to make a new friend.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;