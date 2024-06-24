import React from "react";
import Dialog from "@/components/Dialogs";
import { useRemoveProductMutation } from "@/lib/apiModules/product/api";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";

interface IDeleteProductDialog {
  onClose: () => void;
  productId: numbder;
}

const DeleteProductDialog: React.JSX.Element<IDeleteProductDialog> = ({
  onClose,
  productId,
}): React.JSX.Element => {
  const [deleteProduct, { isSuccess }] = useRemoveProductMutation();
  useCloseDialogHandler(isSuccess, onClose);

  return (
    <Dialog onClose={onClose}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center mb-3">
          <div className="ml-10 text-center">
            <h4>
              <i className="ri-error-warning-line text-danger px-2"></i>
              Are you sure to delete product
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
                  onClick={() => deleteProduct(productId)}
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

export default DeleteProductDialog;
