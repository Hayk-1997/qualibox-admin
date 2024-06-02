import React, { useCallback } from "react";
import { useAppDispatch } from "@/lib/hooks";
import { makeDeleteCategoryRequest } from "@/lib/features/categorySlice/service";

import { Modal as ResponsiveModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

interface IDeleteCategoryDialog {
  onClose: () => void;
  categoryId: number;
}

const DeleteCategoryDialog: React.FC<IDeleteCategoryDialog> = ({
  onClose,
  categoryId,
}) => {
  const dispatch = useAppDispatch();

  const onDelete = useCallback(() => {
    dispatch(makeDeleteCategoryRequest(categoryId));
    onClose();
  }, [categoryId, dispatch, onClose]);

  return (
    <ResponsiveModal open center onClose={onClose}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center mb-3">
          <div className="ml-10 text-center">
            <h4>
              <i className="ri-error-warning-line text-danger px-2"></i>
              Are you sure to delete category
            </h4>
          </div>
        </div>
        <div className="row">
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
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={onDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ResponsiveModal>
  );
};

export default DeleteCategoryDialog;