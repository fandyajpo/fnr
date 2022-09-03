import React from "react";

const ProductColor = ({ colors, color, setColor }) => {
  const sSelect = React.useCallback(
    (h) => () => {
      setColor(h);
    },
    [color]
  );

  React.useEffect(() => {
    console.log("color", color);
  });

  return (
    <div className="flex flex-col gap-4">
      <p
        className={`font-bold text-md duration-200 ${
          color === undefined ? "" : "text-green-500"
        }`}
      >
        {color === undefined ? "SELECT COLOR" : "COLOR SELECTED"}
      </p>
      <p className="text-[10px]">select available color before save it</p>

      <div className="flex flex-wrap gap-4">
        {React.useMemo(() => {
          return (
            colors?.length > 1 &&
            colors.map((col, i) => {
              return (
                <div key={i}>
                  <input
                    type="radio"
                    id={i + "color"}
                    className={"absolute w-12 h-12 opacity-0"}
                    name={color + "color"}
                    checked={col[color?.id] ? col[color?.id] : false}
                    onChange={sSelect({
                      name: col?.name,
                      color: col?.color_hash,
                      id: i,
                    })}
                  />

                  <label htmlFor={i + "color"}>
                    <div
                      style={{
                        backgroundColor: col.color_hash,
                      }}
                      className={`${
                        i === color?.id ? "border-black border-[5px]" : ""
                      } flex hover:bg-gray-300 items-center justify-center duration-200 border  w-12 h-12 rounded-full`}
                    ></div>
                  </label>
                </div>
              );
            })
          );
        }, [color])}
      </div>
    </div>
  );
};

export default React.memo(ProductColor);
