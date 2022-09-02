import React from "react";
import Image from "next/future/image";
import { ShoesGalery } from "lib/source";

const ProductGalery = () => {
  return (
    <div className="flex flex-wrap items-center gap-x-4">
      {ShoesGalery.map((g, i) => {
        return (
          <Image src={g} key={i} className="w-20 h-20" alt={"media" + i} />
        );
      })}
    </div>
  );
};

export default React.memo(ProductGalery);
