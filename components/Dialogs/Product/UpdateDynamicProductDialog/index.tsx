import React, { useCallback, useEffect, useMemo } from "react";
import Dialog from "@/components/Dialogs";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import SelectWithValidation from "@/components/molecules/SelectWithValidation";
import ProductDynamicPropertiesForm from "@/components/Forms/Product/ProductDynamicPropertiesForm";
import { useGetMaterialsQuery } from "@/lib/apiModules/material/api";
import { useGetNonParentCategoriesQuery } from "@/lib/apiModules/category/api";
import { useUpdateDynamicProductMutation } from "@/lib/apiModules/product/api";
import { bindMaterialSelectOption } from "@/utils/material";
import { bindNonParentCategoriesSelectOption } from "@/utils/category";
import { useForm } from "react-hook-form";
import { TDynamicProduct, TUpdateDynamicProductForm } from "@/types/product";
import { yupResolver } from "@hookform/resolvers/yup";
import updateDynamicProductSchema from "@/validationSchemas/product/updateDynamicProductSchema";
import UploadProductTemplate from "@/components/templates/Product/UploadProductTemplate";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";

interface IUpdateDynamicProductDialog {
  onClose: () => void;
  product: TDynamicProduct;
}

const UpdateDynamicProductDialog: React.FC<IUpdateDynamicProductDialog> = ({
  onClose,
  product,
}): React.JSX.Element => {
  const { data: materials } = useGetMaterialsQuery("");
  const { data: categories } = useGetNonParentCategoriesQuery();
  const [updateProduct, { isSuccess }] = useUpdateDynamicProductMutation();

  const materialSelectOptions = useMemo(() => {
    if (materials?.data) {
      return bindMaterialSelectOption(materials.data);
    }
    return [];
  }, [materials]);

  const selectedMaterialSelectOptions = useMemo(() => {
    if (materialSelectOptions && product) {
      return materialSelectOptions.reduce((acc, cur) => {
        if (product.materialIds.includes(cur.value)) {
          return [...acc, cur];
        }
        return acc;
      }, []);
    }
    return [];
  }, [materialSelectOptions, product]);

  const nonParentCategories = useMemo(() => {
    if (categories) {
      return bindNonParentCategoriesSelectOption(categories);
    }
    return [];
  }, [categories]);

  const { handleSubmit, control, setValue, getValues, watch } =
    useForm<TUpdateDynamicProductForm>({
      defaultValues: {
        id: product.id,
        name: product.name,
        categoryIds: product.categoryIds[0],
        materialIds: [],
        properties: product.properties,
        hasDepth: true,
        isDynamicSize: true,
      },
      resolver: yupResolver(updateDynamicProductSchema),
      mode: "onChange",
    });
  watch(["materialIds", "properties", "categoryIds"]);
  useCloseDialogHandler(isSuccess, onClose);

  useEffect(() => {
    if (selectedMaterialSelectOptions.length) {
      setValue("materialIds", selectedMaterialSelectOptions);
    }
  }, [setValue, selectedMaterialSelectOptions]);

  const onSubmit = useCallback(
    (data: TUpdateDynamicProductForm) => {
      updateProduct({
        ...data,
        categoryIds: [Number(data.categoryIds)],
        materialIds: data.materialIds.map((item) => item.value),
      });
    },
    [updateProduct],
  );

  return (
    <Dialog onClose={onClose}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center mb-3">
          <div className="ml-10 text-center">
            <h4>Update Product</h4>
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
                (item) => item.value === getValues().categoryIds,
              ) ?? null
            }
            onChange={(data) => {
              setValue("categoryIds", data.value, {
                shouldValidate: true,
              });
            }}
            control={control}
            options={nonParentCategories}
            withError={true}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="materialIds" className="form-label">
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
        <hr />
        <UploadProductTemplate
          productId={product.id}
          parentMaterialIds={product.materialIds}
          uploadedFiles={product.uploads}
          parentMaterials={materials?.data || []}
        />
        <hr />
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

export default UpdateDynamicProductDialog;
