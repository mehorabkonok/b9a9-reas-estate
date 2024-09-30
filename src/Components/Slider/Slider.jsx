import apartment_one from "../../assets/Apartment_1/1.jpeg";
import apartment_two from "../../assets/Apartment_2/1.jpeg";
import apartment_three from "../../assets/Apartment_3/1.jpeg";
import apartment_four from "../../assets/Apartment_4/1.jpeg";
import apartment_five from "../../assets/Apartment_5/1.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// for custom style
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
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center px-2 py-1">
          <img
            className="block w-full h-full rounded-b-lg object-cover"
            src={apartment_one}
          />
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center px-2 py-1">
          <img
            className="block w-full h-full rounded-b-lg object-cover"
            src={apartment_two}
          />
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center px-2 py-1">
          <img
            className="block w-full h-full rounded-b-lg object-cover"
            src={apartment_three}
          />
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center px-2 py-1">
          <img
            className="block w-full h-full rounded-b-lg object-cover"
            src={apartment_four}
          />
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center px-2 py-1">
          <img
            className="block w-full h-full rounded-b-lg object-cover"
            src={apartment_five}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
