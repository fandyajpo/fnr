import React from "react";
import { Transition } from "@headlessui/react";
import { CloseSvg } from "lib/listSvg";

const ProductVideo = ({ setPlay, play, video }) => {
  const url = video;
  const closeMedia = React.useCallback(() => {
    setPlay(false);
  }, [setPlay]);

  return (
    <Transition
      show={play}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0 z-30"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`fixed inset-0 bg-black/50 z-50 bg-opacity-75 transition-opacity flex justify-center items-center px-4`}
        aria-hidden="true"
      >
        <div className="w-full  h-2/4" aria-hidden={true} role={"dialog"}>
          <div className="w-full h-full flex justify-center">
            {play && (
              <div className="flex flex-col w-full items-center gap-y-10">
                <iframe
                  className="w-full md:w-2/4 h-full"
                  src={play ? url : ""}
                ></iframe>
                <button
                  onClick={closeMedia}
                  className="bg-white hover:bg-gray-300 duration-200 rounded-full  flex items-center justify-center p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ProductVideo;
