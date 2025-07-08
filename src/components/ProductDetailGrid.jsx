import { useState } from "preact/hooks";

export function ProductDetailGrid({ product }) {
  
  const productProperty = (type, prop) => {
    return (
      <div className={"w-full flex gap-4 my-1"}>
        <div className={"w-[40%] bg-[#4d00c3] text-white py-1 px-2"}>
          {type}
        </div>
        <span className={"w-full bg-[#caa8ff] py-1 px-3 text-start"}>
          {prop}
        </span>
      </div>
    );
  };

  return (
    <div
      className={
        "w-full h-auto py-5 px-0 md:px-[5vmin] xl:px-[10vmin] grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 gap-4 justify-center items-center"
      }
    >
      <div
        className={"w-full h-full col-span-1 flex items-center justify-center"}
      >
        <img
          className={"max-w-full h-full lg:py-10 object-fit"}
          src={product?.imgUrl}
          alt="Image mobile"
        />
      </div>
      <div className={"lg:col-span-2 xl:col-span-1 p-2 md:p-10 bg-[#a6abcd91]"}>
        {product && (
          <div className={"flex flex-col justify-center items-start"}>
            <div className={"text-[1.5rem] text-[#303233]"}>
              {product.brand} - {product.model}
            </div>
            <span className={"text-[2.5rem] text-[#303233]"}>
              {product.price}€
            </span>

            <div
              className={
                "w-full flex flex-col justify-center items-start text-[1rem]"
              }
            >
              {productProperty("CPU", product.cpu)}
              {productProperty("RAM", product.ram)}
              {productProperty("OS", product.os)}
              {productProperty("Screen", product.displayResolution)}
              {productProperty("Size", product.displaySize)}
              {productProperty("Battery", product.battery)}
              {productProperty("Camera", product.primaryCamera.join(" "))}
              {productProperty("Camera 2", product.secondaryCmera)}
              {productProperty("Dimentions", product.dimentions)}
              {productProperty("Weight", product.weight)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
