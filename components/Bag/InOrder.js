import React from "react";
import { useRouter } from "next/router";
import { CloseSvg } from "lib/listSvg";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder, addQuantity, decreaseQuantity } from "rdx/bagStorage";
import { ProductImage } from "lib/source";
import Image from "next/future/image";

const InOrder = (props, ref) => {
  const { bag } = useSelector((state) => state.bag);
  const dispatch = useDispatch();
  const router = useRouter();

  const goToDetail = React.useCallback(
    (q) => {
      router.push({
        pathname: `/detail`,
        query: { id: q },
      });
    },
    [router]
  );

  const removeOrders = React.useCallback(
    (id) => {
      if (props.rmvId === "") {
        return Promise.all([props.refOpenDialog(id), props.setRmvId(id)]);
      }
    },
    [props.rmvId]
  );

  const addQuant = React.useCallback(
    (id) => {
      dispatch(addQuantity({ id }));
    },
    [dispatch]
  );

  const decreaseQuant = React.useCallback(
    (id) => {
      dispatch(decreaseQuantity({ id }));
    },
    [dispatch]
  );

  const MapBag = () => {
    if (bag?.length < 1)
      return (
        <div className="flex justify-center items-center w-full h-full border-b-2">
          No order item is here
        </div>
      );
    return bag.map((ord, i) => {
      return (
        <div
          key={i}
          className="font-bold flex flex-col justify-start md:flex-row  items-center md:justify-between w-full border rounded-md md:border-none p-2 md:p-0 gap-y-2 md:gap-y-0"
        >
          <div className="flex flex-row-reverse md:flex-row justify-between md:items-center gap-x-2 md:gap-x-24 w-full md:w-full">
            <div className="">
              <button
                onClick={() => removeOrders(ord?.id)}
                className="hover:scale-125 hover:shadow-red-500 z-0 duration-200 shadow-xl rounded-full overflow-hidden"
              >
                <CloseSvg />
              </button>
            </div>
            <div
              onClick={() => goToDetail(ord.id)}
              className="flex items-center gap-x-2 md:gap-x-8 w-full"
            >
              <Image
                alt={ord?.name}
                src={ProductImage[ord?.id]}
                className=" w-24 h-24 md:w-38 md:h-36 rounded-xl border-2 md:rounded-none shadow-sm md:shadow-none md:border-none"
              />
              <div className="w-full">
                <p className="text-sm">{ord?.name}</p>
                <div className="flex flex-row items-center gap-x-2 text-sm w-full">
                  <p>Size: {ord?.size?.size}</p>
                  <div className="flex flex-row items-center gap-x-2 text-sm">
                    <p>Color :</p>
                    <div
                      className=" w-4 h-4 rounded-md"
                      style={{
                        backgroundColor: ord?.color?.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around md:justify-around w-full md:w-full">
            <div>
              <p className="text-xs md:hidden">PRICE</p>
              <p>$ {ord.price}</p>
            </div>
            <div>
              <p className="md:hidden text-xs">QUANTITY</p>
              <div className="flex flex-row items-center gap-x-2 md:gap-x-4">
                <button
                  onClick={() => decreaseQuant(ord?.id)}
                  className="bg-black text-white w-5 h-5 rounded-full flex justify-center items-center"
                >
                  <p>-</p>
                </button>
                <p>{ord.quantity}</p>
                <button
                  onClick={() => addQuant(ord?.id)}
                  className="bg-black text-white w-5 h-5 rounded-full flex justify-center items-center"
                >
                  <p>+</p>
                </button>
              </div>
            </div>
            <div>
              <p className="md:hidden text-xs">TOTAL</p>
              <p>$ {ord.price * ord.quantity}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  React.useEffect(() => {
    MapBag();
  }, [bag, dispatch, MapBag()]);

  React.useImperativeHandle(ref, () => {
    return {
      acceptRemove: (id) => removeOrders(id),
    };
  });

  return (
    <>
      <div className="justify-around w-full mb-12 md:flex hidden">
        <div className="w-full flex justify-center items-center">
          <div className="text-sm">PRODUCT</div>
        </div>
        <div className="flex justify-around w-full">
          <div className="text-sm">PRICE</div>
          <div className="text-sm">QUANTITY</div>
          <div className="text-sm">TOTAL</div>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col gap-y-4 mb-24">
        {MapBag()}
      </div>
    </>
  );
};

export default React.forwardRef(InOrder);
