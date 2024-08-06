import React, { useCallback } from "react";
import CreateCategoryForm from "@/components/Forms/Category/CreateCategoryForm";
import { TSelectOptions } from "@/types/common";
import { TCreateCategoryFormRequest } from "@/types/category";
import Dialog from "@/components/Dialogs";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";
import { useCreateCategoryMutation } from "@/lib/apiModules/category/api";

interface ICreateCategoryDialog {
  onClose: () => void;
  parentCategories: TSelectOptions[];
}

const CreateCategoryDialog: React.FC<ICreateCategoryDialog> = ({
  onClose,
  parentCategories,
}): React.JSX.Element => {
  const [createCategory, { isSuccess, reset }] = useCreateCategoryMutation();

  useCloseDialogHandler(isSuccess, onClose);

  const onSubmit = useCallback(
    (data: TCreateCategoryFormRequest) => {
      createCategory(data);
    },
    [createCategory],
  );

  return (
    <Dialog onClose={onClose} unMountHandler={reset}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center mb-3">
          <div className="ml-10 text-center">
            <h4>Create new category</h4>
          </div>
        </div>
        <CreateCategoryForm
          onSubmit={onSubmit}
          parentCategories={parentCategories}
          onClose={onClose}
        />
      </div>
    </Dialog>
  );
};

export default CreateCategoryDialog;
