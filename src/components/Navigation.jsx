import { Link } from "react-router-dom";

function Navigation(){
    return (
        <nav className="app-nav">
            <Link to="/portfolio">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
        </nav>
    )
}

export default Navigation;