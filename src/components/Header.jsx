import { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'

// export default function Header() {
//     const [ isNavShow, setIsNavShow ] = useState(window.innerWidth > 1024 ? true : false);

//     const closeNavHandler = () => {
//         if(window.innerWidth < 1024) {
//           setIsNavShow(false)
//         }
//         else{
//           setIsNavShow(true)
//         }
//       }

//   return (
//     <nav>
//         <div className="container nav-container">
//             <div className="logo">
//                 <Link to='/'><h3><span>GFG</span> GIETU</h3></Link>
//             </div>
//             {
//                 isNavShow && <ul className='nav-menu'>
//                     <li><Link to={'/'} onClick={closeNavHandler}>Home</Link></li>
//                     <li><Link to={'/gallery'} onClick={closeNavHandler}>Gallery</Link></li>
//                     <li><Link to={'/blog'} onClick={closeNavHandler}>Team</Link></li>
//                     <li><Link to={'/team'} onClick={closeNavHandler}>Contact</Link></li>
//                 </ul>
//             }
//             <button className="nav-toggle-button" onClick={() => setIsNavShow(prev => !prev)}>
//             {
//                 isNavShow ?  <IoMdClose /> : <FaBars />
//             }
//             </button>
//         </div>
//     </nav>
//   )
// }
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
                  <Link to="/"><h3><span>GFG</span> GIETU</h3></Link>
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
