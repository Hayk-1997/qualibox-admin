import React from "react";
import Accordion from "@/components/molecules/Accordion";
import { TMaterialUpload } from "@/types/material";
import MaterialUploadPreview from "@/components/templates/Material/MaterialUploadPreview";

interface IMaterialUploadForm {
  materialUploads: TMaterialUpload[];
}

const MaterialUploadTemplate: React.FC<IMaterialUploadForm> = ({
  materialUploads,
}) => {
  return (
    <>
      {materialUploads.map((materialUpload) => (
        <React.Fragment key={materialUpload.id}>
          <Accordion
            item={String(materialUpload.id)}
            title={materialUpload.name}
          >
            <MaterialUploadPreview materialUpload={materialUpload} />
          </Accordion>
          <hr />
        </React.Fragment>
      ))}
    </>
  );
};

export default MaterialUploadTemplate;
