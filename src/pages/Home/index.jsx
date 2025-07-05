import { useState } from "preact/hooks";
import preactLogo from "../../assets/preact.svg";
import { ProductsList } from "../../components/ProductsList";
import "./style.css";

export function Home() {
  const [searchWord, setSearchWord] = useState("");

  const searchProduct = (e) => {
    setSearchWord(e.target.value);
    console.log("point to endpoint", e.target.value);
  }

  return (
    <div className={"w-full p-5"}>
      <div className={"flex justify-end"}>
        <input 
        className={"w-[30%] p-2 border-2 border-purple-500"} 
        placeholder={"Search"} type="text"
        onChange={searchProduct}
        value={searchWord} />
      </div>

      <ProductsList></ProductsList>

      {/* <a href="https://preactjs.com" target="_blank">
        <img src={preactLogo} alt="Preact logo" height="160" width="160" />
      </a> */}

    </div>
  );
}
