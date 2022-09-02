import React from "react";

const ProductSize = ({ sizes, size, setSize }) => {
  const sSelect = React.useCallback((h) => {
    setSize(parseFloat(h));
  }, []);

  React.useEffect(() => {
    console.log("selected : ", size);
  });

  return (
    <div className="flex flex-col gap-4">
      <p
        className={`font-bold text-md duration-200 ${
          size === undefined ? "" : "text-green-500"
        }`}
      >
        {size === undefined ? "SELECT SIZE (US)" : "SIZE SELECTED (US)"}
      </p>

      <div className="flex flex-wrap w-full md:w-64 gap-4">
        {sizes?.length > 1 &&
          sizes.map((sz, i) => {
            return (
              <div key={i}>
                <input
                  type="radio"
                  id={i}
                  className={"absolute w-12 h-12 opacity-0"}
                  name={size}
                  value={size}
                  onChange={() => sSelect(sz)}
                />

                <label htmlFor={i}>
                  <div
                    className={`flex items-center justify-center duration-200 border ${
                      size === parseFloat(sz)
                        ? "bg-black text-white"
                        : "bg-white"
                    } w-12 h-12`}
                  >
                    {sz}
                  </div>
                </label>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default React.memo(ProductSize);
