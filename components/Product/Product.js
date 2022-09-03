import React from "react";
import Image from "next/future/image";
import { useRouter } from "next/router";
import { ProductImage } from "lib/source";
import { useSelector } from "react-redux";
const Product = () => {
  const { stores } = useSelector((state) => state.stores);

  const router = useRouter();
  const {
    query: { id },
  } = router;

  const goToDetail = React.useCallback(
    (q) => {
      router.push({
        pathname: `/detail`,
        query: { id: q },
      });
    },
    [router]
  );

  const AllProduct = React.useMemo(() => {
    return stores.map((prod) => {
      return (
        <button onClick={() => goToDetail(prod.id)} key={prod.id}>
          <div className="bg-white w-auto h-auto flex flex-col gap-y-2">
            <div className="bg-white w-auto h-auto">
              <Image
                alt={prod.name}
                priority
                src={ProductImage[prod.id]}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text-left">
                <p className="text-black">{prod.name}</p>
                <p className="text-light text-gray-700 text-sm">
                  {prod.category}
                </p>
              </div>
              <p className="text-gray-400 font-semibold">$ {prod.price}</p>
            </div>
          </div>
        </button>
      );
    });
  }, [id]);

  const Men = React.useMemo(() => {
    return stores
      .filter((men) => men.category === "Men Shoes")
      .map((prod) => {
        return (
          <button onClick={() => goToDetail(prod.id)} key={prod.id}>
            <div className="bg-white w-auto h-auto flex flex-col gap-y-2">
              <div className="bg-white w-auto h-auto">
                <Image
                  alt={prod.name}
                  priority
                  src={ProductImage[prod.id]}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col text-left">
                  <p className="text-black">{prod.name}</p>
                  <p className="text-light text-gray-700 text-sm">
                    {prod.category}
                  </p>
                </div>
                <p className="text-gray-400 font-semibold">$ {prod.price}</p>
              </div>
            </div>
          </button>
        );
      });
  }, [id]);

  const Sport = React.useMemo(() => {
    return stores
      .filter((sprt) => sprt.category === "Basketball Shoes")
      .map((prod) => {
        return (
          <button onClick={() => goToDetail(prod.id)} key={prod.id}>
            <div className="bg-white w-auto h-auto flex flex-col gap-y-2">
              <div className="bg-white w-auto h-auto">
                <Image
                  alt={prod.name}
                  priority
                  src={ProductImage[prod.id]}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col text-left">
                  <p className="text-black">{prod.name}</p>
                  <p className="text-light text-gray-700 text-sm">
                    {prod.category}
                  </p>
                </div>
                <p className="text-gray-400 font-semibold">$ {prod.price}</p>
              </div>
            </div>
          </button>
        );
      });
  }, [id]);

  const filtered = React.useCallback(() => {
    if (id === "all") return AllProduct;

    if (id === "men") return Men;

    if (id === "sport") return Sport;

    if (id)
      return (
        <div className="text-2xl font-bold w-full">
          <p>product is not available for now . . . . . . . . . . .</p>
          <p>. . . . . . . . </p>
        </div>
      );
  }, [AllProduct, Men, Sport]);

  return (
    <div className="grid grid-flow-row w-full grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
      {filtered()}
    </div>
  );
};

export default React.memo(Product);
