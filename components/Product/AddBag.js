import React from "react";
import FreeShipping from "components/FreeShipping";
import { Arrow } from "lib/listSvg";
import { useDispatch, useSelector } from "react-redux";
import { addBag } from "lib/redux";

const AddBag = ({ price, name, color, size, id, setSize, setColor }) => {
  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag);

  React.useEffect(() => {
    console.log("BAG :", bag);
    console.log("COLOR :", color);
    console.log("SIZE :", size);
  }, [color, size]);

  const storeBag = React.useCallback(
    (data) => {
      if (data.color === undefined) return;
      if (data.size === undefined) return;
      return dispatch(addBag(data));
    },
    [color, size]
  );

  return (
    <div className="bg-grays w-full h-20 md:relative flex items-center justify-between p-2 md:p-4">
      <FreeShipping />
      <button
        onClick={() =>
          Promise.all([
            storeBag({
              price: price,
              name: name,
              color: color,
              size: size,
              id: id,
            }),
            setSize(undefined),
            setColor(undefined),
          ])
        }
        className="bg-black w-52 h-12 md:text-md text-xs text-white flex flex-row items-center justify-around md:hover:scale-110 duration-200"
      >
        <p> ADD TO BAG — $ {price}</p>
        <Arrow />
      </button>
    </div>
  );
};

export default React.memo(AddBag);
