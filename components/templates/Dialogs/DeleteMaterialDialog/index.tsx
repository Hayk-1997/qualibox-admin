import React, { useCallback, useEffect } from "react";
import Dialog from "@/components/templates/Dialogs";
import { useAppDispatch } from "@/lib/hooks";
import { makeDeleteMaterialRequest } from "@/lib/features/materialSlice/service";
import { shallowEqual, useSelector } from "react-redux";
import { useSelectDeleteMaterialRequest } from "@/lib/features/materialSlice/selectors";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";
import { setRevalidateMaterialSlice } from "@/lib/features/materialSlice";

interface IDeleteMaterialDialog {
  onClose: () => void;
  materialId: number;
}

const DeleteMaterialDialog: React.FC<IDeleteMaterialDialog> = ({
  onClose,
  materialId,
}): React.JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => dispatch(setRevalidateMaterialSlice());
  }, [dispatch]);

  const { success } = useSelector(useSelectDeleteMaterialRequest, shallowEqual);
  useCloseDialogHandler(success, onClose);

  const onDelete = useCallback(() => {
    dispatch(makeDeleteMaterialRequest(materialId));
  }, [dispatch, materialId]);

  return (
    <Dialog
      onClose={onClose}
      unMountHandler={() => dispatch(setRevalidateMaterialSlice())}
    >
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center mb-3">
          <div className="ml-10 text-center">
            <h4>
              <i className="ri-error-warning-line text-danger px-2"></i>
              Are you sure to delete material
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
    </Dialog>
  );
};

export default DeleteMaterialDialog;
