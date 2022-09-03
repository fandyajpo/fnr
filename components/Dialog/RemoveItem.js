import React from "react";
import { Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { removeOrder } from "rdx/bagStorage";
function RemoveItem(props, ref) {
  const dispatch = useDispatch();

  const [isShowing, setIsShowing] = React.useState(false);

  const closeDialog = React.useCallback(async () => {
    await Promise.all([setIsShowing(false), props.setRmvId("")]);
  }, []);

  const sDelete = React.useCallback(async () => {
    await Promise.all([
      dispatch(removeOrder({ id: props.rmvId })),
      props.setRmvId(""),
      setIsShowing(false),
    ]);
  }, [props.rmvId, dispatch]);

  React.useImperativeHandle(
    ref,
    () => {
      return {
        openDialog: (id) => {
          setIsShowing(true);
        },
      };
    },
    []
  );

  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`fixed inset-0 bg-black/50 bg-opacity-75 z-10 transition-opacity flex justify-center items-center px-4 `}
        aria-hidden="true"
      />
      <div
        className="w-full h-screen flex items-center justify-center fixed z-20 inset-0"
        aria-hidden={true}
        role={"dialog"}
      >
        <div className="bg-white w-5/6 md:w-2/4 h-24 rounded-md p-4 flex flex-col justify-between">
          <p>Are you sure want to remove item ?</p>
          <div className="flex flex-row gap-x-4">
            <button onClick={closeDialog} className="bg-grays px-2 rounded-md">
              Close
            </button>
            <button
              onClick={sDelete}
              className="bg-black text-white px-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default React.forwardRef(RemoveItem);
