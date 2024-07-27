import React, { memo } from "react";
import Image from "next/image";
import { useController, UseControllerProps } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";
import FormErrorMessage from "@/components/molecules/FormErrorMessage";

interface IImagePreview extends UseControllerProps<Control> {
  file: File;
  onRemove: () => void;
  imagePreview: React.RefObject<>;
  showError: boolean;
  title?: string;
}

const ImagePreview: React.FC<IImagePreview> = ({
  onRemove,
  file,
  imagePreview,
  title,
  showError = true,
  showRemoveButton = true,
  ...props
}): React.JSX.Element => {
  const { fieldState } = useController(props);

  return (
    <>
      {file && (
        <div>
          {title && <div className="col-12">{title}</div>}
          <div className="col-12">
            <Image
              src=""
              alt="Your File Preview"
              ref={imagePreview}
              width={100}
              size="15vw"
              style={{
                height: "auto",
              }}
            />
            {
              showRemoveButton && (
                <div className="d-flex mt-1">
                  <button className="btn btn-danger" type="button" onClick={onRemove}>
                    <i className="ri-close-circle-fill m-1" />
                    Remove
                  </button>
                </div>
              )
            }
          </div>
        </div>
      )}
      {fieldState.error && showError && (
        <div className="mt-1">
          <FormErrorMessage message={fieldState.error.message} />
        </div>
      )}
    </>
  );
};

export default memo(ImagePreview);
