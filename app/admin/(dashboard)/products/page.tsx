import React from "react";
import dynamic from "next/dynamic";

const ProductTemplate = dynamic(
  () => import("@/components/templates/Product/ProductTemplate"),
  {
    ssr: true,
  },
);

const ProductsPage = (): React.JSX.Element => {
  return <ProductTemplate />;
};

export default ProductsPage;
