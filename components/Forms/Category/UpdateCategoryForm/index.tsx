import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TCategory, TUpdateCategoryForm } from "@/types/category";
import { TSelectOptions } from "@/types/common";
import SelectWithValidation from "@/components/molecules/SelectWithValidation";
import updateCategorySchema from "@/validationSchemas/category/updateCategorySchema";
import { useAppDispatch } from "@/lib/hooks";
import { makeUpdateCategoryRequest } from "@/lib/features/categorySlice/service";
import InputWithValidation from "@/components/molecules/inputWithValidation";

interface IUpdateCategoryForm {
  parentCategories: TSelectOptions[] | null;
  category: TCategory;
  onClose: () => void;
}

const UpdateCategoryForm: React.FC<IUpdateCategoryForm> = ({
  category,
  parentCategories,
  onClose,
}): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const { handleSubmit, control, setValue, watch, getValues } =
    useForm<TUpdateCategoryForm>({
      defaultValues: {
        name: category.name,
        parentId: category.parentId,
      },
      resolver: yupResolver(updateCategorySchema),
      mode: "onChange",
    });

  watch("parentId");

  const onSubmit = useCallback(
    (data: TUpdateCategoryForm): void => {
      dispatch(makeUpdateCategoryRequest({ ...data, id: category.id }));
    },
    [category.id, dispatch],
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

        {category.parentId && (
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
        )}
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

export default UpdateCategoryForm;
