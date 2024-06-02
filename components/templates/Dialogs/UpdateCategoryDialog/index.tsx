import React from "react";
import { TCategory } from "@/types/category";
import UpdateCategoryForm from "@/components/Forms/Category/UpdateCategoryForm";
import { TSelectOptions } from "@/types/common";
import Dialog from "@/components/templates/Dialogs";

interface IUpdateCategoryDialog {
  onClose: () => void;
  category: TCategory;
  parentCategories: TSelectOptions[];
}

const UpdateCategoryDialog: React.FC<IUpdateCategoryDialog> = ({
  onClose,
  parentCategories,
  category,
}): React.JSX.Element => {
  return (
    <Dialog onClose={onClose}>
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
