import React from "react";

const ProductVideo = ({ setPlay, play, video }) => {
  const url = video;
  const closeMedia = React.useCallback(() => {
    setPlay(false);
  }, [setPlay]);

  return (
    <div
      onClick={closeMedia}
      className={`fixed inset-0 bg-black/50 bg-opacity-75 z-20 transition-opacity flex justify-center items-center px-4 ${
        play ? "" : "hidden"
      }`}
      aria-hidden="true"
    >
      <div className="w-full  h-2/4" aria-hidden={true} role={"dialog"}>
        <div className="w-full h-full flex justify-center">
          {play ? (
            <iframe className="w-full md:w-2/4 h-full" src={url}></iframe>
          ) : (
            <div className="bg-black w-full h-full"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductVideo;
