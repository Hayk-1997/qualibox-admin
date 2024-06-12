import React, { useCallback } from "react";
import { TCreateMaterialFormRequest } from "@/types/material";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createMaterialSchema from "@/validationSchemas/material/createMaterialSchema";
import { useCreateMaterialMutation } from "@/lib/apiModules/material/api";

interface ICreateMaterialForm {
  onClose: () => void;
}

const CreateMaterialForm: React.FC<ICreateMaterialForm> = ({
  onClose,
}): React.JSX.Element => {
  const [createMaterial] = useCreateMaterialMutation({
    fixedCacheKey: "shared-create-material",
  });
  const { handleSubmit, control } = useForm<TCreateMaterialFormRequest>({
    defaultValues: {
      name: "",
      price: "",
      cost: "",
    },
    resolver: yupResolver(createMaterialSchema),
    mode: "onChange",
  });

  const onSubmit = useCallback(
    (data: TCreateMaterialFormRequest): void => {
      createMaterial(data);
    },
    [createMaterial],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12 mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-12">
            <InputWithValidation
              name="name"
              id="name"
              control={control}
              withError={true}
            />
          </div>
        </div>

        <div className="col-12 mb-3">
          <label htmlFor="price" className="col-sm-2 col-form-label">
            Price
          </label>
          <div className="col-sm-12">
            <InputWithValidation
              name="price"
              id="price"
              control={control}
              withError={true}
            />
          </div>
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="cost" className="col-sm-2 col-form-label">
            Cost
          </label>
          <div className="col-sm-12">
            <InputWithValidation
              name="cost"
              id="cost"
              control={control}
              withError={true}
            />
          </div>
        </div>

        <div className="col-12">
          <div className="d-flex justify-content-end gap-5">
            <div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
            <div>
              <button type="submit" className="btn btn-success">
                Submit Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateMaterialForm;
