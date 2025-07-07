import { useLocation } from "preact-iso";

export function ProductsList({ productList }) {
  const location = useLocation();

  console.log(productList);

  return (
    <section className={"mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"}>
      {productList.map((prd) => {
        return (
          <ProductBox
            key={prd.id}
            id={prd.id}
            brand={prd.brand}
            img={prd.imgUrl}
            model={prd.model}
            price={prd.price}
          />
        );
      })}
    </section>
  );
}

function ProductBox(props) {
  return (
    <a
      id={props.id}
      href={`/product/${props.id}`}
      class="h-[40vh] cursor-pointer bg-[#FFFFFF] px-6 py-3 rounded-lg text-left no-underline text-[#222] border border-transparent hover:shadow-[0_15px_30px_-12px_#673ab888]"
    >
      <div className={"w-full h-[70%] p-10"}>
        <img
          className={"w-full h-[80%] bg-gray-500 mb-6"}
          src={props.img}
          alt=""
        />
      </div>
      <h1 className={"font-bold text-[20px]"}>{props.model}</h1>
      <div className={"w-full flex justify-between"}>
        <p>{props.brand}</p>
        <p>{props.price}€</p>
      </div>
    </a>
  );
}
