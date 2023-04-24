import { Link } from 'react-router-dom'

//styles
import './navbar.css'

export default function Navbar() {

    return (
        <div className='navbar'>
            <p>Navbar</p>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    )
}