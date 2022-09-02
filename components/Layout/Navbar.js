import React from "react";
import { NikeSvg, Bag, Profile, NavMenu } from "lib/listSvg";
import { useRouter } from "next/router";
import { orderPrice } from "rdx/bagStorage";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const navRef = React.useRef();

  const { bag, orderQuantity } = useSelector((state) => state.bag);

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    dispatch(orderPrice());
  }, [dispatch, orderQuantity, bag]);

  const handleNavbar = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  const router = useRouter();
  const {
    query: { id },
  } = router;

  const goTo = React.useCallback(
    (route) => {
      router.push(route);
    },
    [router]
  );

  React.useEffect(() => {
    console.log("Navbar Render");
  });

  return (
    <>
      <div className="bg-white backdrop-blur-sm w-full h-20 flex flex-row items-center justify-between px-4 md:px-8 lg:px-44 z-10">
        <div
          className={`bg-black/60 w-full h-screen inset-0 fixed ${
            open ? "" : "hidden"
          }`}
          onClick={handleNavbar}
        />
        <div className="w-16 h-auto">
          <button
            onClick={() => {
              goTo("/");
            }}
          >
            <NikeSvg />
          </button>
        </div>
        <div
          className={`flex flex-col z-10 md:flex-row md:items-center md:w-2/4 justify-around font-bold absolute md:relative md:h-auto bg-grays md:bg-transparent  left-0 duration-200 md:overflow-hidden md:p-0 top-0  w-full p-4  ${
            open ? "h-44 " : "h-0 scale-0 opacity-0 md:scale-100 md:opacity-100"
          }`}
        >
          <div>
            <button
              className={`w-full md:w-auto text-left duration-75 ${
                id === "all" && "border-b-2 border-black"
              }`}
              onClick={() => {
                goTo("/all");
              }}
            >
              New Release
            </button>
          </div>
          <div>
            <button
              className={`w-full md:w-auto text-left duration-75 ${
                id === "men" && "border-b-2 border-black"
              }`}
              onClick={() => {
                goTo("/men");
              }}
            >
              Men
            </button>
          </div>
          <div>
            <button
              className={`w-full md:w-auto text-left duration-75 ${
                id === "woman" && "border-b-2 border-black"
              }`}
              onClick={() => {
                goTo("/sport");
              }}
            >
              Sport
            </button>
          </div>
          <div>
            <button
              className={`w-full md:w-auto text-left duration-75 ${
                id === "kids" && "border-b-2 border-black"
              }`}
              onClick={() => {
                goTo("/kids");
              }}
            >
              Kids
            </button>
          </div>
          <div>
            <button
              className={`w-full md:w-auto text-left duration-75 ${
                id === "custom" && "border-b-2 border-black"
              }`}
              onClick={() => {
                goTo("/custom");
              }}
            >
              Customize
            </button>
          </div>
        </div>
        <div className="w-28 md:w-16 h-auto flex flex-row items-center justify-between">
          <button onClick={() => goTo("/bag")} className="relative">
            <div
              className={`w-4 text-xs h-4 text-white rounded-full absolute -top-2 -right-2 duration-200 flex justify-center items-center ${
                orderQuantity > 0 ? "bg-red-500" : "bg-transparent opacity-0"
              }`}
            >
              {orderQuantity}
            </div>
            <Bag />
          </button>
          <button onClick={() => alert("Profile is underdev")}>
            <Profile />
          </button>
          <button onClick={handleNavbar} className={"md:hidden"}>
            <NavMenu />
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(Navbar);
