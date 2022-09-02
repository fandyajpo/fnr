import React from "react";

const ProductSize = ({ sizes, size, setSize }) => {
  const sSelect = React.useCallback(
    (h) => {
      setSize(h);
    },
    [size]
  );

  React.useEffect(() => {
    console.log("size", size);
  }, [size]);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p
          className={`font-bold text-md duration-200 ${
            size === undefined ? "" : "text-green-500"
          }`}
        >
          {size === undefined ? "SELECT SIZE (US)" : "SIZE SELECTED (US)"}
        </p>
        <p className="text-[10px]">select available size before save it</p>
      </div>

      <div className="flex flex-wrap w-full md:w-64 gap-4">
        {React.useMemo(() => {
          return (
            sizes?.length > 1 &&
            sizes.map((sz, i) => {
              return (
                <div key={i}>
                  <input
                    type="radio"
                    id={i + "size"}
                    className={"absolute w-12 h-12 opacity-0"}
                    name={size + "size"}
                    checked={sz[size?.id] ? sz[size?.id] : false}
                    onChange={() => sSelect({ size: sz, id: i })}
                  />

                  <label htmlFor={i + "size"}>
                    <div
                      className={`flex items-center justify-center duration-200 border ${
                        size?.size === sz ? "bg-black text-white" : "bg-white"
                      } w-12 h-12`}
                    >
                      {sz}
                    </div>
                  </label>
                </div>
              );
            })
          );
        }, [size])}
      </div>
    </div>
  );
};

export default React.memo(ProductSize);
