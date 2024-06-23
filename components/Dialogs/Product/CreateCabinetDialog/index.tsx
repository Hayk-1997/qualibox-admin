import React, { useMemo, useCallback } from "react";
import Dialog from "@/components/Dialogs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createProductSchema from "@/validationSchemas/product/createProductSchema";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import SelectWithValidation from "@/components/molecules/SelectWithValidation";
import { useGetNonParentCategoriesQuery } from "@/lib/apiModules/category/api";
import { bindNonParentCategoriesSelectOption } from "@/utils/category";
import ProductStaticPropertiesForm from "@/components/Forms/Product/ProductStaticPropertiesForm";

const CreateCabinetDialog = ({ onClose }): React.JSX.Element => {
  const { data: categories } = useGetNonParentCategoriesQuery();

  const { handleSubmit, control, setValue, getValues, watch } = useForm({
    defaultValues: {
      name: "",
      categoryIds: "",
      properties: [
        {
          width: "",
          height: "",
          depth: "",
          price: "",
          cost: "",
        },
      ],
    },
    resolver: yupResolver(createProductSchema),
    mode: "onChange",
  });
  watch("categoryIds");

  const nonParentCategories = useMemo(() => {
    if (categories) {
      return bindNonParentCategoriesSelectOption(categories);
    }
    return [];
  }, [categories]);

  const onSubmit = useCallback((data) => {
    console.log("data", data);
  }, []);

  return (
    <Dialog onClose={onClose}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Create Cabinet</h5>
          <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-12">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <InputWithValidation
                name="name"
                id="name"
                control={control}
                withError={true}
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputPassword4" className="form-label">
                Category
              </label>
              <SelectWithValidation
                id="categoryIds"
                name="categoryIds"
                placeholder="Select Category"
                value={
                  nonParentCategories.find(
                    (item) => item.value === getValues().categoryIds,
                  ) ?? null
                }
                onChange={(data) => {
                  setValue("categoryIds", data.value);
                }}
                control={control}
                options={nonParentCategories}
                withError={true}
              />
            </div>
            <div className="col-12">
              <ProductStaticPropertiesForm
                control={control}
                fields={getValues().properties}
              />
            </div>

            <div className="col-12">
              <div className="d-flex justify-content-end gap-5">
                <div>
                  <button type="button" className="btn btn-primary">
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
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default CreateCabinetDialog;
