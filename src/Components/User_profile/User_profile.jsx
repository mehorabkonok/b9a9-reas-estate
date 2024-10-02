import { useContext, useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { userContext } from "../../AuthProvider/AuthContext";
import { Link } from "react-router-dom";

const User_profile = () => {
  const { userData } = useContext(userContext);
  console.log(userData);

  // userData
  const [userName, setUserName] = useState("");
  const [userPrfile, setUserProfile] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // statest for dynamic page title
  const [pageTitle, setPageTitle] = useState("");

  // after the page mounts, the useEffect will be triggered
  useEffect(() => {
    setPageTitle("User Profile");

    if (userData) {
      setUserName(userData.displayName);
      setUserProfile(userData.photoURL);
      setUserEmail(userData.email);
    } else {
      console.log("Data loading ...");
    }
  }, [userData]);

  console.log(userName);
  console.log(userPrfile);
  console.log(userEmail);

  return (
    <div className="bg-sky-100">
      {/* dynamic title */}
      <Helmet>
        <title>RE Real Estate | {pageTitle}</title>
        <meta name="description" content="Visit the user profile" />
      </Helmet>
      {/* user profile */}
      {userData ? (
        <div className="hero bg-sky-100 min-h-screen  p-4 md:p-10">
          <div className="hero-content flex-col lg:flex-row lg:gap-10">
            <img src={userPrfile} className="w-1/5 rounded-xl shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{userName}</h1>
              <p className="py-6">{userEmail}</p>
              <Link to="/" className="btn btn-primary">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-sky-100 min-h-screen flex items-center justify-center">
          <span className="loading loading-spinner loading-lg "></span>
        </div>
      )}
    </div>
  );
};

export default User_profile;
