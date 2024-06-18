import React, { useCallback } from "react";
import CreateCategoryForm from "@/components/Forms/Category/CreateCategoryForm";
import { makeCreateCategoryRequest } from "@/lib/features/categorySlice/service";
import { TSelectOptions } from "@/types/common";
import { useAppDispatch } from "@/lib/hooks";
import { TCreateCategoryForm } from "@/types/category";
import Dialog from "@/components/Dialogs";
import { setRevalidateCategorySlice } from "@/lib/features/categorySlice";
import { shallowEqual, useSelector } from "react-redux";
import { useSelectCreateCategoryRequest } from "@/lib/features/categorySlice/selectors";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";

interface ICreateCategoryDialog {
  onClose: () => void;
  parentCategories: TSelectOptions[];
}

const CreateCategoryDialog: React.FC<ICreateCategoryDialog> = ({
  onClose,
  parentCategories,
}): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const { success } = useSelector(useSelectCreateCategoryRequest, shallowEqual);
  useCloseDialogHandler(success, onClose);

  const onSubmit = useCallback(
    (data: TCreateCategoryForm) => {
      dispatch(makeCreateCategoryRequest(data));
    },
    [dispatch],
  );

  return (
    <Dialog
      onClose={onClose}
      unMountHandler={() => dispatch(setRevalidateCategorySlice())}
    >
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
