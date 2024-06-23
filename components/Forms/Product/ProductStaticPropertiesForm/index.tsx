import React from "react";
import InputWithValidation from "@/components/molecules/inputWithValidation";

const ProductStaticPropertiesForm = ({
  control,
  fields,
}): React.JSX.Element => {
  return (
    <>
      {fields.map((field, index) => (
        <div key={field.id} className="row">
          <div className="col-3">
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

          <div className="col-3">
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

          <div className="col-3">
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

          <div className="col-3">
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

          <div className="col-3">
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
        </div>
      ))}
    </>
  );
};

export default ProductStaticPropertiesForm;
