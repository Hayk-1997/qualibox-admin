import React from "react";
import Dialog from "@/components/templates/Dialogs";
import CreateMaterialForm from "@/components/Forms/Material/CreateMaterialForm";

interface ICreateMaterialDialog {
  onClose: () => void;
}

const CreateMaterialDialog: React.FC<ICreateMaterialDialog> = ({
  onClose,
}): React.JSX.Element => {
  return (
    <Dialog onClose={onClose}>
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
