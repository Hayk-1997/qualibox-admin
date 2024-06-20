import React from "react";
import { TCategory } from "@/types/category";
import UpdateCategoryForm from "@/components/Forms/Category/UpdateCategoryForm";
import { TSelectOptions } from "@/types/common";
import Dialog from "@/components/Dialogs";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";
import { useUpdateCategoryMutation } from "@/lib/apiModules/category/api";

interface IUpdateCategoryDialog {
  onClose: () => void;
  category: TCategory;
  parentCategories: TSelectOptions[] | null;
}

const UpdateCategoryDialog: React.FC<IUpdateCategoryDialog> = ({
  onClose,
  parentCategories,
  category,
}): React.JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { isSuccess, reset }] = useUpdateCategoryMutation({
    fixedCacheKey: "shared-update-category",
  });
  useCloseDialogHandler(isSuccess, onClose);

  return (
    <Dialog onClose={onClose} unMountHandler={reset}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center">
          <div className="ml-10 text-center">
            <h4>Update Category</h4>
          </div>
        </div>
        <UpdateCategoryForm
          parentCategories={parentCategories}
          category={category}
          onClose={onClose}
        />
      </div>
    </Dialog>
  );
};

export default UpdateCategoryDialog;
