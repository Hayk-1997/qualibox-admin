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
import { useCreateCabinetMutation } from "@/lib/apiModules/product/api";
import { useGetMaterialsQuery } from "@/lib/apiModules/material/api";
import { bindMaterialSelectOption } from "@/utils/material";
import { TCreateCabinetFormSchema } from "@/types/product";
import { PRODUCT_DEFAULT_STATIC_PROPERTIES } from "@/constants/product";

const CreateCabinetDialog = ({ onClose }): React.JSX.Element => {
  const { data: categories } = useGetNonParentCategoriesQuery();
  const { data: materials } = useGetMaterialsQuery("");
  const [createCabinet] = useCreateCabinetMutation();

  const { handleSubmit, control, setValue, getValues, watch } =
    useForm<TCreateCabinetFormSchema>({
      defaultValues: {
        name: "",
        categoryIds: "",
        properties: [
          {
            ...PRODUCT_DEFAULT_STATIC_PROPERTIES,
          },
        ],
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
    (data: TCreateCabinetFormSchema) => {
      createCabinet({ ...data, categoryIds: [Number(data.categoryIds)] });
    },
    [createCabinet],
  );

  return (
    <Dialog onClose={onClose}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center mb-3">
          <div className="ml-10 text-center">
            <h4>Create Cabinet</h4>
          </div>
        </div>
      </div>
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12  mb-3">
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

export default CreateCabinetDialog;
