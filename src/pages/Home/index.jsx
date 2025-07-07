import { useEffect, useState } from "preact/hooks";
import preactLogo from "../../assets/preact.svg";
import { ProductsList } from "../../components/ProductsList";
import { getProducts } from "../../api/service";
import { SearchProduct } from "../../components/SearchProduct";

export function Home() {
  const [productList, setProductList] = useState([]);
  const [filterProductList, setFilterProductList] = useState([]);

  const fetchProducts = async () => {
    const products = await getProducts();
    setProductList(products);
    setFilterProductList(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterProductsByWord = (word) => {
    word = word.toLowerCase();
    if (word) {
      setFilterProductList(
        productList.filter(
          (prd) => prd.brand.toLowerCase().includes(word) || prd.model.toLowerCase().includes(word)
        )
      );
    }else{
      setFilterProductList(productList)
    }
  };

  return (
    <div className={"w-full p-5"}>
      <SearchProduct onSearch={filterProductsByWord}></SearchProduct>
      <ProductsList productList={filterProductList}></ProductsList>
    </div>
  );
}
