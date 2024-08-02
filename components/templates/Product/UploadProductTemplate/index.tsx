import React, { useEffect, useMemo, useState } from "react";
import { useGetMaterialUploadsQuery } from "@/lib/apiModules/material/api";
import { bindMaterialUploadsSelectOption } from "@/utils/material";
import ProductUploadRow from "@/components/templates/Product/UploadProductTemplate/ProductUploadRow";
import Accordion from "@/components/molecules/Accordion";
import { TProductUploads } from "@/types/product";
import { TMaterial } from "@/types/material";
import { PRODUCT_DEFAULT_UPLOADS } from "@/constants/product";

interface IUploadProductTemplate {
  productId: number;
  parentMaterialIds: number[];
  uploadedFiles: TProductUploads[];
  parentMaterials: TMaterial[];
}

const UploadProductTemplate: React.FC<IUploadProductTemplate> = ({
  productId,
  parentMaterialIds,
  uploadedFiles,
  parentMaterials,
}) => {
  const { data: materialUploads } = useGetMaterialUploadsQuery("");
  const [initialUploadedFiles, setInitialUploadedFiles] = useState();

  useEffect(() => {
    setInitialUploadedFiles(
      uploadedFiles.length ? uploadedFiles : [PRODUCT_DEFAULT_UPLOADS],
    );
  }, [uploadedFiles]);

  const materialUploadsSelectOptions = useMemo(() => {
    if (materialUploads && parentMaterialIds) {
      return bindMaterialUploadsSelectOption(
        materialUploads.data,
        parentMaterialIds,
        parentMaterials,
      );
    }
    return [];
  }, [materialUploads, parentMaterialIds, parentMaterials]);

  const handleAddNewImage = (): void => {
    setInitialUploadedFiles((prevState) => [
      ...prevState,
      {
        materialId: 0,
        file: null,
      },
    ]);
  };

  return (
    <div className="row">
      <h5 className="card-title">Upload Image</h5>
      {initialUploadedFiles?.map((field, index) => (
        <React.Fragment key={index}>
          <Accordion title={`Upload ${index + 1}`} item={`upload_${index}`}>
            <ProductUploadRow
              index={index}
              materialUploadsSelectOptions={materialUploadsSelectOptions}
              productId={productId}
              field={field}
            />
          </Accordion>
        </React.Fragment>
      ))}
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleAddNewImage}
        >
          <i className="ri-add-circle-fill" />
          <span>Add New Image</span>
        </button>
      </div>
    </div>
  );
};

export default UploadProductTemplate;
