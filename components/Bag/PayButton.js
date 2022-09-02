import React from "react";
import { Arrow } from "lib/listSvg";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const PayButton = () => {
  const { orderTotal } = useSelector((state) => state.bag);
  const router = useRouter();
  const goRoot = React.useCallback(
    (d) => () => {
      router.push(d);
    },
    []
  );

  return (
    <div className="flex flex-col w-full items-end gap-y-4">
      <button className="w-full md:w-96 h-16 bg-grays text-gray-400 flex items-center px-4 justify-between">
        <p>TOTAL</p>
        <p>$ {orderTotal}</p>
      </button>
      <button
        onClick={goRoot("/")}
        className="w-full md:w-96 h-16 bg-black text-white flex items-center px-4 justify-between"
      >
        <p>PAY NOW</p>
        <Arrow />
      </button>
    </div>
  );
};

export default PayButton;
