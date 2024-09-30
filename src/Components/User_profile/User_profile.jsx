import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

const User_profile = () => {
  // statest for dynamic page title
  const [pageTitle, setPageTitle] = useState("");

  // after the page mounts, the useEffect will be triggered
  useEffect(() => {
    setPageTitle("User Profile");
  }, []);

  return (
    <div>
      {/* dynamic title */}
      <Helmet>
        <title>{pageTitle} | MyApp</title>
        <meta name="description" content="Visit the user profile" />
      </Helmet>

      <h2>User profile details</h2>
    </div>
  );
};

export default User_profile;
