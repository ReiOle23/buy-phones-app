import { useEffect, useState } from "preact/hooks";
import { getDetailProduct } from "../../api/service";
import { ProductDetailGrid } from "../../components/ProductDetailGrid";

export function ProductDetail({ productId }) {
  const [product, setProduct] = useState(null);

  const fetchProductId = async (productId) => {
    const detailProduct = await getDetailProduct(productId);
    setProduct(detailProduct);
    console.log(detailProduct);
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
            <div className={"text-[2rem] "}>Storage</div>
            <span className={"text-[2rem] "}>Colors</span>

            <div
              className={"w-full flex flex-col justify-center items-start text-[1rem]"}
            >

            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
