import React from "react";
import { TCategory } from "@/types/category";
import UpdateCategoryForm from "@/components/Forms/Category/UpdateCategoryForm";
import { TSelectOptions } from "@/types/common";
import Dialog from "@/components/Dialogs";
import { setRevalidateCategorySlice } from "@/lib/features/categorySlice";
import { shallowEqual, useSelector } from "react-redux";
import { useSelectUpdateCategoryRequest } from "@/lib/features/categorySlice/selectors";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";
import { useAppDispatch } from "@/lib/hooks";

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
  const dispatch = useAppDispatch();

  const { success } = useSelector(useSelectUpdateCategoryRequest, shallowEqual);
  useCloseDialogHandler(success, onClose);

  return (
    <Dialog
      onClose={onClose}
      unMountHandler={() => dispatch(setRevalidateCategorySlice())}
    >
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
