import { NavLink } from 'react-router-dom'
import "../index.css"

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="w-20 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className='blue-gradient_text'>Mr. B</p>

      </NavLink>
        
    </header>
  )
}

export default Navbar