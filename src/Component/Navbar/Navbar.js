import './Navbar.css'
import Logo from '../../Assets/424_asus-removebg-preview.png'
import { CiSearch } from "react-icons/ci";
import { HiOutlineUser } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='navbar-container'>
                    <a className='navbar-logo-link' href="">
                        <img className='navbar-img' src={Logo} alt="" />
                    </a>
                    {/* Navbar-nav-wrapper */}
                    <div className='navbar-nav-wrapper'>
                        <ul className='navbar-nav-list'>
                            <li className='navbar-nav-item'><a className='navbar-nav-link' href="">Mobile/Handhelds</a></li>
                            <li className='navbar-nav-item'><a className='navbar-nav-link' href="">Laptops</a></li>
                            <li className='navbar-nav-item'><a className='navbar-nav-link' href="">Displays/Desktops</a></li>
                            <li className='navbar-nav-item'><a className='navbar-nav-link' href="">Motherboards / Components
                            </a></li>
                            <li className='navbar-nav-item'><a className='navbar-nav-link' href="">
                                Networking / IoT / Servers
                            </a></li>
                            <li className='navbar-nav-item'><a className='navbar-nav-link' href="">
                                Accessories
                            </a></li>
                        </ul>
                    </div>
                    {/* navbar-auth */}
                    <div className="navbar-auth">
                        <a className='navbar-auth-link' href="#">Support</a>
                        <button className='navbar-auth-search'><CiSearch /></button>
                        <button className='navbar-auth-user'><HiOutlineUser /></button>
                        <button className='navbar-auth-bars'><FaBars /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Navbar