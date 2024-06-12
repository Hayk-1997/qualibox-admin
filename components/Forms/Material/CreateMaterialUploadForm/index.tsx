import React, { useCallback } from "react";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import FileUpload from "@/components/molecules/FileUpload";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import uploadMaterialSchema from "@/validationSchemas/material/materialUploadSchema";
import { useCreateMaterialUploadMutation } from "@/lib/apiModules/material/api";

const CreateMaterialUploadForm = ({ materialId }) => {
  const [createMaterialUpload] = useCreateMaterialUploadMutation();
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      name: "",
      description: "",
      file: {},
    },
    resolver: yupResolver(uploadMaterialSchema),
    mode: "onChange",
  });

  const handleFileChange = (file: File[]) => {
    setValue("file", file[0]);
    // file = file[0];
    // const reader = new FileReader();
    // reader.onload = function () {
    // const dataURL = reader.result;
    // const output = document.getElementById('output');
    // output.src = dataURL;
    // setValue('file', dataURL);
    // };
    // reader.readAsDataURL(file);
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
      <FileUpload handleChange={handleFileChange} />

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
