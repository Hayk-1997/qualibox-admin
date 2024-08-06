import React from "react";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import SelectWithValidation from "@/components/molecules/SelectWithValidation";
import {
  Control,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form/dist/types/form";
import { UseControllerProps } from "react-hook-form";
import { TSelectOptions } from "@/types/common";
import { TStaticProductProperties } from "@/types/product";
import Accordion from "@/components/molecules/Accordion";
import { FieldValues } from "react-hook-form/dist/types/fields";

interface IProductStaticPropertiesForm {
  control: UseControllerProps<Control>;
  watch: UseFormWatch<FieldValues>;
  materials: TSelectOptions[];
  setValue: UseFormSetValue<Control>;
  fields: TStaticProductProperties[];
}

const ProductStaticPropertiesForm: React.FC<IProductStaticPropertiesForm> = ({
  control,
  fields,
  materials,
  setValue,
  watch,
}): React.JSX.Element => {
  return (
    <>
      {fields.map((field, index) => (
        <React.Fragment key={index}>
          <Accordion title={field.referenceId} item={index}>
            <div className="row">
              <div className="col-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Width
                </label>
                <InputWithValidation
                  type="number"
                  name={`properties[${index}].width`}
                  id="width"
                  control={control}
                  withError={true}
                />
              </div>

              <div className="col-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Height
                </label>
                <InputWithValidation
                  type="number"
                  name={`properties[${index}].height`}
                  id="height"
                  control={control}
                  withError={true}
                />
              </div>

              <div className="col-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Depth
                </label>
                <InputWithValidation
                  type="number"
                  name={`properties[${index}].depth`}
                  id="depth"
                  control={control}
                  withError={true}
                />
              </div>

              <div className="col-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Price
                </label>
                <InputWithValidation
                  type="number"
                  name={`properties[${index}].price`}
                  id="price"
                  control={control}
                  withError={true}
                />
              </div>

              <div className="col-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Cost
                </label>
                <InputWithValidation
                  type="number"
                  name={`properties[${index}].cost`}
                  id="cost"
                  control={control}
                  withError={true}
                />
              </div>

              <div className="col-4 mb-3">
                <label htmlFor="name" className="form-label">
                  Reference Id
                </label>
                <InputWithValidation
                  name={`properties[${index}].referenceId`}
                  id="referenceId"
                  control={control}
                  withError={true}
                />
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="materialId" className="form-label">
                  Material
                </label>
                <SelectWithValidation
                  id="materialId"
                  name={`properties[${index}].materialId`}
                  placeholder="Select Maerial"
                  value={
                    materials.find(
                      (item) => String(item.value) === String(field.materialId),
                    ) ?? null
                  }
                  onChange={(data) => {
                    watch(`properties[${index}].materialId`);
                    setValue(
                      `properties[${index}].materialId`,
                      String(data.value),
                      { shouldValidate: true },
                    );
                  }}
                  control={control}
                  options={materials}
                  withError={true}
                />
              </div>
            </div>
          </Accordion>
        </React.Fragment>
      ))}
    </>
  );
};

export default ProductStaticPropertiesForm;
