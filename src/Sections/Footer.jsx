import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from "../css/Footer.module.css";

const Footer = () => {

   const navigate = useNavigate();

   const handleHomeClick = (e) => {
      e.preventDefault();
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   const handleAboutClick = (e) => {
      e.preventDefault();
      navigate('/about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   const handleTeamClick = (e) => {
      e.preventDefault();
      navigate('/ourteam');
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   const handleContactClick = (e) => {
      e.preventDefault();
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <footer className="dHctcHgtNA dHctcHktMTI md:dHctcHktMTY dHctYmctZGFyay05MDA sm:dHctcHgtNg lg:dHctcHgtOA  " id='ab1'>
         <div className="dHctZ3JpZA dHctZ2FwLTg dHctbXgtYXV0bw lg:dHctbWF4LXctc2NyZWVuLXhs sm:dHctbWF4LXctM3hs md:dHctZ3JpZC1jb2xzLTM md:dHctZ2FwLXktMTI lg:dHctZ3JpZC1jb2xzLTQ">
            <div className="dHctZmxleA dHctZmxleC1jb2w lg:dHctbXgtYXV0bw">
               <div className="dHctZmxleA dHctaXRlbXMtY2VudGVy">
                  <div className="lg:dHctbXgtYXV0bw">

                     <div className="dHctcmVsYXRpdmU dHctZmxleA dHctdy1mdWxs dHctcHgtNA dHctcHktMTI dHctb3ZlcmZsb3ctaGlkZGVu dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA sm:dHctcHgtNg lg:dHctcHgtOA  mytransi ">
                        <blockquote>
                           <a className="dHctdGV4dC0yeGw dHctZm9udC1ibGFjaw lg:dHctYmxvY2s dHctZ3JvdXA" >
                              {/* <span className="dHctdGV4dC13aGl0ZQ dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTMwMA">
                              </span> */}

                              <span className="dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctdGV4dC1kYXJrLTMwMA group-hover:dHctdGV4dC13aGl0ZQ myblackicon"><img src="https://kodify.strangeweb.info/img//kodify%20(3).png" alt="" width={150} /></span>
                           </a>

                           {/* <footer className="dHctbXQtOA"> */}
                              <div className="dHctbXQtMw dHctdGV4dC1jZW50ZXI dHctbXQtOA__white">
                                 <p className='mydevcoloricon' >
                                    Kodify: Innovating the Future with Advanced AI Solutions and Cutting-Edge Development.
                                 </p>
                              </div>
                           {/* </footer> */}
                        </blockquote>
                     </div>

                     {/* <p className="dHctbXQtNg dHctdGV4dC1sZw dHctdGV4dC1kYXJrLTMwMA myblackicon"> </p> */}
                  </div>
               </div>
               <div className="dHctbXQtNg dHctdGV4dC1sZw md:dHctbXQtOA dHctdGV4dC1kYXJrLTMwMA">
               </div>
            </div>
            <div className="lg:dHctbXgtYXV0bw">
               <h6 className="dHctdGV4dC14bA dHctZm9udC1zZW1pYm9sZA dHctdGV4dC13aGl0ZQ myblackicon ">Get in touch</h6>
               <p className="dHctbXQtMg dHctdGV4dC1sZw dHctdGV4dC1kYXJrLTMwMA">
               </p>
               <p className="dHctbXQtNg dHctdGV4dC1sZw dHctdGV4dC1kYXJrLTMwMA myblackicon">+91 92050 20826</p>
               <p className="dHctdGV4dC1sZw dHctdGV4dC1kYXJrLTMwMA myblackicon">tusharkhurana@kodify.in
               </p>
               <p className="dHctbXQtNg dHctdGV4dC1sZw dHctdGV4dC1kYXJrLTMwMA myblackicon">+91 9625403109
               </p>
               <p className="dHctdGV4dC1sZw dHctdGV4dC1kYXJrLTMwMA myblackicon"> sumitparya@kodify.in</p>
            </div>
            <div className="lg:dHctbXgtYXV0bw">
               <h6 className="dHctdGV4dC14bA dHctZm9udC1zZW1pYm9sZA dHctdGV4dC13aGl0ZQ myblackicon ">Company</h6>
               <ul className="dHctbXQtMg dHctc3BhY2UteS0x dHctdGV4dC1sZw myblackicon">

                  <Link to="/" onClick={handleHomeClick}>
                     <li className={`${style.companyLink} dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTMwMA hover:dHctdGV4dC13aGl0ZQ myblackicon`}>Home</li>
                  </Link>

                  <Link to="/ourteam" onClick={handleTeamClick}>
                     <li className={`${style.companyLink} dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTMwMA hover:dHctdGV4dC13aGl0ZQ myblackicon`}>Our Team</li>
                  </Link>

                  <Link to="/about" onClick={handleAboutClick}>
                     <li className={`${style.companyLink} dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTMwMA hover:dHctdGV4dC13aGl0ZQ myblackicon`}>About us</li>
                  </Link>

                  <Link to="/contact" onClick={handleContactClick}>
                     <li className={`${style.companyLink} dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTMwMA hover:dHctdGV4dC13aGl0ZQ myblackicon`}>Contact us</li>
                  </Link>
               </ul>
            </div>
            <div className="sm:dHctY29sLXNwYW4tMw lg:dHctY29sLXNwYW4tMQ lg:dHctbXgtYXV0bw">
               <h6 className="dHctdGV4dC14bA dHctZm9udC1zZW1pYm9sZA dHctdGV4dC13aGl0ZQ myblackicon ">Follow us on social media</h6>
               <p className="dHctbXQtMg dHctdGV4dC1sZw dHctdGV4dC1kYXJrLTMwMA myblackicon">Stay connected and updated on our latest projects.</p>
               <div className="dHctdy1mdWxs dHctbXQtNA lg:dHctbXQtNg">
                  <div className="dHctZmxleA dHctanVzdGlmeS1zdGFydA dHctc3BhY2UteC00">
                     <a className="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ dHctcm91bmRlZC1mdWxs dHctYmctZGFyay03MDA hover:dHctYmctd2hpdGU dHctdGV4dC1kYXJrLTMwMA dHctZ3JvdXA dHctdy0xMg dHctaC0xMg" href="#0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTkwMA dHctdy02 dHctaC02" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                           <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                           <circle cx="12" cy="12" r="3"></circle>
                           <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                        </svg>
                     </a>
                     <a className="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ dHctcm91bmRlZC1mdWxs dHctYmctZGFyay03MDA hover:dHctYmctd2hpdGU dHctdGV4dC1kYXJrLTMwMA dHctZ3JvdXA dHctdy0xMg dHctaC0xMg" href="#0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTkwMA dHctdy02 dHctaC02" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                           <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                        </svg>
                     </a>
                     <a className="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ dHctcm91bmRlZC1mdWxs dHctYmctZGFyay03MDA hover:dHctYmctd2hpdGU dHctdGV4dC1kYXJrLTMwMA dHctZ3JvdXA dHctdy0xMg dHctaC0xMg" href="#0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTkwMA dHctdy02 dHctaC02" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                           <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                        </svg>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;