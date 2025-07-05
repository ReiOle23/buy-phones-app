import { useLocation } from "preact-iso";
import { IoCartOutline } from "react-icons/io5";
import { Breadcrumbs } from "./Breadcrumbs";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <div className={"w-full h-[10vmin] px-[5%]"}>
        <nav className={"w-full h-[70%] flex justify-between items-center"}>
          <a href="/" className={"text-[#FFFFFF] text-[26px] no-underline cursor-pointer"}>
            Phone Home
          </a>
          <div className={"flex cursor-pointer text-[#FFFFFF] gap-[8px]"}>
            <IoCartOutline color="white" size={24}></IoCartOutline>
            <span>0</span>
          </div>
        </nav>

        <Breadcrumbs></Breadcrumbs>
      </div>
    </header>
  );
}
