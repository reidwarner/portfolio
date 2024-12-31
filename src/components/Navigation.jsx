import { NavLink } from "react-router-dom";
import '../App.css';

function Navigation(){

    return (
        <nav class="p-6 mx-4 sm:my-4 xl:mx-8 lg:mx-8 md:mx-6 sm:mx-4 z-10 border-4 border-gray-300 rounded-lg bg-gray-800">
            <div class="mx-12 space-x-12 flex items-center lg:text-4xl md:text-2xl">
                <NavLink to="/portfolio" className={({ isActive }) => isActive ? "text-4xl font-bold text-white" : "text-white hover:text-gray-400"} id="home">Home</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "text-4xl font-bold text-white shadow-text" : "text-white hover:text-gray-400"} id="projects">Projects</NavLink>
            </div>
        </nav>
    )
}

export default Navigation;