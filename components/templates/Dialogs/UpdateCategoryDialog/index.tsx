import React from "react";
import { Modal as ResponsiveModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { TCategory } from "@/types/category";
import UpdateCategoryForm from "@/components/Forms/Category/UpdateCategoryForm";
import { TSelectOptions } from "@/types/common";

interface IModal {
  onClose: () => void;
  category: TCategory;
  parentCategories: TSelectOptions[];
}

const UpdateCategoryDialog: React.FC<IModal> = ({
  onClose,
  parentCategories,
  category,
}): React.JSX.Element => {
  return (
    <ResponsiveModal open center onClose={onClose}>
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
    </ResponsiveModal>
  );
};

export default UpdateCategoryDialog;
