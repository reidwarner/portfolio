function HomePage(){
    return (
        <div className="home-page">
            <div className="about-container">
                <div className="personal-container">
                    <img className="profile-pic" src={require("./../images/profilepic.png")} alt="profile pic"/>
                    <div className="personal-info">
                        <h4>Reid Singleton</h4>
                        <h5>Software Engineer</h5>
                        <h6>Melbourne, FL</h6>
                        <div className="socials">
                            <a href="https://www.linkedin.com/in/reid-singleton-968a7710b/" target="_blank">
                                <img src={require("./../images/linkedin-logo.png")} alt="Linkedin Logo"/>
                            </a>
                            <a href="https://github.com/reidwarner" target="_blank">
                                <img src={require("./../images/github-logo.png")} alt="Github Logo"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bio-container">
                    <h4>About Me</h4>
                    <p>Hello! My name is Reid. Welcome to my portfolio site. This is my
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
    )
}

export default HomePage;