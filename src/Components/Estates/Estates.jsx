import { useState } from "react";
import { useEffect } from "react";
import Estate_card from "./Estate_card/Estate_card";

const Estates = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch("./estate.json")
      .then((res) => res.json())
      .then((data) => {
        setEstates(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(estates);
  estates.map((data) => console.log(data));

  return (
    <div className="my-4 flex flex-wrap justify-center ">
      {estates.map((estate) => (
        <Estate_card key={estate.id} estate={estate}></Estate_card>
      ))}
    </div>
  );
};

export default Estates;
