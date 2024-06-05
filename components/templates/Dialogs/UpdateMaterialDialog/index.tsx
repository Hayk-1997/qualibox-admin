import React from "react";
import Dialog from "@/components/templates/Dialogs";
import { TMaterial } from "@/types/material";
import UpdateMaterialForm from "@/components/Forms/Material/UpdateMaterialForm";
import { shallowEqual, useSelector } from "react-redux";
import { useSelectUpdateMaterialRequest } from "@/lib/features/materialSlice/selectors";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";
import { setRevalidateMaterialSlice } from "@/lib/features/materialSlice";
import { useAppDispatch } from "@/lib/hooks";

interface IUpdateMaterialDialog {
  onClose: () => void;
  material: TMaterial;
}

const UpdateMaterialDialog: React.FC<IUpdateMaterialDialog> = ({
  onClose,
  material,
}): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const { success } = useSelector(useSelectUpdateMaterialRequest, shallowEqual);
  useCloseDialogHandler(success, onClose);

  return (
    <Dialog
      onClose={onClose}
      unMountHandler={() => dispatch(setRevalidateMaterialSlice())}
    >
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
