import React, { useCallback, useMemo } from "react";
import Dialog from "@/components/Dialogs";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import SelectWithValidation from "@/components/molecules/SelectWithValidation";
import ProductStaticPropertiesForm from "@/components/Forms/Product/ProductStaticPropertiesForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createProductSchema from "@/validationSchemas/product/createProductSchema";
import { bindNonParentCategoriesSelectOption } from "@/utils/category";
import { bindMaterialSelectOption } from "@/utils/material";
import { useGetNonParentCategoriesQuery } from "@/lib/apiModules/category/api";
import { useGetMaterialsQuery } from "@/lib/apiModules/material/api";
import { PRODUCT_DEFAULT_STATIC_PROPERTIES } from "@/constants/product";
import { useUpdateCabinetMutation } from "@/lib/apiModules/product/api";
import { TUpdateCabinetFormRequest } from "@/types/product";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";
import UploadProductTemplate from "@/components/templates/Product/UploadProductTemplate";

interface IUpdateProductDialog {
  onClose: () => void;
}

const UpdateProductDialog: React.FC<IUpdateProductDialog> = ({
  onClose,
  product,
}): React.JSX.Element => {
  const { data: categories } = useGetNonParentCategoriesQuery();
  const { data: materials } = useGetMaterialsQuery("");

  const [updateCabinet, { isSuccess }] = useUpdateCabinetMutation();
  useCloseDialogHandler(isSuccess, onClose);

  const { handleSubmit, control, setValue, getValues, watch } = useForm({
    defaultValues: {
      ...product,
      categoryIds: product.categoryIds[0],
    },
    resolver: yupResolver(createProductSchema),
    mode: "onChange",
  });
  watch(["categoryIds", "properties"]);

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

  const handleAddNewProperties = () => {
    const previousData = getValues().properties;
    setValue(
      "properties",
      [
        ...previousData,
        {
          ...PRODUCT_DEFAULT_STATIC_PROPERTIES,
        },
      ],
      { shouldValidate: true },
    );
  };

  const onSubmit = useCallback(
    (data: TUpdateCabinetFormRequest) => {
      updateCabinet(data);
    },
    [updateCabinet],
  );

  return (
    <Dialog onClose={onClose}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center mb-3">
          <div className="ml-10 text-center">
            <h4>Update Cabinet</h4>
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
                (item) =>
                  String(item.value) === String(getValues().categoryIds),
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
          <ProductStaticPropertiesForm
            control={control}
            fields={getValues().properties}
            materials={materialSelectOptions}
            setValue={setValue}
            watch={watch}
          />
          <hr />
          <div>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddNewProperties}
            >
              <i className="ri-add-circle-fill" />
              <span>Add New Properties</span>
            </button>
          </div>
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

export default UpdateProductDialog;
