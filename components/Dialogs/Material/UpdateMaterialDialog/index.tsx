import React, { useState } from "react";
import Dialog from "@/components/Dialogs";
import { TMaterial } from "@/types/material";
import UpdateMaterialForm from "@/components/Forms/Material/UpdateMaterialForm";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";
import MaterialUploadTemplate from "@/components/templates/Material/MaterialUploadTemplate";
import CreateMaterialUploadDialog from "@/components/Dialogs/Material/CreateMaterialUploadDialog";
import { useUpdateMaterialMutation } from "@/lib/apiModules/material/api";

interface IUpdateMaterialDialog {
  onClose: () => void;
  material: TMaterial;
}

const UpdateMaterialDialog: React.FC<IUpdateMaterialDialog> = ({
  onClose,
  material,
}): React.JSX.Element => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { isSuccess, reset }] = useUpdateMaterialMutation({
    fixedCacheKey: "shared-update-material",
  });

  useCloseDialogHandler(isSuccess, onClose);

  return (
    <Dialog onClose={onClose} unMountHandler={reset}>
      {openDialog && (
        <CreateMaterialUploadDialog
          onClose={onClose}
          materialId={material.id}
        />
      )}
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center">
          <div className="ml-10 text-center">
            <h4>Update Material</h4>
          </div>
        </div>
        <UpdateMaterialForm material={material} onClose={onClose} />
        <hr />
        <div className="d-flex justify-content-between gap-15">
          <div>
            <h4>Material Variants</h4>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => setOpenDialog(true)}
            >
              Create New Variant
            </button>
          </div>
        </div>
        <MaterialUploadTemplate materialUploads={material.uploads} />
      </div>
    </Dialog>
  );
};

export default UpdateMaterialDialog;
