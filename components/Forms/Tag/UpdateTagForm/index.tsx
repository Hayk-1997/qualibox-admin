import React, { useCallback } from "react";
import InputWithValidation from "@/components/molecules/inputWithValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import updateTagSchema from "@/validationSchemas/tag/updateTagSchema";
import { TTag, TUpdateTagForm } from "@/types/tag";
import { useUpdateTagMutation } from "@/lib/apiModules/tag/api";
import FormErrorMessage from "@/components/molecules/FormErrorMessage";

interface IUpdateTagForm {
  tag: TTag;
  onClose: () => void;
}

const UpdateTagForm: React.FC<IUpdateTagForm> = ({
  tag,
  onClose,
}): React.JSX.Element => {
  const [updateTag, { error }] = useUpdateTagMutation({
    fixedCacheKey: "shared-update-tag",
  });

  const { handleSubmit, control } = useForm<TUpdateTagForm>({
    defaultValues: {
      id: tag.id,
      name: tag.name,
      color: tag.color,
    },
    resolver: yupResolver(updateTagSchema),
    mode: "onChange",
  });

  const onSubmit = useCallback(
    (data: TUpdateTagForm) => {
      updateTag(data);
    },
    [updateTag],
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
          {error && <FormErrorMessage message={error.data.message} />}
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="price" className="col-sm-2 col-form-label">
            Color
          </label>
          <div className="col-sm-12">
            <InputWithValidation
              type="color"
              name="color"
              id="color"
              control={control}
              withError={true}
            />
          </div>
        </div>
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

export default UpdateTagForm;
