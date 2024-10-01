import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Import Leaflet's icon manually to avoid icon issue
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import PropTypes from "prop-types";

// Setting the default marker icon
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Leaflet = ({ estate }) => {
  const {
    estate_title,

    location,
    lat,
    lng,
  } = estate;

  return (
    <div>
      {" "}
      <MapContainer
        center={[lat, lng]} // Estate's latitude and longitude
        zoom={13}
        style={{ height: "200px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker at estate's location */}
        <Marker position={[lat, lng]}>
          <Popup>
            {estate_title}
            <br />
            {location}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Leaflet;

Leaflet.propTypes = {
  estate: PropTypes.object,
};
