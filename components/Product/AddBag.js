import React from "react";
import FreeShipping from "components/FreeShipping";
import { Arrow } from "lib/listSvg";
import { useDispatch } from "react-redux";
import { addBag, mapCheck } from "rdx/bagStorage";
import { useRouter } from "next/router";

const AddBag = ({ price, name, color, size, id, setSize, setColor }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const storeBag = React.useCallback(
    (data) => {
      if (!data.color) return;
      if (!data.size) return;
      Promise.all([
        dispatch(addBag(data)),
        router.push("/bag"),
        setSize(),
        setColor,
      ]);
    },
    [color, size]
  );

  return (
    <div className="bg-grays w-full h-20 md:relative flex items-center justify-between p-2 md:p-4">
      <FreeShipping />
      <button
        onClick={() =>
          storeBag({
            price: price,
            name: name,
            color: color,
            size: size,
            id: id,
          })
        }
        className={`${
          color === undefined || size === undefined ? "bg-gray-800" : "bg-black"
        } w-52 h-12 md:text-md text-xs text-white flex flex-row items-center justify-around md:hover:scale-110 duration-200`}
      >
        <p>ADD TO BAG — $ {price}</p>
        <Arrow />
      </button>
    </div>
  );
};

export default React.memo(AddBag);
