import React from "react";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import { Control } from "react-hook-form/dist/types/form";
import { UseControllerProps } from "react-hook-form";
import { TDynamicProductProperties } from "@/types/product";
import Accordion from "@/components/molecules/Accordion";

interface IProductDynamicPropertiesForm {
  control: UseControllerProps<Control>;
  fields: TDynamicProductProperties[];
}

const ProductDynamicPropertiesForm: React.FC<IProductDynamicPropertiesForm> = ({
  control,
  fields,
}): React.JSX.Element => {
  return (
    <>
      {fields.map((field, index) => (
        <React.Fragment key={index}>
          <Accordion title={field.referenceId} item={index}>
            <div className="row">
              <div className="col-4 mb-3">
                <label htmlFor="minWidth" className="form-label">
                  Min Width
                </label>
                <InputWithValidation
                  type="number"
                  name={`properties[${index}].minWidth`}
                  id="minWidth"
                  control={control}
                  withError={true}
                />
              </div>

              <div className="col-4 mb-3">
                <label htmlFor="maxWidth" className="form-label">
                  Max Width
                </label>
                <InputWithValidation
                  type="number"
                  name={`properties[${index}].maxWidth`}
                  id="maxWidth"
                  control={control}
                  withError={true}
                />
              </div>
              <div className="col-4 mb-3">
                <label htmlFor="minHeight" className="form-label">
                  Min Height
                </label>
                <InputWithValidation
                  type="number"
                  name={`properties[${index}].minHeight`}
                  id="minHeight"
                  control={control}
                  withError={true}
                />
              </div>

              <div className="col-4 mb-3">
                <label htmlFor="maxHeight" className="form-label">
                  Max Height
                </label>
                <InputWithValidation
                  type="number"
                  name={`properties[${index}].maxHeight`}
                  id="maxHeight"
                  control={control}
                  withError={true}
                />
              </div>

              <div className="col-4 mb-3">
                <label htmlFor="minDepth" className="form-label">
                  Min Depth
                </label>
                <InputWithValidation
                  type="number"
                  name={`properties[${index}].minDepth`}
                  id="minDepth"
                  control={control}
                  withError={true}
                />
              </div>

              <div className="col-4 mb-3">
                <label htmlFor="maxDepth" className="form-label">
                  Max Depth
                </label>
                <InputWithValidation
                  name={`properties[${index}].maxDepth`}
                  id="maxDepth"
                  control={control}
                  withError={true}
                />
              </div>

              <div className="col-4 mb-3">
                <label htmlFor="referenceId" className="form-label">
                  Reference Id
                </label>
                <InputWithValidation
                  name={`properties[${index}].referenceId`}
                  id="referenceId"
                  control={control}
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

export default ProductDynamicPropertiesForm;
