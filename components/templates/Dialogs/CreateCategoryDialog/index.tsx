import React, { useCallback } from "react";
import { Modal as ResponsiveModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CreateCategoryForm from "@/components/Forms/Category/CreateCategoryForm";
import { makeCreateCategoryRequest } from "@/lib/features/categorySlice/service";
import { TSelectOptions } from "@/types/common";
import { useAppDispatch } from "@/lib/hooks";
import { TCreateCategoryForm } from "@/types/category";

interface ICreateCategoryDialog {
  onClose: () => void;
  parentCategories: TSelectOptions[];
}

const CreateCategoryDialog: React.FC<ICreateCategoryDialog> = ({
  onClose,
  parentCategories,
}): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (data: TCreateCategoryForm) => {
      dispatch(makeCreateCategoryRequest(data));
      onClose();
    },
    [dispatch, onClose],
  );

  return (
    <ResponsiveModal open center onClose={onClose}>
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
    </ResponsiveModal>
  );
};

export default CreateCategoryDialog;
