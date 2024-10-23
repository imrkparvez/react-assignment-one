import React from "react";
import { BathTubIcon, BedIcon } from "../icons";

const PropertyCard = ({ property }) => {
  const { name, imgUrl, bedroomNum, bathroomNum, price } = property;

  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={imgUrl} alt={`${name} image`} />
      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{name}</h4>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">${price}</span>{" "}
          /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <BedIcon />
          <p>
            <span className="font-bold text-gray-900">{bedroomNum}</span>{" "}
            Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <BathTubIcon />
          <p>
            <span className="font-bold text-gray-900">{bathroomNum}</span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
