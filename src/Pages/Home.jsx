import React, { useState } from 'react';

import main_banner from '../assets/home_main.png';
import digital_marketing from '../assets/digital_marketing.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import style from "../css/Home.module.css";
import "../css/Home.css";



const Home = ({ text, maxLength }) => {

   const white = {
      color: 'white',
   };

   const [showAll, setShowAll] = useState(false);

   const toggleShowAll = () => {
      setShowAll(!showAll);
   };



   const divStyle = {
      width: '100%',
      height: '200px',
      backgroundColor: '#f0f0f0',
      border: '1px solid #ccc',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
   };


   return (


      <main class="dHctYmctZGFyay05MDA">

         <section class="dHctcHgtNA dHctcHQtMg dHctcGItMTI dHctbXgtYXV0bw dHctbWF4LXctc2NyZWVuLTJ4bA md:dHctcGItMTY sm:dHctcHgtNg lg:dHctcHgtOA">
            <div class="dHctcmVsYXRpdmU dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw sm:dHctb3ZlcmZsb3ctaGlkZGVu dHctYmctZGFyay03MDA">
               <svg class="dHctYWJzb2x1dGU dHctaW5zZXQteS0w dHctei0yMA dHctdy0xLzQ dHctaC1mdWxs dHctcmlnaHQtMS80 dHctdGV4dC1kYXJrLTcwMA" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor">
                  <polygon points="0,0 100,0 0,100"></polygon>
               </svg>
               <div class="dHctYWJzb2x1dGU dHctaW5zZXQteS0w dHctei0xMA dHctdy0xLzI dHctaC1mdWxs dHctbGVmdC0xLzI dHctYmctZGFyay04MDA dHctcm91bmRlZC1yLTN4bA"></div>
               <div class="dHctcmVsYXRpdmU dHctbWF4LXctc2NyZWVuLXhs dHctcHgtNA dHctcHktMTY dHctbXgtYXV0bw lg:dHctZ3JpZA lg:dHctZ3JpZC1jb2xzLTI lg:dHctYXV0by1yb3dzLW1heA lg:dHctZ2FwLXgtOA xl:dHctZ2FwLXgtMTI sm:dHctcHgtNg sm:dHctcHktMjQ lg:dHctcHktMzI lg:dHctcHgtOA">
                  <div class="dHctZmxleA dHctZmxleC1jb2w dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI lg:dHctaXRlbXMtc3RhcnQ">
                     <p class=" dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA mywelcome ">Welcome</p>
                     <div class="dHctei0zMA dHctdy1mdWxs dHctbWF4LXctbGc dHctbXgtYXV0bw dHctbXQtNg dHctdGV4dC1jZW50ZXI lg:dHctdGV4dC1sZWZ0 lg:dHctbWF4LXctbm9uZQ md:dHctbWF4LXctMnhs">
                        <h1 class="dHctdGV4dC00eGw dHctZm9udC1leHRyYWJvbGQ dHctdGV4dC13aGl0ZQ sm:dHctdGV4dC01eGw md:dHctdGV4dC02eGw lg:dHctdGV4dC01eGw xl:dHctdGV4dC02eGw custom-homepage-heading">Let's build and transform
                           your product a success.
                        </h1>
                        <p class="dHctbXQtNg dHctdGV4dC14bA dHctdGV4dC1kYXJrLTMwMA"> Kodify is your partner in digital innovation. we combine attractive
                           designs and latest development tech to deliver engaging solutions
                           for your website and application for the modern age.</p>
                     </div>
                     <div class="dHctei0zMA dHctbXQtMTA sm:dHctZmxleA sm:dHctanVzdGlmeS1jZW50ZXI lg:dHctanVzdGlmeS1zdGFydA">


                        <Link to="/contact" class="dHctZmxleA dHctanVzdGlmeS1jZW50ZXI dHctaXRlbXMtY2VudGVy dHctcHktMw dHctcHgtOA dHctdy1hdXRv dHctZm9udC1zZW1pYm9sZA dHctbGVhZGluZy1zbnVn dHctYmctd2hpdGU dHctcm91bmRlZC1mdWxs dHctdHJhbnNpdGlvbg dHctZWFzZS1pbi1vdXQ dHctZHVyYXRpb24tMjUw dHctdGV4dC1kYXJrLTkwMA hover:dHctdGV4dC13aGl0ZQ focus:dHctb3V0bGluZS1ub25l hover:dHctYmctZGFyay05MDA dHctaC0xNA"   >
                           Start a project
                        </Link>


                     </div>
                  </div>
                  <div class="dHctcmVsYXRpdmU dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctbWF4LXcteGw dHctbXgtYXV0bw dHctbXQtMTI sm:dHctbXQtMTY lg:dHctbXQtMA lg:dHctbWF4LXctbm9uZQ">
                     {/* <img  className='main_banner updown'
                     src={main_banner} /> */}
                     <img className='main_banner updown' src="https://kodify.strangeweb.info/img/r1.png" alt="" />
                  </div>
               </div>
            </div>
         </section>


         <section class="dHctbWF4LXctc2NyZWVuLXhs dHctcHgtNA dHctcHQtMTI dHctcGItMTA dHctbXgtYXV0bw md:dHctcGItMTI md:dHctcHQtMTY sm:dHctcHgtNg lg:dHctcHgtOA">
            <div class="dHctdy1mdWxs dHctbWF4LXcteGw dHctbXgtYXV0bw dHctdGV4dC1jZW50ZXI lg:dHctbWF4LXctM3hs md:dHctbWF4LXctMnhs">
               <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">Why Kodify</p>
               <h2 class="dHctbXQtNg dHctdGV4dC0zeGw dHctZm9udC1leHRyYWJvbGQ dHctdGV4dC13aGl0ZQ sm:dHctdGV4dC00eGw md:dHctdGV4dC01eGw"> Your Partner in the Age of AI </h2>
               <p class="dHctbXQtNg dHctdGV4dC14bA dHctdGV4dC1kYXJrLTMwMA">At kodify we are always updated with the latest tech in the market, we excel as your primary
                  partner for AI-driven solutions, Here's why partnering with us is the best choice:
               </p>
            </div>
            <div class="dHctbWF4LXctc2NyZWVuLWxn dHctbXgtYXV0bw dHctbXQtMTI lg:dHctbXQtMTQ">
               <div class="dHctZ3JpZA dHctZ3JpZC1jb2xzLTI dHctZ2FwLTQ md:dHctZ2FwLTY sm:dHctZ3JpZC1jb2xzLTM  ">


                  <span class="dHctb3ZlcmZsb3ctaGlkZGVu mytransi">
                     <div class="white dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctaC0zNg dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA hover:dHctYmctZGFyay04MDA dHctZ3JvdXA ">
                        <div>  <div className='icons   ' > <span class="material-symbols-outlined  ">radio_button_unchecked</span> </div>
                           <p>build AI integrated
                              websites andapps</p></div>
                     </div>
                  </span>

                  <span class="dHctb3ZlcmZsb3ctaGlkZGVu mytransi" >

                     <div class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctaC0zNg dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA hover:dHctYmctZGFyay04MDA dHctZ3JvdXA" style={{ padding: '20px' }}  >
                        <div class="white dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctaC0zNg dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA hover:dHctYmctZGFyay04MDA dHctZ3JvdXA  ">
                           <div>  <div className='icons' > <span class="material-symbols-outlined  ">
                              sync
                           </span> </div>
                              <p>integrate AI inyour
                                 existingwebsite and
                                 apps</p></div>
                        </div>
                     </div>
                  </span>
                  <span class="dHctb3ZlcmZsb3ctaGlkZGVu  mytransi" >
                     <div class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctaC0zNg dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA hover:dHctYmctZGFyay04MDA dHctZ3JvdXA" style={{ padding: '20px' }}  >
                        <div class="white dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctaC0zNg dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA hover:dHctYmctZGFyay04MDA dHctZ3JvdXA  ">
                           <div>  <div className='icons  ' > <span class="material-symbols-outlined  ">
                              close_fullscreen
                           </span> </div>
                              <p>integrateLLM and
                                 Imagegeneration</p></div>
                        </div>
                     </div>
                  </span>
                  <span class="dHctb3ZlcmZsb3ctaGlkZGVu  mytransi"  >
                     <div class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctaC0zNg dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA hover:dHctYmctZGFyay04MDA dHctZ3JvdXA" style={{ padding: '20px' }}  >
                        <div class="white dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctaC0zNg dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA hover:dHctYmctZGFyay04MDA dHctZ3JvdXA  ">
                           <div>  <div className='icons' > <span class="material-symbols-outlined  ">
                              query_stats
                           </span> </div>
                              <p>integrateOpenAI and
                                 other APIs</p></div>
                        </div>
                     </div>
                  </span>
                  <span class="dHctb3ZlcmZsb3ctaGlkZGVu  mytransi" >
                     <div class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctaC0zNg dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA hover:dHctYmctZGFyay04MDA dHctZ3JvdXA" style={{ padding: '20px' }}  >
                        <div class="white dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctaC0zNg dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA hover:dHctYmctZGFyay04MDA dHctZ3JvdXA  ">
                           <div>  <div className='icons' > <span class="material-symbols-outlined  ">
                              comic_bubble
                           </span> </div>
                              <p>AI solutions for your
                                 innovative ideas</p></div>
                        </div>
                     </div>
                  </span>
                  <span class="dHctb3ZlcmZsb3ctaGlkZGVu  mytransi" >
                     <div class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctaC0zNg dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA hover:dHctYmctZGFyay04MDA dHctZ3JvdXA" style={{ padding: '20px' }}  >
                        <div class="white dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMjAw dHctZWFzZS1pbi1vdXQ dHctaC0zNg dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA hover:dHctYmctZGFyay04MDA dHctZ3JvdXA  ">
                           <div>  <div className='icons' > <span class="material-symbols-outlined  ">
                              bubble_chart
                           </span> </div>
                              <p>AI solutions to
                                 modernise your
                                 business</p></div>
                        </div>
                     </div>
                  </span>
               </div>
            </div>
         </section>



         <div class="dHctcmVsYXRpdmU dHctdy1mdWxs dHctaC0xNg md:dHctaC0zMg lg:dHctaC00OA">
            <svg class="dHctYWJzb2x1dGU dHctdy1mdWxs dHctaC1mdWxs dHctdGV4dC1kYXJrLTgwMA" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor">
               <polygon points="0,0 0,100 100,100"></polygon>
            </svg>
         </div>



         <section class="dHctcHgtNA dHctcHktMTA md:dHctcHktMTI dHctYmctZGFyay04MDA sm:dHctcHgtNg lg:dHctcHgtOA">

            <div class="dHctbWF4LXcteGw dHctbXgtYXV0bw dHctdGV4dC1jZW50ZXI md:dHctbWF4LXctMnhs lg:dHctdGV4dC1sZWZ0 lg:dHctbWF4LXctc2NyZWVuLXhs">
               <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">Kodify Services</p>
               <div class="dHctZ3JpZA dHctdy1mdWxs dHctZ2FwLTY dHctbXQtNg lg:dHctZ3JpZC1jb2xzLTU">
                  <div class="lg:dHctY29sLXNwYW4tMw">
                     <h2 class="dHctdGV4dC0zeGw dHctZm9udC1leHRyYWJvbGQ dHctdGV4dC13aGl0ZQ sm:dHctdGV4dC00eGw md:dHctdGV4dC01eGw">We create digital products that help you get ahead</h2>
                  </div>
                  <div class="lg:dHctY29sLXNwYW4tMg">
                     <p class="dHctdGV4dC14bA dHctdGV4dC1kYXJrLTMwMA">From innovative concepts to complete designs, we handle every aspect of your digital presence.</p>
                  </div>
               </div>
            </div>

            <div class="dHctZ3JpZA dHctanVzdGlmeS1jZW50ZXI dHctdy1mdWxs dHctZ2FwLTEy dHctbXgtYXV0bw dHctbXQtMTI lg:dHctZ3JpZC1jb2xzLTI lg:dHctZ2FwLTg lg:dHctbXQtMTY lg:dHctbWF4LXctc2NyZWVuLXhs xl:dHctbWF4LXctc2NyZWVuLXhs lg:dHctanVzdGlmeS1zdGFydA">


               <div>


                  <div class={`dHctdy1mdWxs`}>
                     <div class="dHctbWF4LXctbGc dHctbXgtYXV0bw lg:dHctbXItYXV0bw xl:dHctbXgtYXV0bw">
                        <div class="dHctcmVsYXRpdmU dHctZmxleA dHctdy1mdWxs dHctcHgtOA dHctcHktNg dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA sm:dHctcHgtMTA  ">
                           <div class="dHctdGV4dC1jZW50ZXI sm:dHctZmxleA sm:dHctdGV4dC1sZWZ0 mytransi ">
                              <div class="dHctdy1mdWxs sm:dHctdy0xLzU  ">
                                 <div class=" abctwo dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy0xMg dHctaC0xMg dHctbXgtYXV0bw dHctYmctZ3JhZGllbnQtdG8tcg dHctcm91bmRlZC0yeGw sm:dHctbXgtMA dHctZnJvbS1kYXJrLTgwMA dHctdG8tZGFyay05MDA">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="dHctdy02 dHctaC02 dHctdGV4dC1kYXJrLTMwMA icon" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                       <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                                       <line x1="3" y1="8" x2="4" y2="8"></line>
                                       <line x1="3" y1="16" x2="4" y2="16"></line>
                                       <line x1="8" y1="3" x2="8" y2="4"></line>
                                       <line x1="16" y1="3" x2="16" y2="4"></line>
                                       <line x1="20" y1="8" x2="21" y2="8"></line>
                                       <line x1="20" y1="16" x2="21" y2="16"></line>
                                       <line x1="8" y1="20" x2="8" y2="21"></line>
                                       <line x1="16" y1="20" x2="16" y2="21"></line>
                                    </svg>
                                 </div>
                              </div>
                              <div class={`dHctdy1mdWxs dHctbXQtMw sm:dHctbXQtMA ${style.servicesBox}`}>
                                 <h5 class="dHctdGV4dC1sZw dHctZm9udC1zZW1pYm9sZA dHctdGV4dC13aGl0ZQ ">Software Development</h5>
                                 <p class="dHctbXQtMQ dHctdGV4dC1iYXNl dHctdGV4dC1kYXJrLTMwMA ">
                                    Our software development services are customized to
                                    meet your specific requirements. From concept to
                                    execution, we deliver scalable and robust solutions.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class={`dHctdy1mdWxs dHctbXQtOA lg:dHctbXQtNQ xl:dHctbXQtOA 2xl:tw-mt-10 xl:dHctcHItMTg 2xl:tw-pr-28`}>
                     <div class="dHctbWF4LXctbGc dHctbXgtYXV0bw lg:dHctbXItYXV0bw xl:dHctbXgtYXV0bw ">
                        <div class="dHctcmVsYXRpdmU dHctZmxleA dHctdy1mdWxs dHctcHgtOA dHctcHktNg dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA sm:dHctcHgtMTA  ">
                           <div class="dHctdGV4dC1jZW50ZXI sm:dHctZmxleA sm:dHctdGV4dC1sZWZ0 mytransi ">
                              <div class="dHctdy1mdWxs sm:dHctdy0xLzU">
                                 <div class=" abctwo dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy0xMg dHctaC0xMg dHctbXgtYXV0bw dHctYmctZ3JhZGllbnQtdG8tcg dHctcm91bmRlZC0yeGw sm:dHctbXgtMA dHctZnJvbS1kYXJrLTgwMA dHctdG8tZGFyay05MDA">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="dHctdy02 dHctaC02 dHctdGV4dC1kYXJrLTMwMA " width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                       <polyline points="7 8 3 12 7 16"></polyline>
                                       <polyline points="17 8 21 12 17 16"></polyline>
                                       <line x1="14" y1="4" x2="10" y2="20"></line>
                                    </svg>
                                 </div>
                              </div>
                              <div class={`dHctdy1mdWxs dHctbXQtMw sm:dHctbXQtMA ${style.servicesBox}`}>
                                 <h5 class="dHctdGV4dC1sZw dHctZm9udC1zZW1pYm9sZA dHctdGV4dC13aGl0ZQ ">Web Development</h5>
                                 <p class="dHctbXQtMQ dHctdGV4dC1iYXNl dHctdGV4dC1kYXJrLTMwMA ">Our web development offerings are designed to establish a
                                    strong online presence, driving your business growth and
                                    innovate new tech products from your ideas.
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class={`dHctdy1mdWxs dHctbXQtOA lg:dHctbXQtNQ xl:dHctbXQtOA 2xl:tw-mt-10 `}>
                     <div class="dHctbWF4LXctbGc dHctbXgtYXV0bw lg:dHctbXItYXV0bw xl:dHctbXgtYXV0bw">
                        <div class="dHctcmVsYXRpdmU dHctZmxleA dHctdy1mdWxs dHctcHgtOA dHctcHktNg dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA sm:dHctcHgtMTA  ">
                           <div class="dHctdGV4dC1jZW50ZXI sm:dHctZmxleA sm:dHctdGV4dC1sZWZ0 mytransi ">
                              <div class="dHctdy1mdWxs sm:dHctdy0xLzU">
                                 <div class=" abctwo dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdy0xMg dHctaC0xMg dHctbXgtYXV0bw dHctYmctZ3JhZGllbnQtdG8tcg dHctcm91bmRlZC0yeGw sm:dHctbXgtMA dHctZnJvbS1kYXJrLTgwMA dHctdG8tZGFyay05MDA">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="dHctdy02 dHctaC02 dHctdGV4dC1kYXJrLTMwMA icon" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                       <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"></path>
                                    </svg>
                                 </div>
                              </div>
                              <div class={`dHctdy1mdWxs dHctbXQtMw sm:dHctbXQtMA ${style.servicesBox}`}>
                                 <h5 class="dHctdGV4dC1sZw dHctZm9udC1zZW1pYm9sZA dHctdGV4dC13aGl0ZQ ">Digital Marketing</h5>
                                 <p class="dHctbXQtMQ dHctdGV4dC1iYXNl dHctdGV4dC1kYXJrLTMwMA  ">Leveraging data-driven insights and creative strategies, we
                                    propel your brand’s visibility and engagement in the digital
                                    realm.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>




               </div>

               <div class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctbWF4LXctc2NyZWVuLW1k lg:dHctbWF4LXctZnVsbA"  >
                  <div class="dHctZ3JpZA dHctdy1mdWxs dHctaC1mdWxs dHctZ3JpZC1mbG93LWNvbA dHctZ3JpZC1yb3dzLTI dHctZ2FwLTQ">
                     <div class="dHctcmVsYXRpdmU dHctcm93LXNwYW4tMg dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw"><img alt="Office work" loading="lazy" width="640" height="960" decoding="async" data-nimg="1" class="dHctb2JqZWN0LWNvdmVy dHctdy1mdWxs dHctaC1mdWxs dHctcm91bmRlZC0zeGw dHctb2JqZWN0LXJpZ2h0" className='home_section12 imgs' sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw" srcSet="https://strangeweb.info/marketing.png" /></div>
                     <div class="dHctcmVsYXRpdmU dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw"><img alt="More office work" loading="lazy" width="640" height="427" decoding="async" data-nimg="1" class="dHctb2JqZWN0LWNvdmVy dHctdy1mdWxs dHctaC1mdWxs dHctcm91bmRlZC0zeGw dHctb2JqZWN0LWNlbnRlcg" className='home_section12 imgs' sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw" srcSet="https://strangeweb.info/1.png" /></div>
                     <div class="dHctcmVsYXRpdmU dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw"><img alt="Group brainstorming" loading="lazy" width="640" height="480" decoding="async" data-nimg="1" class="dHctb2JqZWN0LWNvdmVy dHctdy1mdWxs dHctaC1mdWxs dHctcm91bmRlZC0zeGw dHctb2JqZWN0LWNlbnRlcg" className='home_section12 imgs' sizes="(min-width: 1280px) 19rem, (min-width: 1024px) 25vw, (min-width: 768px) 23.5rem, 50vw" srcSet="https://strangeweb.info/web.png" /></div>
                  </div>
               </div>
            </div>


            <div className='fx_center' >
               <div class="dHctei0zMA dHctbXQtMTA sm:dHctZmxleA sm:dHctanVzdGlmeS1jZW50ZXI lg:dHctanVzdGlmeS1zdGFydA">
                  <Link to="/services" class="mt_10 dHctZmxleA dHctanVzdGlmeS1jZW50ZXI dHctaXRlbXMtY2VudGVy dHctcHktMw dHctcHgtOA dHctdy1hdXRv dHctZm9udC1zZW1pYm9sZA dHctbGVhZGluZy1zbnVn dHctYmctd2hpdGU dHctcm91bmRlZC1mdWxs dHctdHJhbnNpdGlvbg dHctZWFzZS1pbi1vdXQ dHctZHVyYXRpb24tMjUw dHctdGV4dC1kYXJrLTkwMA hover:dHctdGV4dC13aGl0ZQ focus:dHctb3V0bGluZS1ub25l hover:dHctYmctZGFyay05MDA dHctaC0xNA" style={white} >Explore More</Link>
               </div>
            </div>

         </section>




         <div class="dHctcmVsYXRpdmU dHctdy1mdWxs dHctaC0xNg   dHctYmctZGFyay04MDA md:dHctaC0zMg lg:dHctaC00OA">
            <svg class="dHctYWJzb2x1dGU dHctdy1mdWxs dHctaC1mdWxs dHctdGV4dC1kYXJrLTkwMA" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor " >
               {/* <polygon points="0,100 100,100 100,0"></polygon> */}
            </svg>
         </div>

         {/* <section class="dHctcHQtMTA dHctcGItMTI dHctYmctZ3JhZGllbnQtdG8tYg md:dHctcHQtMTI md:dHctcGItMTY dHctZnJvbS1kYXJrLTkwMA dHctdG8tZGFyay04MDA">
            <div class="dHctdy1mdWxs dHctbWF4LXctc2NyZWVuLXhs dHctcHgtNA dHctbXgtYXV0bw sm:dHctcHgtNg lg:dHctcHgtOA">
               <div class="dHctdy1mdWxs dHctbWF4LXcteGw dHctbXgtYXV0bw dHctdGV4dC1jZW50ZXI lg:dHctbWF4LXctM3hs md:dHctbWF4LXctMnhs">
                  <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">Leveraging the power of AI </p>
                  <h2 class="dHctbXQtNg dHctdGV4dC0zeGw dHctZm9udC1leHRyYWJvbGQ dHctdGV4dC13aGl0ZQ sm:dHctdGV4dC00eGw md:dHctdGV4dC01eGw"> The Impact of AI in Modern Society </h2> 
                  <p class="dHctbXQtNg dHctdGV4dC14bA dHctdGV4dC1kYXJrLTMwMA"></p>
               </div>
               <div class="dHctZ3JpZA dHctbWF4LXcteGw dHctZ2FwLTEw dHctbXgtYXV0bw dHctbXQtMTI lg:dHctbXQtMTY lg:dHctZ3JpZC1jb2xzLTM lg:dHctZ2FwLXgtMTI lg:dHctbWF4LXctbm9uZQ">
                  <div class="dHctdy1mdWxs">
                     <span class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctbXgtYXV0bw dHctc2hhZG93LXhs dHctYmctZ3JhZGllbnQtdG8tcg dHctcm91bmRlZC0zeGw dHctdy0xOA dHctaC0xOA dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">
                        <svg xmlns="http://www.w3.org/2000/svg" class="dHctdy0xMA dHctaC0xMA dHctdGV4dC1kYXJrLTMwMA" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                           <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                           <rect x="9" y="3" width="6" height="4" rx="2"></rect>
                           <line x1="9" y1="12" x2="9.01" y2="12"></line>
                           <line x1="13" y1="12" x2="15" y2="12"></line>
                           <line x1="9" y1="16" x2="9.01" y2="16"></line>
                           <line x1="13" y1="16" x2="15" y2="16"></line>
                        </svg>
                     </span>
                     <h3 class="dHctbXQtNQ dHctdGV4dC0yeGw dHctZm9udC1zZW1pYm9sZA dHctdGV4dC1jZW50ZXI dHctdGV4dC13aGl0ZQ">Enhanced Efficiency</h3>
                     <p class="dHctbXQtMg dHctdGV4dC1sZw dHctbGVhZGluZy1yZWxheGVk dHctdGV4dC1jZW50ZXI dHctdGV4dC1kYXJrLTMwMA">AI technologies have revolutionized industries by automating repetitive tasks, optimizing workflows, and improving operational efficiency. </p>
                  </div>
                  <div class="dHctdy1mdWxs">
                     <span class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctbXgtYXV0bw dHctc2hhZG93LXhs dHctYmctZ3JhZGllbnQtdG8tcg dHctcm91bmRlZC0zeGw dHctdy0xOA dHctaC0xOA dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">
                        <svg xmlns="http://www.w3.org/2000/svg" class="dHctdy0xMA dHctaC0xMA dHctdGV4dC1kYXJrLTMwMA" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                           <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                           <line x1="3" y1="8" x2="4" y2="8"></line>
                           <line x1="3" y1="16" x2="4" y2="16"></line>
                           <line x1="8" y1="3" x2="8" y2="4"></line>
                           <line x1="16" y1="3" x2="16" y2="4"></line>
                           <line x1="20" y1="8" x2="21" y2="8"></line>
                           <line x1="20" y1="16" x2="21" y2="16"></line>
                           <line x1="8" y1="20" x2="8" y2="21"></line>
                           <line x1="16" y1="20" x2="16" y2="21"></line>
                        </svg>
                     </span>
                     <h3 class="dHctbXQtNQ dHctdGV4dC0yeGw dHctZm9udC1zZW1pYm9sZA dHctdGV4dC1jZW50ZXI dHctdGV4dC13aGl0ZQ">Personalization and User Experience </h3>
                     <p class="dHctbXQtMg dHctdGV4dC1sZw dHctbGVhZGluZy1yZWxheGVk dHctdGV4dC1jZW50ZXI dHctdGV4dC1kYXJrLTMwMA">We creatively dHctdHJhbnNmb3Jt your vision and ideas into design drafts. We iterate until you are satisfied.</p>
                  </div>
                  <div class="dHctdy1mdWxs">
                     <span class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctbXgtYXV0bw dHctc2hhZG93LXhs dHctYmctZ3JhZGllbnQtdG8tcg dHctcm91bmRlZC0zeGw dHctdy0xOA dHctaC0xOA dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">
                        <svg xmlns="http://www.w3.org/2000/svg" class="dHctdy0xMA dHctaC0xMA dHctdGV4dC1kYXJrLTMwMA" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                           <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"></path>
                           <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"></path>
                           <circle cx="15" cy="9" r="1"></circle>
                        </svg>
                     </span>
                     <h3 class="dHctbXQtNQ dHctdGV4dC0yeGw dHctZm9udC1zZW1pYm9sZA dHctdGV4dC1jZW50ZXI dHctdGV4dC13aGl0ZQ">Ethical Considerations and Governance </h3>
                     <p class="dHctbXQtMg dHctdGV4dC1sZw dHctbGVhZGluZy1yZWxheGVk dHctdGV4dC1jZW50ZXI dHctdGV4dC1kYXJrLTMwMA">As AI continues to advance, ethical concerns around bias, privacy, and accountability become paramount.</p>
                  </div>
               </div>
            </div>
         </section> */}











         <section class="dHctcHgtNA dHctcHQtMTI dHctcGItMTA md:dHctcGItMTI md:dHctcHQtMTY dHctYmctZGFyay04MDA sm:dHctcHgtNg lg:dHctcHgtOA  ">




            <div class="dHctbWF4LXcteGw dHctbXgtYXV0bw dHctdGV4dC1jZW50ZXI md:dHctbWF4LXctMnhs lg:dHctdGV4dC1sZWZ0 lg:dHctbWF4LXctc2NyZWVuLXhs">
               <div class="dHctdy1mdWxs dHctbWF4LXcteGw dHctbXgtYXV0bw dHctdGV4dC1jZW50ZXI lg:dHctbWF4LXctM3hs md:dHctbWF4LXctMnhs">
                  <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA"> Our portfolio  </p>
                  <h2 class="dHctbXQtNg dHctdGV4dC0zeGw dHctZm9udC1leHRyYWJvbGQ dHctdGV4dC13aGl0ZQ sm:dHctdGV4dC00eGw md:dHctdGV4dC01eGw">Check out some of our recent &amp; current work</h2>
               </div>
               <div className='myswiperspacing'>
                  <Swiper
                     slidesPerView={1}
                     spaceBetween={30}
                     loop={true}
                     Autoplay={{ delay: 3000 }}
                     navigation={true}
                     // navigation={{
                     //    nextEl:  `${style.swiperButtonNext}`,
                     //    prevEl:  `${style.swiperButtonPrev}`,
                     //  }}
                     // navigation={{
                     //    nextEl: '.swiper-button-next',
                     //    prevEl: '.swiper-button-prev',
                     //  }}
                     pagination={true}
                     modules={[Navigation, Pagination, Autoplay]}
                     className="mySwiper"
                  >

                     <SwiperSlide   >
                        <div>
                           <div>
                              <div class="dHctcmVsYXRpdmU dHctbWF4LXctbGc dHctbXgtYXV0bw lg:dHctbWF4LXctbm9uZQ lg:dHctbXgtMA">
                                 <div class="dHctcmVsYXRpdmU dHctdy1mdWxs dHctaC02NA dHctYmctY2VudGVy dHctYmctY292ZXI dHctc2hhZG93LXhs lg:dHctcm91bmRlZC0zeGw dHctcm91bmRlZC10LTN4bA lg:dHctcHQt[46%] lg:dHctdy0[90%] lg:dHctaC1mdWxs">
                                    <img alt="Nedia" loading="lazy" decoding="async" data-nimg="fill" class="dHctYWJzb2x1dGU dHctaW5zZXQtMA dHctb2JqZWN0LWNvdmVy dHctb2JqZWN0LWNlbnRlcg dHctdy1mdWxs dHctaC1mdWxs lg:dHctcm91bmRlZC0zeGw dHctcm91bmRlZC10LTN4bA style1" sizes="(min-width: 1280px) 72rem, (min-width: 1024px) 90vw, (min-width: 640px) 32rem, calc(100vw - 2rem)" srcSet="https://strangeweb.info/images/blog/trullymarri.png" />
                                    {/* <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">Metrimonial</p> */}
                                 </div>
                                 <div class="dHctcmVsYXRpdmU dHctYm90dG9tLTA dHctei0yMA dHctYmxvY2s dHctdy1mdWxs dHctaC1hdXRv dHctcC02 dHctc2hhZG93LXhs lg:dHctcm91bmRlZC0zeGw dHctcm91bmRlZC1iLTN4bA sm:dHctcC04 lg:dHctcC0xMg dHctYmctZGFyay03MDA lg:dHctYWJzb2x1dGU lg:LXR3LWJvdHRvbS0yNQ lg:dHctdy0xLzM lg:dHctaC1mdWxs dHctcmlnaHQtMA">
                                    <div class="dHctaC1mdWxs lg:dHctZmxleA lg:dHctZmxleC1jb2w lg:dHctanVzdGlmeS1iZXR3ZWVu">
                                       <div class="dHctaGlkZGVu lg:dHctYmxvY2s" style={{textAlign:"center"}}>
                                          <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">Metrimonial</p>
                                       </div>
                                       <div class="dHctZmxleA dHctZmxleC13cmFw dHctdy1mdWxs" style={{textAlign:"center"}}>
                                          <h3 class="dHctdGV4dC0zeGw dHctZm9udC1ib2xk dHctdGV4dC13aGl0ZQ lg:dHctdGV4dC00eGw">Truely Marry</h3>
                                       </div>
                                       <div class="dHctZmxleA dHctbXQtOA xl:dHctbXQtNA"><a href='https://www.truelymarry.com/' class="dHctZmxleA dHctcmVsYXRpdmU dHctanVzdGlmeS1jZW50ZXI dHctaXRlbXMtY2VudGVy dHctcHgtOA dHctdy1hdXRv dHctdGV4dC1iYXNl dHctZm9udC1tZWRpdW0 dHctbGVhZGluZy1zbnVn dHctdGV4dC13aGl0ZQ dHctZ3JvdXA dHctaC0xMg md:dHctaC0xNA" ><span class="dHctZmxleA dHctanVzdGlmeS1jZW50ZXI dHctaXRlbXMtY2VudGVy dHctcHktMw dHctcHgtOA dHctdy1hdXRv dHctZm9udC1zZW1pYm9sZA dHctbGVhZGluZy1zbnVn dHctYmctd2hpdGU dHctcm91bmRlZC1mdWxs dHctdHJhbnNpdGlvbg dHctZWFzZS1pbi1vdXQ dHctZHVyYXRpb24tMjUw dHctdGV4dC1kYXJrLTkwMA hover:dHctdGV4dC13aGl0ZQ focus:dHctb3V0bGluZS1ub25l hover:dHctYmctZGFyay05MDA dHctaC0xNA ">Visit Site</span></a></div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide>    <div class="dHctcmVsYXRpdmU dHctbWF4LXctbGc dHctbXgtYXV0bw lg:dHctbWF4LXctbm9uZQ lg:dHctbXgtMA">
                        <div class="dHctcmVsYXRpdmU dHctdy1mdWxs dHctaC02NA dHctYmctY2VudGVy dHctYmctY292ZXI dHctc2hhZG93LXhs lg:dHctcm91bmRlZC0zeGw dHctcm91bmRlZC10LTN4bA lg:dHctcHQt[46%] lg:dHctdy0[90%] lg:dHctaC1mdWxs lg:dHctbWwtYXV0bw">
                           <img alt="Pantone" loading="lazy" decoding="async" data-nimg="fill" class="dHctYWJzb2x1dGU dHctaW5zZXQtMA dHctb2JqZWN0LWNvdmVy dHctb2JqZWN0LWNlbnRlcg dHctdy1mdWxs dHctaC1mdWxs lg:dHctcm91bmRlZC0zeGw dHctcm91bmRlZC10LTN4bA style2" sizes="(min-width: 1280px) 72rem, (min-width: 1024px) 90vw, (min-width: 640px) 32rem, calc(100vw - 2rem)" src="https://strangeweb.info/imageforstrangeweb/seedsupprt.png" />
                           {/* <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">Informative </p> */}
                        </div>
                        <div class="dHctcmVsYXRpdmU dHctYm90dG9tLTA dHctei0yMA dHctYmxvY2s dHctdy1mdWxs dHctaC1hdXRv dHctcC02 dHctc2hhZG93LXhs lg:dHctcm91bmRlZC0zeGw dHctcm91bmRlZC1iLTN4bA sm:dHctcC04 lg:dHctcC0xMg dHctYmctZGFyay03MDA lg:dHctYWJzb2x1dGU lg:LXR3LWJvdHRvbS0yNQ lg:dHctdy0xLzM lg:dHctaC1mdWxs dHctbGVmdC0w">
                           <div class="dHctaC1mdWxs lg:dHctZmxleA lg:dHctZmxleC1jb2w lg:dHctanVzdGlmeS1iZXR3ZWVu">
                              <div class="dHctaGlkZGVu lg:dHctYmxvY2s">
                                 <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">Informative </p>
                              </div>
                              <div class="dHctZmxleA dHctZmxleC13cmFw dHctdy1mdWxs">
                                 <h3 class="dHctdGV4dC0zeGw dHctZm9udC1ib2xk dHctdGV4dC13aGl0ZQ lg:dHctdGV4dC00eGw">Saeed Support</h3>
                                 <p class="dHctbXQtMg dHctdGV4dC1iYXNl lg:dHctbXQtNA dHctdGV4dC1kYXJrLTMwMA md:dHctdGV4dC1sZw"></p>
                              </div>
                              <div class="dHctZmxleA dHctbXQtOA xl:dHctbXQtNA"><a href='https://saeedsupport.com/' class="dHctZmxleA dHctcmVsYXRpdmU dHctanVzdGlmeS1jZW50ZXI dHctaXRlbXMtY2VudGVy dHctcHgtOA dHctdy1hdXRv dHctdGV4dC1iYXNl dHctZm9udC1tZWRpdW0 dHctbGVhZGluZy1zbnVn dHctdGV4dC13aGl0ZQ dHctZ3JvdXA dHctaC0xMg md:dHctaC0xNA"><span class="mt_10 dHctZmxleA dHctanVzdGlmeS1jZW50ZXI dHctaXRlbXMtY2VudGVy dHctcHktMw dHctcHgtOA dHctdy1hdXRv dHctZm9udC1zZW1pYm9sZA dHctbGVhZGluZy1zbnVn dHctYmctd2hpdGU dHctcm91bmRlZC1mdWxs dHctdHJhbnNpdGlvbg dHctZWFzZS1pbi1vdXQ dHctZHVyYXRpb24tMjUw dHctdGV4dC1kYXJrLTkwMA hover:dHctdGV4dC13aGl0ZQ focus:dHctb3V0bGluZS1ub25l hover:dHctYmctZGFyay05MDA dHctaC0xNA ">Visit Site</span></a></div>
                           </div>
                        </div>
                     </div></SwiperSlide>
                     <SwiperSlide>     <div class="dHctcmVsYXRpdmU dHctbWF4LXctbGc dHctbXgtYXV0bw lg:dHctbWF4LXctbm9uZQ lg:dHctbXgtMA">
                        <div class="dHctcmVsYXRpdmU dHctdy1mdWxs dHctaC02NA dHctYmctY2VudGVy dHctYmctY292ZXI dHctc2hhZG93LXhs lg:dHctcm91bmRlZC0zeGw dHctcm91bmRlZC10LTN4bA lg:dHctcHQt[46%] lg:dHctdy0[90%] lg:dHctaC1mdWxs">
                           <img alt="Sastastic" loading="lazy" decoding="async" data-nimg="fill" class="dHctYWJzb2x1dGU dHctaW5zZXQtMA dHctb2JqZWN0LWNvdmVy dHctb2JqZWN0LWNlbnRlcg dHctdy1mdWxs dHctaC1mdWxs lg:dHctcm91bmRlZC0zeGw dHctcm91bmRlZC10LTN4bA style3" sizes="(min-width: 1280px) 72rem, (min-width: 1024px) 90vw, (min-width: 640px) 32rem, calc(100vw - 2rem)" src="https://strangeweb.info/imageforstrangeweb/codt.png" />
                           {/* <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA"></p> */}
                        </div>
                        <div class="dHctcmVsYXRpdmU dHctYm90dG9tLTA dHctei0yMA dHctYmxvY2s dHctdy1mdWxs dHctaC1hdXRv dHctcC02 dHctc2hhZG93LXhs lg:dHctcm91bmRlZC0zeGw dHctcm91bmRlZC1iLTN4bA sm:dHctcC04 lg:dHctcC0xMg dHctYmctZGFyay03MDA lg:dHctYWJzb2x1dGU lg:LXR3LWJvdHRvbS0yNQ lg:dHctdy0xLzM lg:dHctaC1mdWxs dHctcmlnaHQtMA">
                           <div class="dHctaC1mdWxs lg:dHctZmxleA lg:dHctZmxleC1jb2w lg:dHctanVzdGlmeS1iZXR3ZWVu">
                              <div class="dHctaGlkZGVu lg:dHctYmxvY2s">
                                 <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">Education</p>
                              </div>
                              <div class="dHctZmxleA dHctZmxleC13cmFw dHctdy1mdWxs">
                                 <h3 class="dHctdGV4dC0zeGw dHctZm9udC1ib2xk dHctdGV4dC13aGl0ZQ lg:dHctdGV4dC00eGw">CODT</h3>
                                 <p class="dHctbXQtMg dHctdGV4dC1iYXNl lg:dHctbXQtNA dHctdGV4dC1kYXJrLTMwMA md:dHctdGV4dC1sZw">Welcome to Academy. It will help you to learn in a new ways</p>
                              </div>
                              <div class="dHctZmxleA dHctbXQtOA xl:dHctbXQtNA"><a class="dHctZmxleA dHctcmVsYXRpdmU dHctanVzdGlmeS1jZW50ZXI dHctaXRlbXMtY2VudGVy dHctcHgtOA dHctdy1hdXRv dHctdGV4dC1iYXNl dHctZm9udC1tZWRpdW0 dHctbGVhZGluZy1zbnVn dHctdGV4dC13aGl0ZQ dHctZ3JvdXA dHctaC0xMg md:dHctaC0xNA" href="https://codt.in/"><span class="mt_10 dHctZmxleA dHctanVzdGlmeS1jZW50ZXI dHctaXRlbXMtY2VudGVy dHctcHktMw dHctcHgtOA dHctdy1hdXRv dHctZm9udC1zZW1pYm9sZA dHctbGVhZGluZy1zbnVn dHctYmctd2hpdGU dHctcm91bmRlZC1mdWxs dHctdHJhbnNpdGlvbg dHctZWFzZS1pbi1vdXQ dHctZHVyYXRpb24tMjUw dHctdGV4dC1kYXJrLTkwMA hover:dHctdGV4dC13aGl0ZQ focus:dHctb3V0bGluZS1ub25l hover:dHctYmctZGFyay05MDA dHctaC0xNA ">Visit Site</span></a></div>
                           </div>
                        </div>
                     </div></SwiperSlide>


                  </Swiper>
               </div>
            </div>
            <div class="dHctei0zMA dHctbXQtMTA sm:dHctZmxleA sm:dHctanVzdGlmeS1jZW50ZXI lg:dHctanVzdGlmeS1zdGFydA tailwindcenter12 ">
               <button href='#' className="mt_10 dHctZmxleA dHctanVzdGlmeS1jZW50ZXI dHctaXRlbXMtY2VudGVy dHctcHktMw dHctcHgtOA dHctdy1hdXRv dHctZm9udC1zZW1pYm9sZA dHctbGVhZGluZy1zbnVn dHctYmctd2hpdGU dHctcm91bmRlZC1mdWxs dHctdHJhbnNpdGlvbg dHctZWFzZS1pbi1vdXQ dHctZHVyYXRpb24tMjUw dHctdGV4dC1kYXJrLTkwMA hover:dHctdGV4dC13aGl0ZQ focus:dHctb3V0bGluZS1ub25l hover:dHctYmctZGFyay05MDA dHctaC0xNA  " style={white} >Explore More</button>
            </div>
         </section>

         <div class="dHctcmVsYXRpdmU dHctdy1mdWxs dHctaC0xNg dHctYmctZGFyay04MDA md:dHctaC0zMg lg:dHctaC00OA">
            <svg class="dHctYWJzb2x1dGU dHctdy1mdWxs dHctaC1mdWxs dHctdGV4dC1kYXJrLTkwMA" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor">
               <polygon points="0,100 100,100 100,0"></polygon>
            </svg>
         </div>

         <section class="dHctbWF4LXctc2NyZWVuLXhs dHctcHgtNA dHctcHQtMTA dHctcGItMTI dHctbXgtYXV0bw md:dHctcGItMTY md:dHctcHQtMTI sm:dHctcHgtNg lg:dHctcHgtOA">
            <div class="dHctdy1mdWxs dHctbWF4LXcteGw dHctbXgtYXV0bw dHctdGV4dC1jZW50ZXI lg:dHctbWF4LXctM3hs md:dHctbWF4LXctMnhs">
               <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">Kodify Work Process</p>
               <h2 class="dHctbXQtNg dHctdGV4dC0zeGw dHctZm9udC1leHRyYWJvbGQ dHctdGV4dC13aGl0ZQ sm:dHctdGV4dC00eGw md:dHctdGV4dC01eGw">
                  Why you should trust us for Your
                  Business And Startup
               </h2>
            </div>


            <div class="dHctZ3JpZA dHctZ2FwLTQ dHctbXQtMTI lg:dHctbXQtMTQ xl:dHctZ3JpZC1jb2xzLTM xl:dHctZ3JpZC1yb3dzLTI sm:dHctZ2FwLTY lg:dHctZ2FwLTg md:dHctZ3JpZC1jb2xzLTI md:dHctZ3JpZC1yb3dzLTM  ">


               <div class="md:dHctcm93LXNwYW4tMg mytransi ">
                  <div class="dHctdy1mdWxs dHctaC1mdWxs dHctcHgtNA dHctcHktMTI dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA lg:dHctcHktMTY lg:dHctcHgtNg  ">
                     <div class="dHctbWF4LXctbWQ dHctbXgtYXV0bw dHctdGV4dC1jZW50ZXI lg:dHctbWF4LXctZnVsbA">
                        <h3 class="dHctdGV4dC0yeGw dHctZm9udC1ib2xk dHctdGV4dC13aGl0ZQ lg:dHctdGV4dC00eGw sm:dHctdGV4dC0zeGw  ">Discover why so many companies trust us</h3>
                        <p class="dHctbXQtMw dHctdGV4dC1sZw dHctdGV4dC1kYXJrLTMwMA lg:dHctbXQtNA  ">We pride ourselves on delivering exceptional and tangible results that matter to you.</p>
                     </div>
                     <div class="dHctbXQtOA dHctdGV4dC1jZW50ZXI sm:dHctbXgtYXV0bw sm:dHctZ3JpZA sm:dHctZ3JpZC1jb2xzLTM sm:dHctZ2FwLTg md:dHctYmxvY2s">
                        <div class="dHctZmxleA dHctZmxleC1jb2w">
                           <p class="dHctb3JkZXItMg dHctbXQtMg dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctbGVhZGluZy02 dHctdGV4dC1kYXJrLTQwMA  ">Happy clients</p>
                           <p class="dHctb3JkZXItMQ dHctdGV4dC01eGw dHctZm9udC1ib2xk dHctbGVhZGluZy1ub25l dHctdGV4dC13aGl0ZQ  ">70</p>
                        </div>
                        <div class="dHctZmxleA dHctZmxleC1jb2w dHctbXQtMTA sm:dHctbXQtMA md:dHctbXQtMTA  ">
                           <p class="dHctb3JkZXItMg dHctbXQtMg dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctbGVhZGluZy02 dHctdGV4dC1kYXJrLTQwMA  ">Projects completed</p>
                           <p class="dHctb3JkZXItMQ dHctdGV4dC01eGw dHctZm9udC1ib2xk dHctbGVhZGluZy1ub25l dHctdGV4dC13aGl0ZQ  ">50</p>
                        </div>
                        <div class="dHctZmxleA dHctZmxleC1jb2w dHctbXQtMTA sm:dHctbXQtMA md:dHctbXQtMTA  ">
                           <p class="dHctb3JkZXItMg dHctbXQtMg dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctbGVhZGluZy02 dHctdGV4dC1kYXJrLTQwMA  ">Years in business</p>
                           <p class="dHctb3JkZXItMQ dHctdGV4dC01eGw dHctZm9udC1ib2xk dHctbGVhZGluZy1ub25l dHctdGV4dC13aGl0ZQ  ">20</p>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="dHctcmVsYXRpdmU dHctZmxleA dHctdy1mdWxs dHctcHgtNA dHctcHktMTI dHctb3ZlcmZsb3ctaGlkZGVu dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA sm:dHctcHgtNg lg:dHctcHgtOA mytransi ">
                  <blockquote>
                     <div className='icons'>
                        <span class="material-symbols-outlined  ">search</span>
                     </div>
                     <p class="dHctbWF4LXctbWQ dHctbXgtYXV0bw dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctbGVhZGluZy05 dHctdGV4dC1jZW50ZXI dHctdGV4dC1kYXJrLTMwMA headingp    ">Expertise and Innovation</p>
                     <footer class="dHctbXQtOA  ">
                        <div class="dHctbXQtMw dHctdGV4dC1jZW50ZXI dHctbXQtOA__white mydevcoloricon ">
                           <p className='mydevcoloricon' >
                              Our team combines industry
                              expertise with innovative
                              solutions to deliver
                              exceptional results.</p>
                        </div>
                     </footer>
                  </blockquote>
               </div>

               <div class="dHctcmVsYXRpdmU dHctZmxleA dHctdy1mdWxs dHctcHgtNA dHctcHktMTI dHctb3ZlcmZsb3ctaGlkZGVu dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA sm:dHctcHgtNg lg:dHctcHgtOA  mytransi ">
                  <blockquote>
                     <div className='icons'>
                        <span class="material-symbols-outlined  ">check_circle</span>
                     </div>
                     <p class="dHctbWF4LXctbWQ dHctbXgtYXV0bw dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctbGVhZGluZy05 dHctdGV4dC1jZW50ZXI dHctdGV4dC1kYXJrLTMwMA headingp    ">Proven Track Record</p>
                     <footer class="dHctbXQtOA">
                        <div class="dHctbXQtMw dHctdGV4dC1jZW50ZXI dHctbXQtOA__white">
                           <p className='mydevcoloricon' >
                              With a robust portfolio of
                              successful projects, we are
                              dedicated to maintaining high
                              standards of quality.
                           </p>
                        </div>
                     </footer>
                  </blockquote>
               </div>

               <div class="dHctcmVsYXRpdmU dHctZmxleA dHctdy1mdWxs dHctcHgtNA dHctcHktMTI dHctb3ZlcmZsb3ctaGlkZGVu dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA sm:dHctcHgtNg lg:dHctcHgtOA mytransi ">
                  <blockquote>
                     <div className='icons'>
                        <span class="material-symbols-outlined  ">favorite</span>
                     </div>
                     <p class="dHctbWF4LXctbWQ dHctbXgtYXV0bw dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctbGVhZGluZy05 dHctdGV4dC1jZW50ZXI dHctdGV4dC1kYXJrLTMwMA headingp    ">Customer-Centric Approach</p>
                     <footer class="dHctbXQtOA">
                        <div class="dHctbXQtMw dHctdGV4dC1jZW50ZXI dHctbXQtOA__white">
                           <p className='mydevcoloricon' >
                              Our adaptable methodology
                              ensures project deadlines are
                              met while allowing for future
                              growth and scalability.</p>
                        </div>
                     </footer>
                  </blockquote>
               </div>

               <div class="dHctcmVsYXRpdmU dHctZmxleA dHctdy1mdWxs dHctcHgtNA dHctcHktMTI dHctb3ZlcmZsb3ctaGlkZGVu dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA sm:dHctcHgtNg lg:dHctcHgtOA mytransi ">
                  <blockquote>
                     <div className='icons'>
                        <span class="material-symbols-outlined  ">trending_up</span>
                     </div>
                     <p class="dHctbWF4LXctbWQ dHctbXgtYXV0bw dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctbGVhZGluZy05 dHctdGV4dC1jZW50ZXI dHctdGV4dC1kYXJrLTMwMA headingp    ">Scalability and Timely Delivery</p>
                     <footer class="dHctbXQtOA">
                        <div class="dHctbXQtMw dHctdGV4dC1jZW50ZXI dHctbXQtOA__white">
                           <p className='mydevcoloricon' >
                              We prioritize understanding
                              your business needs,
                              ensuring our solutions are
                              aligned with your goals.</p>
                        </div>
                     </footer>
                  </blockquote>
               </div>

            </div>


         </section>

         <section class="dHctbWF4LXctc2NyZWVuLXhs dHctcHgtNA dHctcHktMTI dHctbXgtYXV0bw md:dHctcHktMTY sm:dHctcHgtNg lg:dHctcHgtOA">
            <div class="dHctcmVsYXRpdmU dHctcHktMTY dHctcm91bmRlZC0zeGw dHctYmctZGFyay03MDA lg:dHctcHktMjA">
               <svg class="dHctYWJzb2x1dGU dHctaW5zZXQteS0w dHctdG9wLTA dHctei0yMA dHctdy0xLzQ dHctaC1mdWxs dHctcmlnaHQtMS80 dHctdGV4dC1kYXJrLTcwMA" preserveAspectRatio="none" viewBox="0 0 100 100" fill="currentcolor">
                  <polygon points="0,0 100,0 0,100"></polygon>
               </svg>
               <div class="dHctYWJzb2x1dGU dHctaW5zZXQteS0w dHctei0xMA dHctdy0xLzI dHctaC1mdWxs dHctbGVmdC0xLzI dHctYmctZGFyay04MDA dHctcm91bmRlZC1yLTN4bA"></div>
               <div class="dHctcmVsYXRpdmU dHctei0zMA dHctZmxleA dHctZmxleC1jb2w dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNA dHctbXgtYXV0bw dHctdGV4dC1jZW50ZXI sm:dHctcHgtMTY lg:dHctZmxleC1yb3c lg:dHctdGV4dC1sZWZ0">
                  <div class="dHctbWF4LXctbGc dHctdGV4dC0yeGw dHctZm9udC1ib2xk sm:dHctdGV4dC00eGw lg:dHctdy0xLzI">
                     <h5 class="dHctdGV4dC00eGw dHctZm9udC1leHRyYWJvbGQ dHctdHJhY2tpbmctdGlnaHQ dHctdGV4dC13aGl0ZQ sm:dHctdGV4dC01eGw">Let&#x27;s make something great together.</h5>
                  </div>
                  <div class="dHctZmxleA dHctanVzdGlmeS1jZW50ZXI dHctbWF4LXctbGc dHctbXQtMTA lg:dHctdy0xLzI lg:dHctbXQtMA lg:dHctanVzdGlmeS1lbmQ"><Link to="/contact" class="dHctZmxleA dHctanVzdGlmeS1jZW50ZXI dHctaXRlbXMtY2VudGVy dHctcHktMw dHctcHgtOA dHctdy1hdXRv dHctZm9udC1zZW1pYm9sZA dHctbGVhZGluZy1zbnVn dHctYmctd2hpdGU dHctcm91bmRlZC1mdWxs dHctdHJhbnNpdGlvbg dHctZWFzZS1pbi1vdXQ dHctZHVyYXRpb24tMjUw dHctdGV4dC1kYXJrLTkwMA hover:dHctdGV4dC13aGl0ZQ focus:dHctb3V0bGluZS1ub25l hover:dHctYmctZGFyay05MDA dHctaC0xNA" style={white} >Start a Project</Link></div>
               </div>
            </div>
         </section>

      </main>
   );
};

export default Home;