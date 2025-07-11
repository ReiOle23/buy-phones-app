import { useLocation } from "preact-iso";
import { IoCartOutline } from "react-icons/io5";
import { Breadcrumbs } from "./Breadcrumbs";
import { useEffect, useState } from "preact/hooks";
import eventEmitter from "../api/globalEmitter";

export function Header() {
  const [cartItems, setCartItems] = useState(0);

  const refreshCartItems = () => {
    const storageItems = localStorage.getItem("cartItems") || 0;
    setCartItems(Number(cartItems) + Number(storageItems));
  };

  useEffect(() => {
    refreshCartItems();

    eventEmitter.on("cartItem", refreshCartItems);
    return () => {
      eventEmitter.off("cartItem", refreshCartItems);
    };
  }, []);

  return (
    <header>
      <div className={"w-full h-[20vmin] sm:h-[10vmin] px-[5%]"}>
        <nav className={"w-full h-[70%] flex justify-between items-center"}>
          <a
            href="/"
            className={
              "text-[#FFFFFF] text-[30px] font-bold no-underline cursor-pointer"
            }
          >
            PhoneTime
          </a>
          <div
            className={
              "flex items-center justify-center cursor-pointer text-[#FFFFFF] gap-[8px]"
            }
          >
            <IoCartOutline color="white" size={35}></IoCartOutline>
            <span class="text-[20px]">{cartItems}</span>
          </div>
        </nav>

        <Breadcrumbs></Breadcrumbs>
      </div>
    </header>
  );
}
