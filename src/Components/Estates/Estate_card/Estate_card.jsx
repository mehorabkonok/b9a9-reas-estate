import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// for AOS package
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react"; // To initialize AOS when component mounts

const Estate_card = ({ estate }) => {
  console.log(estate);

  const {
    id,
    estate_title,
    segment_name,
    // description,
    price,
    status,
    area_sqft,
    location,
    thumbnail_image,
    // interior_images,
  } = estate;

  // AOS initialization
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div
      className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      {estate ? (
        <div className="card bg-base-100 border border-sky-200 shadow-xl rounded-md">
          <figure>
            <img src={thumbnail_image} alt="Shoes" />
          </figure>
          <div className="card-body p-3">
            <div className="card-title items-center flex flex-col">
              <div className="badge bg-sky-500 text-white border-none w-full h-auto px-2 py-3 rounded-md shadow-md">
                {segment_name} for {status}
              </div>
              <h2 className="h-20 2xl:h-24 p-2">{estate_title}</h2>
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
              <Link
                to={`/estate_details/${id}`}
                className="btn btn-info text-white w-full"
              >
                Show Details
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-52 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      )}
    </div>
  );
};

export default Estate_card;

Estate_card.propTypes = {
  estate: PropTypes.object,
};
