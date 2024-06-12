import React, { memo } from "react";
import Image from "next/image";
import { useController, UseControllerProps } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";
import FormErrorMessage from "@/components/molecules/FormErrorMessage";

interface IMaterialUploadFilePreviewProps extends UseControllerProps<Control> {
  file: File;
  name: string;
  onRemove: () => void;
  imagePreview: React.RefObject<>;
}

const MaterialUploadFilePreview: React.FC<IMaterialUploadFilePreviewProps> = ({ onRemove, file, imagePreview, ...props  }) => {
  const { fieldState } = useController(props);

  return (
    <>
      {file && (
        <div className="col-12">
          <Image
            src=""
            alt="Preview"
            ref={imagePreview}
            width={100}
            size="15vw"
            style={{
              height: "auto",
            }}
          />
          <div className="d-flex mt-1">
            <button className="btn btn-danger" onClick={onRemove}>
              <i className="ri-close-circle-fill m-1" />
              Remove
            </button>
          </div>
        </div>
      )}
      {fieldState.error && (
        <div className="mt-1">
          <FormErrorMessage message={fieldState.error.message} />
        </div>
      )}
    </>
  );
};

export default memo(MaterialUploadFilePreview);
