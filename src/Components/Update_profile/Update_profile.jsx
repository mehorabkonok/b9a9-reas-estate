import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Update_profile = () => {
  // statest for dynamic page title
  const [pageTitle, setPageTitle] = useState("");

  // after the page mounts, the useEffect will be triggered
  useEffect(() => {
    setPageTitle("Update Profile");
  }, []);
  return (
    <div className="bg-sky-100">
      {/* dynamic title */}
      <Helmet>
        <title>{pageTitle} | MyApp</title>
        <meta name="description" content="Update the user profile" />
      </Helmet>

      <h2>Update your profile</h2>
    </div>
  );
};

export default Update_profile;
