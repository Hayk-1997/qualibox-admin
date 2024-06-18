import React from "react";
import Dialog from "@/components/Dialogs";
import CreateMaterialForm from "@/components/Forms/Material/CreateMaterialForm";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";
import { useCreateMaterialMutation } from "@/lib/apiModules/material/api";

interface ICreateMaterialDialog {
  onClose: () => void;
}

const CreateMaterialDialog: React.FC<ICreateMaterialDialog> = ({
  onClose,
}): React.JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { isSuccess, reset }] = useCreateMaterialMutation({
    fixedCacheKey: "shared-create-material",
  });
  useCloseDialogHandler(isSuccess, onClose);

  return (
    <Dialog onClose={onClose} unMountHandler={reset}>
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
