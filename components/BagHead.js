import React from "react";
import { BagInv } from "lib/listSvg";
const BagHead = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-x-4 h-auto pb-20 pt-24">
      <p className=" font-bold text-5xl text-center ">Your Bag</p>
      <BagInv />
    </div>
  );
};

export default React.memo(BagHead);
