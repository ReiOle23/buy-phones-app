import { useEffect, useState } from "preact/hooks";
import { addProductToCart, getDetailProduct } from "../../api/service";
import { ProductDetailGrid } from "../../components/ProductDetailGrid";
import { IoCartOutline } from "react-icons/io5";
import eventEmitter from "../../api/globalEmitter";

export function ProductDetail({ productId }) {
  const [product, setProduct] = useState(null);
  const [storageSelected, setStorageSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);

  const initializeDefaultProductActions = (detailProduct) => {
    const firstStorage = detailProduct.options["storages"]
      ? detailProduct.options["storages"][0]
      : null;
    const firstColor = detailProduct.options["colors"]
      ? detailProduct.options["colors"][0]
      : null;
    setStorageSelected(firstStorage.code);
    setColorSelected(firstColor.code);
  };

  const fetchProductId = async (productId) => {
    const detailProduct = await getDetailProduct(productId);
    setProduct(detailProduct);
    initializeDefaultProductActions(detailProduct);
  };

  const addResultToCache = (result) => {
    const cartItems = localStorage.getItem("cartItems");
    if (!cartItems) {
      localStorage.setItem("cartItems", result["count"]);
    }else{
      const sum = Number(cartItems)+Number(result["count"]);
      localStorage.setItem("cartItems", sum.toString());
    }
    eventEmitter.emit('cartItem', { message: 'new item to cart' });
  }

  const addToCart = async () => {
    const productData = {
        id: product.id,
        colorCode: colorSelected,
        storageCode: storageSelected
    }
    const detailProduct = await addProductToCart(productData);
    addResultToCache(detailProduct);
  };

  useEffect(() => {
    fetchProductId(productId);
  }, []);

  return (
    <div className={"w-full h-auto p-0 md:p-[5vmin]"}>
      <ProductDetailGrid product={product}></ProductDetailGrid>

      <div
        className={
          "w-full h-auto px-0 md:px-[5vmin] xl:px-[10vmin] grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 gap-4"
        }
      >
        <div className={"col-span-1"}></div>
        <div className={"lg:col-span-2 xl:col-span-1 p-10 bg-[#a6abcd91]"}>
          {product && (
            <div className={"flex flex-col justify-center items-start"}>
              <div
                className={"w-full flex flex-col justify-center items-start"}
              >
                <span className={"text-[1.5rem] mb-3"}>Storage</span>
                <div className={"w-full flex flex-row justify-between gap-10"}>
                  {product.options["storages"].map((st, ind) => {
                    return (
                      <button
                        id={ind}
                        className={`max-w-1/3 cursor-pointer rounded-sm relative flex justify-start align-center size-full border py-3 no-underline ${
                          storageSelected == st.code
                            ? "bg-[#caa8ff]"
                            : "bg-inherit"
                        }`}
                        onClick={() => setStorageSelected(st.code)}
                      >
                        <div className="shrink-0" data-test="icon">
                          <div className="flex size-[24px] items-center justify-center">
                            <div
                              className={`w-[8px] h-[8px] rounded-full border ${
                                storageSelected == st.code
                                  ? "bg-[#000000]"
                                  : "bg-inherit"
                              }`}
                            ></div>
                          </div>
                        </div>
                        {st.name}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className={"w-full flex flex-col justify-center items-start mt-5"}>
                <span className={"text-[1.5rem] mb-3"}>Colors</span>
                <div className={"w-full flex flex-row justify-between gap-10"}>
                  {product.options["colors"].map((cl, ind) => {
                    return (
                      <button
                        id={ind}
                        className={`max-w-1/3 cursor-pointer rounded-sm relative flex justify-start align-center size-full border py-3 no-underline ${
                          colorSelected == cl.code
                            ? "bg-[#caa8ff]"
                            : "bg-inherit"
                        }`}
                        onClick={() => setColorSelected(cl.code)}
                      >
                        <div className="shrink-0" data-test="icon">
                          <div className="flex size-[24px] items-center justify-center">
                            <div
                              className={`w-[8px] h-[8px] rounded-full border ${
                                colorSelected == cl.code
                                  ? "bg-[#000000]"
                                  : "bg-inherit"
                              }`}
                            ></div>
                          </div>
                        </div>
                        {cl.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button className={"w-full bg-[#802fff] mt-5 rounded-full flex justify-center items-center p-3 text-[1rem] text-white gap-2 cursor-pointer hover:bg-[#000000]"} onClick={()=>addToCart()}>
                <IoCartOutline color="white" size={30}></IoCartOutline>
                Add to cart
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
