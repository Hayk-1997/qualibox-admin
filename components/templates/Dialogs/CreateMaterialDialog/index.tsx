import React from "react";
import Dialog from "@/components/templates/Dialogs";
import CreateMaterialForm from "@/components/Forms/Material/CreateMaterialForm";
import { setRevalidateMaterialSlice } from "@/lib/features/materialSlice";
import { useAppDispatch } from "@/lib/hooks";
import { shallowEqual, useSelector } from "react-redux";
import { useSelectCreateMaterialRequest } from "@/lib/features/materialSlice/selectors";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";

interface ICreateMaterialDialog {
  onClose: () => void;
}

const CreateMaterialDialog: React.FC<ICreateMaterialDialog> = ({
  onClose,
}): React.JSX.Element => {
  const dispatch = useAppDispatch();

  const { success } = useSelector(useSelectCreateMaterialRequest, shallowEqual);
  useCloseDialogHandler(success, onClose);

  return (
    <Dialog
      onClose={onClose}
      unMountHandler={() => dispatch(setRevalidateMaterialSlice())}
    >
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center">
          <div className="ml-10 text-center">
            <h4>Create Material</h4>
          </div>
        </div>
        <CreateMaterialForm onClose={onClose} />
      </div>
    </Dialog>
  );
};

export default CreateMaterialDialog;
