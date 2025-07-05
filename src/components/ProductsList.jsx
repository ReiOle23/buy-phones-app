import { useLocation } from "preact-iso";

export function ProductsList() {
  const location = useLocation();

  return (
    <section className={"mt-10 grid grid-cols-4 gap-6"}>
        <ProductBox
          title="Learn Preact"
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          href="https://preactjs.com/tutorial"
        />
        <ProductBox
          title="Differences to React"
          description="If you're coming from React, you may want to check out our docs to see where Preact differs"
          href="https://preactjs.com/guide/v10/differences-to-react"
        />
        <ProductBox
          title="Learn Vite"
          description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
          href="https://vitejs.dev"
        />
        <ProductBox
          title="Learn Vite"
          description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
          href="https://vitejs.dev"
        />
         <ProductBox
          title="Learn Vite"
          description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
          href="https://vitejs.dev"
        />
         <ProductBox
          title="Learn Vite"
          description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
          href="https://vitejs.dev"
        />
      </section>
  );
}

function ProductBox(props) {
  return (
    <a href={props.href} target="_blank" class="h-[200px] resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}