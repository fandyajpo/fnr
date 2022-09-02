import React from "react";
import { PlayButton } from "lib/listSvg";
const ProductDes = ({ category, name, description, video, setPlay }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <p>{category}</p>
      <p className="text-5xl font-bold">{name}</p>
      <p className="text-gray-500 text-md">{description}</p>
      <div className="flex flex-row gap-x-2 items-center">
        <PlayButton setPlay={setPlay} />
        <p>PLAY VIDEO</p>
      </div>
    </div>
  );
};

export default React.memo(ProductDes);
