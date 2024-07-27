import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import icons from React Icons
import "../css/Header.css";

const white = {
  color: 'white',
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle
  const [activeLink, setActiveLink] = useState('Home');

  const handleNavLinkClick = (linkName) => {
      setActiveLink(linkName);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <header className="dHctYmctZGFyay05MDA custom-header">
      <nav className="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctcHgtNA dHctcHktNg dHctbXgtYXV0bw dHctbWF4LXctN3hs sm:dHctcHgtNg lg:dHctcHgtOA">
        <div className="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1iZXR3ZWVu dHctdy1mdWxs">
          <div className="dHctZmxleA dHctaXRlbXMtY2VudGVy">
            <span className="dHctYmxvY2s dHctdGV4dC0yeGw dHctZm9udC1ibGFjaw md:dHctaGlkZGVu lg:dHctYmxvY2s dHctZ3JvdXA" to='#'>
              <span className="dHctdGV4dC13aGl0ZQ dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTMwMA"></span>

              
              <Link to="/" >
              <span  className="dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctdGV4dC1kYXJrLTMwMA group-hover:dHctdGV4dC13aGl0ZQ"><img src="https://kodify.strangeweb.info/img/kodify%20(3).png" alt="" width={150} /></span>
              </Link>
    
             
           
            </span>
            <Link className="dHctaGlkZGVu dHctdGV4dC0zeGw dHctZm9udC1ibGFjaw md:dHctYmxvY2s lg:dHctaGlkZGVu dHctZ3JvdXA" to='#'>
              <span className="dHctdGV4dC13aGl0ZQ dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTMwMA">K</span>
            </Link>
          </div>
          <div className={`dHctaGlkZGVu md:dHctZmxleA dHctanVzdGlmeS1iZXR3ZWVu dHctaXRlbXMtY2VudGVy md:dHctc3BhY2UteC0w.5 lg:dHctc3BhY2UteC0y dHctdGV4dC14bA md:dHctdGV4dC1iYXNl dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTMwMA ${isOpen ? 'dHctbG9jay' : 'dHctZmxleA'}`}>
            <Link to="/" onClick={() => handleNavLinkClick('Home')} className={`dHctYmxvY2s dHctcHgtNA dHctcHktMQ dHctcm91bmRlZC1mdWxs sm:dHctaW5saW5lLWJsb2Nr dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ hover:dHctdGV4dC13aGl0ZQ hover:dHctYmctZGFyay03MDA ${activeLink === 'Home' ? 'active' : ''}`}>Home</Link>

            <Link to="/about" onClick={() => handleNavLinkClick('About')} className={`dHctYmxvY2s dHctcHgtNA dHctcHktMQ dHctcm91bmRlZC1mdWxs sm:dHctaW5saW5lLWJsb2Nr dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ hover:dHctdGV4dC13aGl0ZQ hover:dHctYmctZGFyay03MDA ${activeLink === 'About' ? 'active' : ''}`}>About</Link>

            <Link to="/services" onClick={() => handleNavLinkClick('Services')}  className={`dHctYmxvY2s dHctcHgtNA dHctcHktMQ dHctcm91bmRlZC1mdWxs sm:dHctaW5saW5lLWJsb2Nr dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ hover:dHctdGV4dC13aGl0ZQ hover:dHctYmctZGFyay03MDA ${activeLink === 'Services' ? 'active' : ''}`}>Services</Link>

            <Link to="/portfolio" onClick={() => handleNavLinkClick('Portfolio')} className={`dHctYmxvY2s dHctcHgtNA dHctcHktMQ dHctcm91bmRlZC1mdWxs sm:dHctaW5saW5lLWJsb2Nr dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ hover:dHctdGV4dC13aGl0ZQ hover:dHctYmctZGFyay03MDA ${activeLink === 'Portfolio' ? 'active' : ''}`}>Portfolio</Link>

            <Link to="/ourteam" onClick={() => handleNavLinkClick('Our Team')}  className={`dHctYmxvY2s dHctcHgtNA dHctcHktMQ dHctcm91bmRlZC1mdWxs sm:dHctaW5saW5lLWJsb2Nr dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ hover:dHctdGV4dC13aGl0ZQ hover:dHctYmctZGFyay03MDA ${activeLink === 'Our Team' ? 'active' : ''}`}>Our Team</Link>
          </div>
          <div className="dHctaGlkZGVu md:dHctYmxvY2s">
            <Link to="/contact" className="dHctZmxleA dHctanVzdGlmeS1jZW50ZXI dHctaXRlbXMtY2VudGVy dHctcHktMw dHctcHgtOA dHctdy1hdXRv dHctZm9udC1zZW1pYm9sZA dHctbGVhZGluZy1zbnVn dHctYmctd2hpdGU dHctcm91bmRlZC1mdWxs dHctdHJhbnNpdGlvbg dHctZWFzZS1pbi1vdXQ dHctZHVyYXRpb24tMjUw dHctdGV4dC1kYXJrLTkwMA hover:dHctdGV4dC13aGl0ZQ focus:dHctb3V0bGluZS1ub25l hover:dHctYmctZGFyay03MDA" style={white}> Contact us </Link>
          </div>
          <div className="dHctYmxvY2s md:dHctaGlkZGVu">
            <div data-headlessui-state="">
              <button
                className="dHctcmVsYXRpdmU dHctei01MA dHctdy02 dHctaC01 dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tNTAw dHctZWFzZS1pbi1vdXQ dHctdHJhbnNmb3Jt dHctcm90YXRlLTA dHctY3Vyc29yLXBvaW50ZXI dHctZ3JvdXA focus:dHctb3V0bGluZS1ub25l"
                aria-label="Toggle Navigation"
                type="button"
                aria-expanded={isOpen}
                onClick={toggleMenu}
                style={{ color: 'white' }} 
              >
                {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
