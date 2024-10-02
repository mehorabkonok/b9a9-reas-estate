import { Helmet } from "react-helmet";
import Estates from "../Estates/Estates";
import Slider from "../Slider/Slider";
import { useEffect, useState } from "react";

const Home = () => {
  // statest for dynamic page title
  const [pageTitle, setPageTitle] = useState("");

  // after the page mounts, the useEffect will be triggered
  useEffect(() => {
    setPageTitle("Home");
  }, []);

  return (
    <div>
      {/* dynamic title goes here using helmate */}
      <Helmet>
        <title>RE Real Estate | {pageTitle}</title> {/* Dynamic title */}
        <meta name="description" content="Home page for the main content" />
      </Helmet>

      <Slider></Slider>
      <Estates></Estates>
    </div>
  );
};

export default Home;
