// components/Header.jsx
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="app-header">
      <nav>
        <Link to="/home" className="logo">Blog Platform</Link>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </header>
  )
}
