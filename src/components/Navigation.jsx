import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          home
        </Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
          about
        </Link>
        <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
          projects
        </Link>
        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
          contact
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navigation