import React, { useCallback, useEffect } from "react";
import SelectWithValidation from "@/components/molecules/SelectWithValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputWithValidation from "@/components/molecules/InputWithValidation";
import attachTagSchema from "@/validationSchemas/product/attachTagSchema";
import {
  useAttachTagMutation,
  useRemoveProductTagMutation,
  useUpdateProductTagMutation,
} from "@/lib/apiModules/product/api";
import { TAttachProductTagForm } from "@/types/product";

const AttachProductTag: React.FC = ({
  options,
  productId,
  attachedTag,
}): React.JSX.Element => {
  const [attachTag] = useAttachTagMutation();
  const [updateTag] = useUpdateProductTagMutation();
  const [removeTag] = useRemoveProductTagMutation();

  const { control, register, setValue, getValues, watch, trigger, reset } =
    useForm<TAttachProductTagForm>({
      defaultValues: {
        productId: productId,
        tagId: "",
        value: "",
      },
      resolver: yupResolver(attachTagSchema),
      mode: "onChange",
    });

  register("tagId");
  register("value");
  watch("tagId");

  useEffect(() => {
    if (attachedTag) {
      reset({
        productId: productId,
        tagId: attachedTag.id,
        value: attachedTag.value,
      });
    }
  }, [reset, attachedTag, productId]);

  const submitForm = useCallback(() => {
    trigger().then((isValid) => {
      if (isValid) {
        if (attachedTag) {
          updateTag({ ...getValues() });
        } else {
          attachTag({ ...getValues() });
        }
      }
    });
  }, [attachTag, attachedTag, getValues, trigger, updateTag]);

  return (
    <div className="row">
      <h5 className="card-title">Attach Tag</h5>
      <div className="row g-3">
        <div className="col-6 mb-3">
          <label htmlFor="tagId" className="form-label">
            Tag
          </label>
          <SelectWithValidation
            id="tagId"
            name="tagId"
            placeholder="Select Tag"
            value={
              options.find(
                (item) => String(item.value) === String(getValues().tagId),
              ) ?? null
            }
            onChange={(data) => {
              setValue("tagId", String(data.value), {
                shouldValidate: true,
              });
            }}
            control={control}
            options={options}
            withError={true}
          />
        </div>
        <div className="col-6 mb-3">
          <label htmlFor="value" className="form-label">
            Value
          </label>
          <InputWithValidation
            name="value"
            id="value"
            control={control}
            withError={true}
          />
        </div>
        <div className="col-12 mb-3">
          <div className="d-flex justify-content-end gap-5">
            {attachedTag && (
              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    removeTag(productId);
                    reset({
                      productId: productId,
                    });
                  }}
                >
                  Remove
                </button>
              </div>
            )}
            <div>
              <button
                type="button"
                className="btn btn-success"
                onClick={submitForm}
              >
                {attachedTag ? "Update" : "Attach"} Tag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttachProductTag;
