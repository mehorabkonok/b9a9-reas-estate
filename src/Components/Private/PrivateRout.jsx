import PropTypes from "prop-types";
import { useContext } from "react";
import { userContext } from "../../AuthProvider/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({ children }) => {
  const { userData, loading } = useContext(userContext);

  const location = useLocation();
  console.log("Pathname:", location.pathname);

  console.log(loading);
  console.log(userData);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  } else if (userData) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRout;
PrivateRout.propTypes = {
  children: PropTypes.node,
};
