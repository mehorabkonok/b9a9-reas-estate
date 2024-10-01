import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link, useLoaderData, useParams } from "react-router-dom";
// import { useState } from "react";
// import { useEffect } from "react";

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
import Leaflet from "./Leaflet";

const Estate_card = () => {
  const { expected_id } = useParams();
  console.log(expected_id);

  const estatesData = useLoaderData();
  console.log(estatesData);
  console.log(estatesData);

  const estate = estatesData.find((estate) => estate.id == expected_id);
  console.log(estate);

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area_sqft,
    location,

    interior_images,
  } = estate;

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="p-2 w-full ">
      <div className="card bg-base-100 border border-sky-200 shadow-xl rounded-md">
        <figure>
          {/* <img src={thumbnail_image} alt="Shoes" /> */}

          <Swiper
            spaceBetween={30}
            effect={"fade"}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={pagination}
            navigation={true}
            loop={true}
            modules={[Autoplay, EffectFade, Pagination, Navigation]}
            className="mySwiper"
          >
            {interior_images.map((img_url) => (
              <SwiperSlide
                key={img_url}
                className="text-center text-lg bg-sky-100 flex justify-center items-center px-2"
              >
                <img
                  className="block w-full h-full rounded-b-lg object-cover"
                  src={img_url}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </figure>
        <div className="card-body p-3">
          <div className="card-title items-center flex flex-col">
            <div className="badge bg-sky-500 text-white border-none w-full h-auto px-2 py-3 rounded-md shadow-md">
              {segment_name} for {status}
            </div>
            <h2 className="h-20 2xl:h-24 p-2">{estate_title}</h2>
          </div>
          <div className="border h-auto flex flex-col items-center md:flex-row">
            <div className="h-full w-full md:w-1/2 px-10 py-4">
              <p> {description} </p>
            </div>
            <div
              id="leaflet_container_div"
              className="border h-auto w-full md:w-1/2"
            >
              {/* Leaflet map goes here */}
              <Leaflet estate={estate}></Leaflet>
            </div>
          </div>
          <div className="card-actions flex flex-col justify-start ">
            <div className="badge border border-sky-100 h-10 xl:h-12 w-full rounded-md flex justify-start gap-2 shadow-md">
              <FaBuilding />
              {area_sqft} sqft
            </div>
            <div className="badge border border-sky-100 h-10 xl:h-12 w-full rounded-md flex justify-start gap-2 shadow-md">
              <FaLocationDot />
              {location}
            </div>
            <div className="badge border border-sky-100 h-10 xl:h-12 w-full rounded-md flex justify-start gap-2 shadow-md">
              <AiFillDollarCircle />
              {price}
            </div>
          </div>
          <div>
            <Link to="/" className="btn btn-info text-white w-full">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate_card;

Estate_card.propTypes = {
  estate: PropTypes.object,
};
