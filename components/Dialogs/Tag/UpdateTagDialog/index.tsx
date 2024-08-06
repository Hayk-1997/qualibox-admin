import React from "react";
import Dialog from "@/components/Dialogs";
import { useCloseDialogHandler } from "@/hooks/useCloseDialogHandler";
import UpdateTagForm from "@/components/Forms/Tag/UpdateTagForm";
import { TTag } from "@/types/tag";
import { useUpdateTagMutation } from "@/lib/apiModules/tag/api";

interface TUpdateTagDialog {
  onClose: () => void;
  tag: TTag;
}

const UpdateTagDialog: React.FC<TUpdateTagDialog> = ({
  onClose,
  tag,
}): React.JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { isSuccess, reset }] = useUpdateTagMutation({
    fixedCacheKey: "shared-update-tag",
  });

  useCloseDialogHandler(isSuccess, onClose);

  return (
    <Dialog onClose={onClose} unMountHandler={reset}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center">
          <div className="ml-10 text-center">
            <h4>Update Tag</h4>
          </div>
        </div>
        <UpdateTagForm tag={tag} onClose={onClose} />
      </div>
    </Dialog>
  );
};

export default UpdateTagDialog;
