import React from "react";
import { BoxCar } from "lib/listSvg";
const FreeShipping = () => {
  return (
    <div className="w-auto flex flex-col md:flex-row md:items-center items-start gap-x-2">
      <BoxCar />
      <p className="md:text-xs text-xs font-sans">
        FREE SHIPPING OVER $100 PURCHASE
      </p>
    </div>
  );
};

export default React.memo(FreeShipping);
