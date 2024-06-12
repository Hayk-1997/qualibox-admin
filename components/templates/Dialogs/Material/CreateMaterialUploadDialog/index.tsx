import React from "react";
import Dialog from "@/components/templates/Dialogs";
import CreateMaterialUploadForm from "@/components/Forms/Material/CreateMaterialUploadForm";

interface ICreateMaterialUploadDialog {
  onClose: () => void;
  materialId: number;
}

const CreateMaterialUploadDialog: React.FC<ICreateMaterialUploadDialog> = ({
  onClose,
  materialId,
}) => {
  return (
    <Dialog onClose={onClose}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center">
          <div className="ml-10 text-center">
            <h4>Upload Material</h4>
          </div>
        </div>
        <CreateMaterialUploadForm materialId={materialId} />
      </div>
    </Dialog>
  );
};

export default CreateMaterialUploadDialog;
