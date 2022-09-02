import React from "react";

const Category = ({ children }) => {
  return (
    <p className="pb-8 pt-14 md:pb-20 md:pt-24 font-bold text-3xl md:text-5xl text-center">
      {children}
    </p>
  );
};

export default React.memo(Category);
