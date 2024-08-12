import React from "react";
import dynamic from "next/dynamic";

const CategoriesTemplate = dynamic(
  () => import("@/components/templates/CategoriesTemplate"),
  {
    ssr: true,
  },
);

const CategoriesPage = (): React.JSX.Element => {
  return <CategoriesTemplate />;
};

export default CategoriesPage;
