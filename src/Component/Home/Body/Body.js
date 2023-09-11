import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Images from "../Addphotos/Images";

const Body = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then((res) => {
      setPlaces(res.data);
    });
  }, []);
  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place) => (
          <Link key={"/places/" + place._id} to={"/places/" + place._id}>
            <div className=" bg-gray-500 rounded-2xl flex">
              {place.photos?.[0] && (
                <Images
                  className="rounded-2xl object-cover aspect-square"
                  src={place.photos[0]}
                  alt=""
                />
              )}
            </div>
            <h2 className="font-bold">{place.address}</h2>
            <h3 className="text-sm  text-gray-500">{place.title}</h3>

            <div className="mt-1">
              <span className="font-bold">${place.price}</span> per night
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Body;