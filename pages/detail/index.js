import React from "react";
import Layout from "components/Layout/Layout";

import { useRouter } from "next/router";
import { ProductImage } from "lib/source";

import Image from "next/future/image";
import ProductNotFound from "components/ProductNotFound";

import ProductDes from "components/Product/ProductDes";
import ProductSize from "components/Product/ProductSize";
import ProductColor from "components/Product/ProductColor";
import ProductGalery from "components/Product/ProductGalery";
import ProductVideo from "components/Dialog/ProductVideo";

import AddBag from "components/Product/AddBag";

import { useSelector } from "react-redux";

// export async function getServerSideProps(context) {
//   const page = context.query.id;
//   if (!stores) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     data: { data: page || null },
//   };
// }

const Detail = ({}) => {
  const { stores } = useSelector((state) => state.stores);

  const [play, setPlay] = React.useState(false);
  const [color, setColor] = React.useState();
  const [size, setSize] = React.useState();

  const router = useRouter();
  const { query } = router;
  const { id } = query;

  const name = stores[id]?.name;
  const category = stores[id]?.category;
  const description = stores[id]?.description;
  const price = stores[id]?.price;
  const sizes = stores[id]?.sizes;
  const colors = stores[id]?.colors;
  const video = stores[id]?.video;

  const storeCheck = React.useCallback(() => {
    if (stores[id] === undefined) return router.replace("/");
  }, [stores[id]]);

  React.useEffect(() => {
    storeCheck();
  }, [stores]);

  return (
    <>
      <ProductVideo setPlay={setPlay} play={play} video={video} />
      <div className="pt-12">
        {!stores[id] || null ? (
          <ProductNotFound />
        ) : (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col md:flex-row gap-y-4 gap-x-8">
              <div className="w-full md:w-1/3 h-1/3  flex flex-col gap-y-4">
                <div className="bg-grays overflow-hidden">
                  <Image
                    alt={"p_image"}
                    src={ProductImage[id]}
                    className={"w-full h-full md:hover:scale-125 duration-200"}
                  />
                </div>
                <ProductGalery />
              </div>
              <div className="w-full md:w-2/4 h-full md:p-2 lg:p-14 flex flex-col gap-4">
                <ProductDes
                  name={name}
                  category={category}
                  description={description}
                  setPlay={setPlay}
                />

                <ProductSize sizes={sizes} size={size} setSize={setSize} />

                <ProductColor
                  colors={colors}
                  setColor={setColor}
                  color={color}
                />
              </div>
            </div>
            <AddBag
              setColor={setColor}
              setSize={setSize}
              price={price}
              name={name}
              id={id}
              size={size}
              color={color}
            />
          </div>
        )}
      </div>
    </>
  );
};

Detail.layout = Layout;
export default Detail;
