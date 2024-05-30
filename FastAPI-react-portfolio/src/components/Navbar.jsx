import { NavLink } from 'react-router-dom'
import "../index.css"

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className='blue-gradient_text'>BEN</p>

      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to="/about" className={({isActive}) => isActive ? "text-cyan-500 font-bold ": "nav-link  text-black"}>
        About
        </NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? " text-cyan-500 font-bold": "text-black nav-link"}>
        Projects
        </NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? " text-cyan-500 font-bold": "text-black nav-link"}>
        Contact
        </NavLink>
      </nav>
        
    </header>
  )
}

export default Navbar