import React, { useEffect } from "react";
import Image from "next/image";
import SelectWithValidation from "@/components/molecules/SelectWithValidation";
import FileUpload from "@/components/molecules/FileUpload";
import FormErrorMessage from "@/components/molecules/FormErrorMessage";
import {
  useRemoveProductFileMutation,
  useUpdateProductFileMaterialMutation,
  useUploadProductFileMutation,
} from "@/lib/apiModules/product/api";
import { TSelectOptions } from "@/types/common";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import uploadProductSchema from "@/validationSchemas/product/uploadProductSchema";
import { fileSchema } from "@/validationSchemas/file";

import * as yup from "yup";

interface IProductUploadRow {
  materialUploadsSelectOptions: TSelectOptions[];
  index: number;
  productId: number;
}

const ProductUploadRow: React.FC<IProductUploadRow> = ({
  materialUploadsSelectOptions,
  field,
  index,
  productId,
}): React.JSX.Element => {
  const [removeUploadFile] = useRemoveProductFileMutation();
  const [uploadFile] = useUploadProductFileMutation();
  const [updateMaterial] = useUpdateProductFileMaterialMutation();

  const { control, setValue, getValues, watch, register } = useForm({
    defaultValues: {
      materialId: field.materialId,
      file: field.files,
      productId: productId,
    },
    resolver: yupResolver(uploadProductSchema),
    mode: "onChange",
  });
  watch(["file", "materialId"]);
  register(`file`);

  useEffect(() => {
    setValue("file", field.files);
  }, [field.files, setValue]);

  const handleFileChange = (file: File[]): void => {
    yup
      .reach(fileSchema, "file")
      .isValid(file[0])
      .then((isValid) => {
        if (isValid) {
          uploadFile({
            productId,
            file: file[0],
            materialId: getValues().materialId,
          });
        }
      });
  };

  const updateSelectedMaterial = (data): void => {
    const currentMaterialId = getValues().materialId;
    if (currentMaterialId) {
      yup
        .reach(fileSchema, "file")
        .isValid(getValues().file[0])
        .then((isValid) => {
          if (isValid) {
            updateMaterial({
              productId,
              materialId: data.value,
              oldMaterialId: currentMaterialId,
            });
          }
        });
    }

    setValue("materialId", String(data.value), {
      shouldValidate: true,
    });
  };

  return (
    <div className="row">
      <div className="col-6 mb-3">
        <label htmlFor="materialId" className="form-label">
          Material
        </label>
        <SelectWithValidation
          value={
            materialUploadsSelectOptions.find(
              (item) => String(item.value) === String(getValues().materialId),
            ) ?? null
          }
          onChange={(data) => updateSelectedMaterial(data)}
          id="materialId"
          name="materialId"
          placeholder="Select Maerial"
          control={control}
          options={materialUploadsSelectOptions}
          withError={true}
        />
      </div>
      <div className="col-6">
        <FileUpload handleChange={handleFileChange} multiple={false} />
        {control._formState.errors?.fields && (
          <div className="mt-1">
            <FormErrorMessage
              message={control._formState.errors?.fields[index]?.file?.message}
            />
          </div>
        )}
      </div>
      <div className="col-12">
        {getValues().file && (
          <div className="row">
            {getValues().file.map((file, index) => (
              <div className="col-3 mt-3" key={index}>
                <Image
                  src={file.path}
                  alt={file.path}
                  width={100}
                  height={100}
                />
                <div className="d-flex mt-1">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      removeUploadFile({
                        productId,
                        uploadId: file.uploadId,
                      });
                    }}
                  >
                    <i className="ri-close-circle-fill m-1" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductUploadRow;
