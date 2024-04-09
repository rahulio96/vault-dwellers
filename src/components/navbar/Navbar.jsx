import navbarCSS from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar