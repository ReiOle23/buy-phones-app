import { useLocation } from "preact-iso";

export function ProductsList({ productList }) {
  const location = useLocation();

  console.log(productList);

  return (
    <section className={"mt-10 grid grid-cols-4 gap-6"}>
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
      href={props.href}
      target="_blank"
      class="h-[300px] cursor-pointer bg-[#d0b6ff] px-6 py-3 rounded-lg text-left no-underline text-[#222] border border-transparent hover:border-black hover:shadow-[0_25px_50px_-12px_#673ab888]"
    >
      <img className={"w-full h-[70%] bg-gray-500"} src={props.img} alt="" />
      <h1 className={"text-"}>{props.brand}</h1>
      <div className={"w-full flex justify-between"}>
        <p>{props.model}</p>
        <p>{props.price}€</p>
      </div>
    </a>
  );
}
