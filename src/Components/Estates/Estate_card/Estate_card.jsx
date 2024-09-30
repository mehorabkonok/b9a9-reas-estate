import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import PropTypes from "prop-types";

const Estate_card = ({ estate }) => {
  console.log(estate);

  const {
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

  return (
    <div className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
      <div className="card bg-base-100 border border-sky-200 shadow-xl rounded-md">
        <figure>
          <img src={thumbnail_image} alt="Shoes" />
        </figure>
        <div className="card-body p-3">
          <div className="card-title items-center flex flex-col">
            <div className="badge bg-sky-500 text-white border-none w-full h-auto px-2 py-3 rounded-md">
              {segment_name} for {status}
            </div>
            <h2 className="h-20 2xl:h-24 p-2">{estate_title}</h2>
          </div>

          <div className="card-actions flex flex-col justify-start ">
            <div className="badge border border-sky-200 h-10 xl:h-12 w-full rounded-md flex justify-start gap-2">
              <FaBuilding />
              {area_sqft} sqft
            </div>
            <div className="badge border border-sky-200 h-10 xl:h-12 w-full rounded-md flex justify-start gap-2">
              <FaLocationDot />
              {location}
            </div>
            <div className="badge border border-sky-200 h-10 xl:h-12 w-full rounded-md flex justify-start gap-2">
              <AiFillDollarCircle />
              {price}
            </div>
          </div>
          <div>
            <button className="btn btn-info text-white w-full">
              Show Details
            </button>
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
