import { useEffect, useState } from "preact/hooks";
import { ProductsList } from "../../components/ProductsList";
import { getDetailProduct, getProducts } from "../../api/service";
import { SearchProduct } from "../../components/SearchProduct";

export function ProductDetail({ productId }) {
  const [product, setProduct] = useState();

  const fetchProductId = async (productId) => {
    const detailProduct = await getDetailProduct(productId);
    setProduct(detailProduct);

  };

  useEffect(() => {
    console.log(productId);
    fetchProductId(productId);
  }, []);

  return (
    <div className={"w-full p-5"}>

      {/* <a href="https://preactjs.com" target="_blank">
        <img src={preactLogo} alt="Preact logo" height="160" width="160" />
      </a> */}
    </div>
  );
}
