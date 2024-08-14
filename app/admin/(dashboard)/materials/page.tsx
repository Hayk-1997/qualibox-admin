import React from "react";
import dynamic from "next/dynamic";

const MaterialsPageTemplate = dynamic(
  () => import("@/components/templates/Material/MaterialsPageTemplate"),
  {
    ssr: true,
  },
);

const MaterialsPage = (): React.JSX.Element => {
  return <MaterialsPageTemplate />;
};

export default MaterialsPage;
