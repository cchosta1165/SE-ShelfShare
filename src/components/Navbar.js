import React, {useState} from 'react';
import { Link } from 'react-router-dom';



function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <nav className="navbar">
          <div className="navbar-container">

              <Link to="/" className="navbar-logo">
                ShelfShare <i className="logo" />
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? <img src={window.location.origin + './components/Images/exit.png'} alt = "exit"/> : <img src='./components/Images/exit.png' alt='burg'/>} />
              </div>
              
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                <li className="nav-item">
                  <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    MyShelf
                  </Link>
                  </li>

                  <li className="nav-item">
                  <Link to='./Login.js' className="nav-links" onClick={closeMobileMenu}>
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                    Sign Up
                  </Link>
                </li>
              </ul>
          </div>
      </nav>
    </div>
  )
}

export default Navbar
