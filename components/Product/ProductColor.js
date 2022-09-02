import React from "react";

const ProductColor = ({ colors, color, setColor }) => {
  const sSelect = React.useCallback((h) => {
    setColor(h);
  }, []);

  React.useEffect(() => {
    console.log("color", color?.color);
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

      <div>
        {colors?.length < 1 ? (
          <div>Color is unavailable</div>
        ) : (
          <div className="flex flex-wrap gap-4">
            {colors?.length > 1 &&
              colors.map((col, i) => {
                return (
                  <div key={i}>
                    <input
                      type="radio"
                      id={col[i]}
                      className={"absolute w-12 h-12 opacity-0"}
                      name={color}
                      value={color}
                      onChange={() =>
                        sSelect({ name: col?.name, color: col?.color_hash })
                      }
                    />

                    <label htmlFor={col[i]}>
                      <div
                        style={{
                          backgroundColor: col.color_hash,
                        }}
                        className={`${
                          color?.name === col?.name
                            ? "border-black border-[5px]"
                            : ""
                        } flex hover:bg-gray-300 items-center justify-center duration-200 border  w-12 h-12 rounded-full`}
                      ></div>
                    </label>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductColor;
