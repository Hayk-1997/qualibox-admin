import React from "react";
import Dialog from "@/components/templates/Dialogs";
import { TMaterial } from "@/types/material";
import UpdateMaterialForm from "@/components/Forms/Material/UpdateMaterialForm";

interface IUpdateMaterialDialog {
  onClose: () => void;
  material: TMaterial;
}

const UpdateMaterialDialog: React.FC<IUpdateMaterialDialog> = ({
  onClose,
  material,
}): React.JSX.Element => {
  return (
    <Dialog onClose={onClose}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center">
          <div className="ml-10 text-center">
            <h4>Update Material</h4>
          </div>
        </div>
        <UpdateMaterialForm material={material} onClose={onClose} />
      </div>
    </Dialog>
  );
};

export default UpdateMaterialDialog;
