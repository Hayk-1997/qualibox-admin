"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { TCreateCategoryForm } from "@/types/category";
import { yupResolver } from "@hookform/resolvers/yup";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import SelectWithValidation from "@/components/molecules/SelectWithValidation";
import { TSelectOptions } from "@/types/common";
import createCategorySchema from "@/validationSchemas/createCategorySchema";

interface ICreateCategoryForm {
  onClose: () => void;
  parentCategories: TSelectOptions[];
  onSubmit: (data: TCreateCategoryForm) => void;
}

const CreateCategoryForm: React.FC<ICreateCategoryForm> = ({
  onSubmit,
  parentCategories,
  onClose,
}): React.JSX.Element => {
  const { handleSubmit, control, setValue, getValues, watch } =
    useForm<TCreateCategoryForm>({
      defaultValues: {
        name: "",
        parentId: null,
      },
      resolver: yupResolver(createCategorySchema),
      mode: "onChange",
    });

  watch("parentId");

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
          <label htmlFor="inputEmail" className="col-sm-4 col-form-label">
            Parent Category
          </label>
          <div className="col-sm-12">
            <SelectWithValidation
              id="parentId"
              name="parentId"
              placeholder="1"
              value={
                parentCategories.find(
                  (item) => item.value === getValues().parentId,
                ) ?? { value: "", label: "" }
              }
              onChange={(data) => {
                setValue("parentId", data.value);
              }}
              control={control}
              options={parentCategories}
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

export default CreateCategoryForm;
