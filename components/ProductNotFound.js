import React from "react";

const ProductNotFound = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-white w-full h-96 flex justify-center items-center">
        Product doesnt exist {" :("}
      </div>
    </div>
  );
};

export default React.memo(ProductNotFound);
