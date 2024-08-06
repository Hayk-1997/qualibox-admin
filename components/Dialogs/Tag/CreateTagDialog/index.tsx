import React from "react";
import Dialog from "@/components/Dialogs";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";
import CreateTagForm from "@/components/Forms/Tag/CreateTagForm";
import { useCreateTagMutation } from "@/lib/apiModules/tag/api";

interface ICreateTagDialog {
  onClose: () => void;
}

const CreateTagDialog: React.FC<ICreateTagDialog> = ({
  onClose,
}): React.JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { isSuccess, reset }] = useCreateTagMutation({
    fixedCacheKey: "shared-create-tag",
  });

  useCloseDialogHandler(isSuccess, onClose);

  return (
    <Dialog onClose={onClose} unMountHandler={reset}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center">
          <div className="ml-10 text-center">
            <h4>Create Tag</h4>
          </div>
        </div>
        <CreateTagForm onClose={onClose} />
      </div>
    </Dialog>
  );
};

export default CreateTagDialog;
