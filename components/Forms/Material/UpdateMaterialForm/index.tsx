import React, { useCallback } from "react";
import { TMaterial, TUpdateMaterialForm } from "@/types/material";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import updateMaterialSchema from "@/validationSchemas/material/updateMaterialSchema";
import { useAppDispatch } from "@/lib/hooks";
import { makeUpdateMaterialRequest } from "@/lib/features/materialSlice/service";
import FileUpload from "@/components/molecules/FileUpload";

interface IUpdateMaterialForm {
  material: TMaterial;
  onClose: () => void;
}

const UpdateMaterialForm: React.FC<IUpdateMaterialForm> = ({
  material,
  onClose,
}): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const { handleSubmit, control } = useForm<TUpdateMaterialForm>({
    defaultValues: {
      name: material.name,
      price: material.price,
      cost: material.cost,
    },
    resolver: yupResolver(updateMaterialSchema),
    mode: "onChange",
  });

  const onSubmit = useCallback(
    (data: TUpdateMaterialForm): void => {
      dispatch(makeUpdateMaterialRequest({ ...data, id: material.id }));
    },
    [dispatch, material.id],
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
              type="number"
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
              type="number"
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
        <div className="col-12">
          <FileUpload files={material.uploads} />
        </div>
      </div>
    </form>
  );
};

export default UpdateMaterialForm;
