import PropTypes from "prop-types";
import { useContext } from "react";
import { userContext } from "../../AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({ children }) => {
  const { userData } = useContext(userContext);
  console.log("User info from private route:", userData);

  const location = useLocation();
  console.log(location);
  console.log("Pathname:", location.pathname);

  if (userData) {
    return children;
  }

  //   return <Navigate state={location.pathname} to="/login"></Navigate>;
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRout;
PrivateRout.propTypes = {
  children: PropTypes.node,
};
