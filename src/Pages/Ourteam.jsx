import React from 'react';
import style from "../css/OurTeam.module.css";

const Ourteam = () => {
   return (
      <section class="dHctcHgtNA dHctcHQtMTI dHctcGItMTQ md:dHctcHQtMTY md:dHctcGItMjA sm:dHctcHgtNg lg:dHctcHgtOA">
         <div class="dHctbWF4LXctc2NyZWVuLXhs dHctbXgtYXV0bw">
            <div class="dHctdy1mdWxs dHctbWF4LXcteGw dHctbXgtYXV0bw dHctdGV4dC1jZW50ZXI lg:dHctbWF4LXctM3hs md:dHctbWF4LXctMnhs">
               <p class="dHctaW5saW5lLWZsZXg dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctcHgtNg dHctcHktMg dHctdGV4dC1zbQ dHctZm9udC1tZWRpdW0 dHctdHJhY2tpbmctd2lkZQ dHctdGV4dC13aGl0ZQ dHctcm91bmRlZC1yLWZ1bGw dHctcm91bmRlZC10bC1mdWxs dHctYmctZ3JhZGllbnQtdG8tcg dHctZnJvbS1kYXJrLTYwMA dHctdG8tZGFyay03MDA">The team</p>
               <h2 class="dHctbXQtNg dHctdGV4dC0zeGw dHctZm9udC1leHRyYWJvbGQ dHctdGV4dC13aGl0ZQ sm:dHctdGV4dC00eGw md:dHctdGV4dC01eGw">Years  of experience in design and development</h2>
               <p class="dHctbXQtNg dHctdGV4dC14bA dHctdGV4dC1kYXJrLTMwMA">Our diverse team unites industry veterans and innovative minds, all committed to delivering transformative digital experiences.</p>
            </div>
            <div class="dHctZ3JpZA dHctbWF4LXctNnhs dHctbXgtYXV0bw dHctbXQtMTI dHctZ2FwLXgtNg dHctZ2FwLXktMTI lg:dHctbXQtMTY sm:dHctZ3JpZC1jb2xzLTI md:dHctZ3JpZC1jb2xzLTM lg:dHctZ2FwLXgtMTI lg:dHctZ2FwLXktMTY">
               <div class="dHctZmxleA dHctZmxleC1jb2w dHctaXRlbXMtY2VudGVy">
                  <img alt="Kaylen Meyer" loading="lazy" width="640" height="959" decoding="async" data-nimg="1" class="dHctb2JqZWN0LWNvdmVy dHctb2JqZWN0LWNlbnRlcg dHctdy02NA dHctaC02NA dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw" sizes="16rem" srcSet="data:image/png;base64,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" />
                  <div class="dHctbXQtNA dHctdGV4dC1jZW50ZXI">
                     <div class="dHctdGV4dC14bA dHctZm9udC1zZW1pYm9sZA dHctdGV4dC13aGl0ZQ">Tushar Khurana</div>
                     <div class="dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTQwMA">CEO</div>
                     <div class="dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTQwMA">tusharkhurana@kodify.in</div>

                     <div class="dHctZmxleA dHctanVzdGlmeS1jZW50ZXI dHctbXQtMg dHctc3BhY2UteC0y">
                        <a class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ dHctcm91bmRlZC1mdWxs dHctYmctZGFyay03MDA hover:dHctYmctd2hpdGU dHctdGV4dC1kYXJrLTMwMA dHctZ3JvdXA dHctdy0xMA dHctaC0xMA" href="#0">
                           <svg xmlns="http://www.w3.org/2000/svg" class="dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTkwMA dHctdy01 dHctaC01" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                              <circle cx="12" cy="12" r="3"></circle>
                              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                           </svg>
                        </a>
                        <a class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ dHctcm91bmRlZC1mdWxs dHctYmctZGFyay03MDA hover:dHctYmctd2hpdGU dHctdGV4dC1kYXJrLTMwMA dHctZ3JvdXA dHctdy0xMA dHctaC0xMA" href="#0">
                           <svg xmlns="http://www.w3.org/2000/svg" class="dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTkwMA dHctdy01 dHctaC01" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                           </svg>
                        </a>
                        <a class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ dHctcm91bmRlZC1mdWxs dHctYmctZGFyay03MDA hover:dHctYmctd2hpdGU dHctdGV4dC1kYXJrLTMwMA dHctZ3JvdXA dHctdy0xMA dHctaC0xMA" href="#0">
                           <svg xmlns="http://www.w3.org/2000/svg" class="dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTkwMA dHctdy01 dHctaC01" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
               <div class="dHctZmxleA dHctZmxleC1jb2w dHctaXRlbXMtY2VudGVy">
                  <img alt="Coriss Ambady" loading="lazy" width="640" height="960" decoding="async" data-nimg="1" class="dHctb2JqZWN0LWNvdmVy dHctb2JqZWN0LWNlbnRlcg dHctdy02NA dHctaC02NA dHctc2hhZG93LXhs dHctcm91bmRlZC0zeGw" sizes="16rem" srcSet="data:image/png;base64,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" />
                  <div class="dHctbXQtNA dHctdGV4dC1jZW50ZXI">
                     <div class="dHctdGV4dC14bA dHctZm9udC1zZW1pYm9sZA dHctdGV4dC13aGl0ZQ">Sumit Parya                 </div>
                     <div class="dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTQwMA">CTO</div>
                     <div class="dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTQwMA">sumitparya@kodify.in</div>
                     <div class="dHctZmxleA dHctanVzdGlmeS1jZW50ZXI dHctbXQtMg dHctc3BhY2UteC0y">
                        <a class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ dHctcm91bmRlZC1mdWxs dHctYmctZGFyay03MDA hover:dHctYmctd2hpdGU dHctdGV4dC1kYXJrLTMwMA dHctZ3JvdXA dHctdy0xMA dHctaC0xMA" href="#0">
                           <svg xmlns="http://www.w3.org/2000/svg" class="dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTkwMA dHctdy01 dHctaC01" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                              <circle cx="12" cy="12" r="3"></circle>
                              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
                           </svg>
                        </a>
                        <a class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ dHctcm91bmRlZC1mdWxs dHctYmctZGFyay03MDA hover:dHctYmctd2hpdGU dHctdGV4dC1kYXJrLTMwMA dHctZ3JvdXA dHctdy0xMA dHctaC0xMA" href="#0">
                           <svg xmlns="http://www.w3.org/2000/svg" class="dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTkwMA dHctdy01 dHctaC01" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                           </svg>
                        </a>
                        <a class="dHctZmxleA dHctaXRlbXMtY2VudGVy dHctanVzdGlmeS1jZW50ZXI dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ dHctcm91bmRlZC1mdWxs dHctYmctZGFyay03MDA hover:dHctYmctd2hpdGU dHctdGV4dC1kYXJrLTMwMA dHctZ3JvdXA dHctdy0xMA dHctaC0xMA" href="#0">
                           <svg xmlns="http://www.w3.org/2000/svg" class="dHctdHJhbnNpdGlvbg dHctZHVyYXRpb24tMzAw dHctZWFzZS1pbi1vdXQ group-hover:dHctdGV4dC1kYXJrLTkwMA dHctdy01 dHctaC01" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
                           </svg>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", margin: "2.5rem 0 2.5rem 14rem" }}>

            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} >
               <div class="logocenter">
                  <div class="companylogo"  >
                     <img src="/team_logo1.jpeg" alt="" style={{ borderRadius: "50%" }} />
                  </div>

               </div>
               <div style={{ marginTop: "25px" }}>
                  <h1 class="myteamclass"  >Development team</h1>
                  <hr style={{display:"inline-block",width:"375px",height:"5px",backgroundColor:"#2b2727",border:"none",outline:"none"}} />
                  <h1 class="myteamclass">Strange web</h1>
                  <p style={{ fontSize: '22px', fontWeight: 500, color: 'white', textAlign: 'start' }}>Team size:15+</p>

               </div>
            </div>


            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} >
               <div class="logocenter">
                  <div class="companylogo">
                     <img src="/team_logo2.png" alt="" style={{ borderRadius: "50%" }} />
                  </div>

               </div>
               <div style={{ marginTop: "25px" }}>
                  <h1 class="myteamclass">Digital Marketing team</h1>
                  <hr style={{display:"inline-block",width:"450px",height:"5px",backgroundColor:"#2b2727",border:"none",outline:"none"}} />
                  <h1 class="myteamclass" >Upsight media</h1>
                  <p style={{ fontSize: '22px', fontWeight: 500, color: 'white', textAlign: 'start' }}>Team size:6 People</p>

               </div>
            </div>
         </div>


         <div class="" style={{ display: "flex", justifyContent: "space-around" }}>

            <div>
               <div class="dHctdGV4dC14bA dHctZm9udC1zZW1pYm9sZA dHctdGV4dC13aGl0ZQ">AI team                 </div>
               <div class="dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTQwMA">Utkarsh</div>
               <div class="dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTQwMA">Sumit Parya</div>
            </div>
            <div>
               <div class="dHctdGV4dC14bA dHctZm9udC1zZW1pYm9sZA dHctdGV4dC13aGl0ZQ">UI design                </div>
               <div class="dHctdGV4dC1sZw dHctZm9udC1tZWRpdW0 dHctdGV4dC1kYXJrLTQwMA">Lakshya Sharma</div>

            </div>
         </div>

      </section>
   )
}

export default Ourteam
