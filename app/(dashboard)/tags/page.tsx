import React from "react";
import dynamic from "next/dynamic";

const TagTemplate = dynamic(
  () => import("@/components/templates/Tag/TagTemplate"), {
    ssr: true,
  },
);

const TagsPage = (): React.JSX.Element => {
  return <TagTemplate />;
};

export default TagsPage;
