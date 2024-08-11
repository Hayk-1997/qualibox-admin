import React, { useCallback, useMemo } from "react";
import Dialog from "@/components/Dialogs";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import SelectWithValidation from "@/components/molecules/SelectWithValidation";
import { useForm } from "react-hook-form";
import { DYNAMIC_PRODUCT_DEFAULT_PROPERTIES } from "@/constants/product";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGetMaterialsQuery } from "@/lib/apiModules/material/api";
import { bindMaterialSelectOption } from "@/utils/material";
import createDynamicProductSchema from "@/validationSchemas/product/createDynamicProductSchema";
import ProductDynamicPropertiesForm from "@/components/Forms/Product/ProductDynamicPropertiesForm";
import { bindNonParentCategoriesSelectOption } from "@/utils/category";
import { useGetNonParentCategoriesQuery } from "@/lib/apiModules/category/api";
import { useCreateDynamicProductMutation } from "@/lib/apiModules/product/api";
import { TCreateDynamicProductForm } from "@/types/product";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";

const CreateDynamicProductDialog = ({ onClose }): React.JSX.Element => {
  const { data: materials } = useGetMaterialsQuery("");
  const { data: categories } = useGetNonParentCategoriesQuery("");
  const [createProduct, { isSuccess }] = useCreateDynamicProductMutation();

  const materialSelectOptions = useMemo(() => {
    if (materials?.data) {
      return bindMaterialSelectOption(materials.data);
    }
    return [];
  }, [materials]);

  const nonParentCategories = useMemo(() => {
    if (categories) {
      return bindNonParentCategoriesSelectOption(categories);
    }
    return [];
  }, [categories]);

  const { handleSubmit, control, setValue, getValues, watch } = useForm({
    defaultValues: {
      name: "",
      categoryIds: "",
      materialIds: [],
      hasDepth: true,
      isDynamicSize: true,
      properties: [
        {
          ...DYNAMIC_PRODUCT_DEFAULT_PROPERTIES,
        },
      ],
    },
    resolver: yupResolver(createDynamicProductSchema),
    mode: "onChange",
  });
  watch(["materialIds", "properties", "categoryIds"]);
  useCloseDialogHandler(isSuccess, onClose);

  const onSubmit = useCallback(
    (data: TCreateDynamicProductForm) => {
      createProduct({
        ...data,
        categoryIds: [Number(data.categoryIds)],
        materialIds: data.materialIds.map((item) => item.value),
      });
    },
    [createProduct],
  );

  return (
    <Dialog onClose={onClose}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center mb-3">
          <div className="ml-10 text-center">
            <h4>Create Product</h4>
          </div>
        </div>
      </div>
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12 mb-3">
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
        <div className="col-12 mb-3">
          <label htmlFor="categoryIds" className="form-label">
            Category
          </label>
          <SelectWithValidation
            id="categoryIds"
            name="categoryIds"
            placeholder="Select Category"
            value={
              nonParentCategories.find(
                (item) => String(item.value) === getValues().categoryIds,
              ) ?? null
            }
            onChange={(data) => {
              setValue("categoryIds", String(data.value), {
                shouldValidate: true,
              });
            }}
            control={control}
            options={nonParentCategories}
            withError={true}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="materialId" className="form-label">
            Material
          </label>
          <SelectWithValidation
            id="materialIds"
            name="materialIds"
            placeholder="Select Maerials"
            isMulti={true}
            value={getValues().materialIds}
            onChange={(data) => {
              setValue("materialIds", data, {
                shouldValidate: true,
              });
            }}
            control={control}
            options={materialSelectOptions}
            withError={true}
          />
        </div>
        <div className="col-12 mb-3">
          <h5 className="card-title">Properties</h5>
          <ProductDynamicPropertiesForm
            control={control}
            fields={getValues().properties}
          />
        </div>

        <div className="col-12 mb-3">
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
    </Dialog>
  );
};

export default CreateDynamicProductDialog;
