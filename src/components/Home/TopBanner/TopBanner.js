// import React from "react";
// import img1 from "../../../image/img 1.jpg";
// import img2 from "../../../image/img 2.jpg";
// import img3 from "../../../image/img 3.jpg";
// import img4 from "../../../image/img 4.jpg";

// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";

// import "./TopBanner.css";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

// const TopBanner = () => {
// //   const responsive = {
// //     superLargeDesktop: {
// //       // the naming can be any, depends on you.
// //       breakpoint: { max: 4000, min: 3000 },
// //       items: 5,
// //     },
// //     desktop: {
// //       breakpoint: { max: 3000, min: 1024 },
// //       items: 3,
// //     },
// //     tablet: {
// //       breakpoint: { max: 1024, min: 464 },
// //       items: 2,
// //     },
// //     mobile: {
// //       breakpoint: { max: 464, min: 0 },
// //       items: 1,
// //     },
// //   };
//   return (
//         <div>
//         <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//         <div class="carousel-inner">
//             <div class="carousel-item active ">
//             <img src={img1} class="d-block w-100" alt="..."/>

//             </div>
//             <div class="carousel-item">
//                <img src={img2} class="d-block w-100" alt="..."/>
//             </div>
//             <div class="carousel-item">
//               <img src={img3} class="d-block w-100" alt="..."/>
//             </div>
//         </div>
//         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//         </button>
//         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//         </button>
//         <div class="carousel-caption d-md-block ">
//                 <h2>Full Service of</h2>
//                 <br/>
//                    <h1>Auto Repair</h1>
//                    <h1>and Maintenance</h1>
//                 <br/>
//                 <h3>Over 35 Years of Quality Auto service</h3>
//                   <button className='button mt-3' >GET APPOINTMENT</button>
//                 </div>
//         </div>
//     </div>

//     // <div>
//     //   <Carousel responsive={responsive}>
//     //   <div class="carousel-item">
//     //            <img src={img3} class="d-block" alt="..."/>
//     //     </div>
//     //     <div>Item 2</div>
//     //     <div>Item 3</div>
//     //     <div>Item 4</div>
//     //   </Carousel>
//     //   ;
//     // </div>

//     //     <Carousel>
//     //     <div>
//     //     <img src={img1} class="d-block w-100" alt="..."/>
//     //         <p className="legend">Legend 1</p>
//     //     </div>
//     //     <div>
//     //     <img src={img2} class="d-block w-100" alt="..."/>
//     //         <p className="legend">Legend 2</p>
//     //     </div>
//     //     <div>
//     //     <img src={img3} class="d-block w-100" alt="..."/>
//     //         <p className="legend">Legend 3</p>
//     //     </div>
//     // </Carousel>
//   );
// };

// export default TopBanner;

import React from "react";
import "./TopBanner.css";

import img1 from "../../../image/img 1.jpg";
import img2 from "../../../image/img 2.jpg";
import img3 from "../../../image/img 3.jpg";
import img4 from "../../../image/img 4.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const TopBanner = () => {
  return (
    <div>
        
      <Carousel showThumbs={false} autoPlay={true}>
        <div>
          <img src={img1} alt=".." />
          <p className="legend">Legend 3</p>
        </div>
        <div>
         <div>
         <img src={img2} alt=".." />
         </div>
         <div> <p className="legend">
            Just send valuable laptop, PC, MAC, Mobile, Gaming Device or
            Smartphone and we'll take care of it.
          </p></div>
        </div>
        <div>
          <img src={img4} alt=".." />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={img3} alt=".." />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div className="carousel-caption d-md-block ">
                    <h2>A House Service of</h2>
                   
                       <h1>PC & Laptop Repair</h1>
                       <h1>and Maintenance Service</h1>
               
                    <h3>Over 25 Years of Quality Auto service</h3>
                      <button className='btn btn-warning font-weight-bold mt-3'>GET APPOINTMENT</button>
                    </div>
                    </div>
  );
};

export default TopBanner;
