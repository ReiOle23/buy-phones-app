import { useEffect, useState } from "preact/hooks";
import { ProductsList } from "../../components/ProductsList";
import { getProducts } from "../../api/service";
import { SearchProduct } from "../../components/SearchProduct";

export function Home() {
  const [productList, setProductList] = useState([]);
  const [filterProductList, setFilterProductList] = useState([]);

  const saveDataToStorage = (data) => {
    const dataStored = { value: data, timestamp: new Date(new Date().getTime() + 3600000)};
    localStorage.setItem("productList", JSON.stringify(dataStored));
  };

  const isDataExpirated = () => {
    const productList = localStorage.getItem("productList");
    if (!productList) {
      return true;
    } else {
      const dateString = JSON.parse(productList).timestamp;
      const now = new Date().getTime().toString();
      if (now > dateString) return true;
    }
    return false;
  };

  const fetchProducts = async () => {
    const products = await getProducts();
    setProductList(products);
    setFilterProductList(products);
    saveDataToStorage(products);
  };

  const fillProducts = async () => {
    if (!isDataExpirated()) {
      const productList = localStorage.getItem("productList");
      const products = JSON.parse(productList).value;
      setProductList(products);
      setFilterProductList(products);
    } else {
      fetchProducts()
    }
  };

  useEffect(() => {
    fillProducts();
  }, []);

  const filterProductsByWord = (word) => {
    word = word.toLowerCase();
    if (word) {
      setFilterProductList(
        productList.filter(
          (prd) =>
            prd.brand.toLowerCase().includes(word) ||
            prd.model.toLowerCase().includes(word)
        )
      );
    } else {
      setFilterProductList(productList);
    }
  };

  return (
    <div className={"w-full p-5"}>
      <SearchProduct onSearch={filterProductsByWord}></SearchProduct>
      <ProductsList productList={filterProductList}></ProductsList>
    </div>
  );
}
