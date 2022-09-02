import React from "react";
import FreeShipping from "components/FreeShipping";
const Header = () => {
  React.useEffect(() => {
    console.log("header Render");
  });

  return (
    <div className="bg-grays backdrop-blur-sm w-full h-10 flex flex-row items-center justify-between px-4 md:px-8 lg:px-44">
      <div className="w-1/4 h-auto ">
        <select className="bg-grays outline-none text-xs">
          <option>English</option>
          <option>Bahasa</option>
        </select>
      </div>

      <div className="md:flex flex-row items-center w-2/4 justify-center hidden">
        <FreeShipping />
      </div>
      <div className="h-auto flex flex-row items-center w-1/4 justify-end gap-x-8">
        <button className="text-xs">Shipping</button>
        <button className="text-xs">FAQ</button>
        <button className="text-xs">Contact</button>
      </div>
    </div>
  );
};

export default React.memo(Header);
