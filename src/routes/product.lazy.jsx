import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/product")({
  component: Product,
});

function Product() {
  return <div className="product-page-container"></div>;
}
