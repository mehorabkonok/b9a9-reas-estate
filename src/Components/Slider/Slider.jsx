import apartment_one from "../../assets/Apartment_1/1.jpeg";
import apartment_two from "../../assets/Apartment_2/1.jpeg";
import apartment_three from "../../assets/Apartment_3/1.jpeg";
import apartment_four from "../../assets/Apartment_4/1.jpeg";
import apartment_five from "../../assets/Apartment_5/1.jpeg";

// const Slider = () => {
//   return (
//     <div className="carousel w-full h-96">
//       <div id="slide1" className="carousel-item relative w-full">
//         <img src={apartment_one} className="w-full" />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide5" className="btn btn-circle">
//             ❮
//           </a>
//           {/* Now at slide 1 */}
//           <a href="#slide2" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide2" className="carousel-item relative w-full">
//         <img src={apartment_two} className="w-full" />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide1" className="btn btn-circle">
//             ❮
//           </a>
//           {/* Now at slide 2 */}
//           <a href="#slide3" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide3" className="carousel-item relative w-full">
//         <img src={apartment_three} className="w-full" />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide2" className="btn btn-circle">
//             ❮
//           </a>
//           {/* Now at slide 3 */}
//           <a href="#slide4" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide4" className="carousel-item relative w-full">
//         <img src={apartment_four} className="w-full" />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide3" className="btn btn-circle">
//             ❮
//           </a>
//           {/* Now at slide 4 */}
//           <a href="#slide5" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//       <div id="slide5" className="carousel-item relative w-full">
//         <img src={apartment_five} className="w-full" />
//         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
//           <a href="#slide4" className="btn btn-circle">
//             ❮
//           </a>
//           {/* Now at slide 5 */}
//           <a href="#slide1" className="btn btn-circle">
//             ❯
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;

// import React, { useRef, useState } from "react";
// Import Swiper React components
// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={apartment_one} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apartment_two} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apartment_three} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apartment_four} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={apartment_five} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
