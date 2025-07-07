import { useState } from "preact/hooks";

export function SearchProduct({ onSearch }) {
  const [searchWord, setSearchWord] = useState("");
  const searchProduct = (e) => {
    const value = e.target.value;
    setSearchWord(value);
    onSearch?.(value);
  };

  return (
    <div className={"w-full flex justify-end"}>
      <input
        className={"w-full sm:w-[50vmin] lg:w-[60vmin] p-2 border-2 rounded-sm border-purple-500"}
        placeholder={"Searching here ... "}
        type="text"
        onInput={searchProduct}
        value={searchWord}
      />
    </div>
  );
}
