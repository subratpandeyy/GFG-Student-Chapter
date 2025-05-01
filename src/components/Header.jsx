import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Header({ scrollToGallery, scrollToTeam, scrollToFoot }) {
  const [isNavShow, setIsNavShow] = useState(window.innerWidth > 1024);

  const closeNavHandler = () => {
      if (window.innerWidth < 1024) {
          setIsNavShow(false);
      } else {
          setIsNavShow(true);
      }
  };

  return (
      <nav>
          <div className="container nav-container">
              <div className="logo">
                  <Link to="/"><h3><span className='head-logo'><img src={logo} /></span> GIETU</h3></Link>
              </div>
              {isNavShow && (
                  <ul className="nav-menu">
                      <li><button onClick={() => { closeNavHandler(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</button></li>
                      <li><button onClick={() => { closeNavHandler(); scrollToGallery(); }}>Gallery</button></li>
                      <li><button onClick={() => { closeNavHandler(); scrollToTeam(); }}>Team</button></li>
                      <li><button onClick={() => { closeNavHandler(); scrollToFoot(); }}>Contact</button></li>
                  </ul>
              )}
              <button className="nav-toggle-button" onClick={() => setIsNavShow(prev => !prev)}>
                  {isNavShow ? <IoMdClose /> : <FaBars />}
              </button>
          </div>
      </nav>
  );
}
