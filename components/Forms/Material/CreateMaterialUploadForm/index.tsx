import React, { useCallback, useRef } from "react";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import FileUpload from "@/components/molecules/FileUpload";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import uploadMaterialSchema from "@/validationSchemas/material/materialUploadSchema";
import { useCreateMaterialUploadMutation } from "@/lib/apiModules/material/api";
import MaterialUploadFilePreview from "@/components/atoms/MaterialUploadFilePreview";

const CreateMaterialUploadForm = ({ materialId }) => {
  const [createMaterialUpload] = useCreateMaterialUploadMutation();
  const imagePreview = useRef();
  const { handleSubmit, control, setValue, getValues, watch, clearErrors } =
    useForm({
      defaultValues: {
        name: "",
        description: "",
        file: null,
      },
      resolver: yupResolver(uploadMaterialSchema),
      mode: "onChange",
    });

  watch("file");

  const handleFileChange = (file: File[]): void => {
    const currentFile = file[0];
    setValue("file", currentFile);
    const reader = new FileReader();
    reader.onload = function () {
      imagePreview.current.src = reader.result;
    };
    reader.readAsDataURL(currentFile);
    clearErrors("file");
  };

  const onSubmit = useCallback(
    (data) => {
      createMaterialUpload({ ...data, materialId });
    },
    [createMaterialUpload, materialId],
  );

  return (
    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-12">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <div className="input-group">
          <InputWithValidation
            name="name"
            placeholder="Name"
            id="name"
            control={control}
            withError={true}
          />
        </div>
      </div>
      <div className="col-12">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <InputWithValidation
          name="description"
          id="description"
          control={control}
          withError={true}
        />
      </div>
      <FileUpload handleChange={handleFileChange} multiple={true} />
      <MaterialUploadFilePreview
        file={getValues().file}
        name="file"
        imagePreview={imagePreview}
        control={control}
        onRemove={() => {
          imagePreview.current = null;
          setValue("file", null, { shouldValidate: true });
        }}
      />
      <div className="col-12">
        <div className="d-flex justify-content-end gap-5">
          <div>
            <button type="submit" className="btn btn-success">
              Submit Form
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateMaterialUploadForm;
