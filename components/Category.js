import React from "react";

const Category = ({ children }) => {
  return (
    <p className="pb-20 pt-24 font-bold text-5xl text-center">{children}</p>
  );
};

export default React.memo(Category);
