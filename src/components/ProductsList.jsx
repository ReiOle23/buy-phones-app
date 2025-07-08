export function ProductsList({ productList }) {

  return (
    <section
      className={
        "p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      }
    >
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
      class="h-[35vh] cursor-pointer px-6 py-3 rounded-lg text-left no-underline text-[#222] border border-transparent hover:shadow-[0_15px_30px_-12px_#673ab888]"
    >
      <div className="w-full xl:px-5 flex items-center justify-center">
        <img
          className="max-w-full max-h-full object-contain bg-gray-500 mb-6"
          src={props.img}
          alt=""
        />
      </div>
      <div className={"flex flex-col justify-center items-center"}>
        <h1 className={"text-[18px]"}>
          {props.brand} {props.model}
        </h1>
        <div className={"font-bold text-[24px]"}>
          <p>{props.price} €</p>
        </div>
      </div>
    </a>
  );
}
