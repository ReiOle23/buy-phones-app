import { useState } from "preact/hooks";

export function SearchProduct({ onSearch }) {
  const [searchWord, setSearchWord] = useState("");
  const searchProduct = (e) => {
    const value = e.target.value;
    setSearchWord(value);
    onSearch?.(value);
  };

  return (
    <div className={"flex justify-end"}>
      <input
        className={"w-[30%] p-2 border-2 border-purple-500"}
        placeholder={"Search"}
        type="text"
        onInput={searchProduct}
        value={searchWord}
      />
    </div>
  );
}
