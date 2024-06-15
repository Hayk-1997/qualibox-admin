import React, { useCallback, useState } from "react";
import Dialog from "@/components/templates/Dialogs";
import { TInfoPage } from "@/types/infoPage";
import Editor from "@/components/molecules/Editor";
import { useUpdateInfoPageMutation } from "@/lib/apiModules/infoPage/api";

interface IUpdateInfoPageDialog {
  onClose: () => void;
  infoPage: TInfoPage;
}

const UpdateInfoPageDialog: React.FC<IUpdateInfoPageDialog> = ({
  onClose,
  infoPage,
}): React.JSX.Element => {
  const [updateInfoPage] = useUpdateInfoPageMutation();
  const [content, setContent] = useState(infoPage.content);

  const onSubmit = useCallback(() => {
    updateInfoPage({
      type: infoPage.type,
      content,
    });
  }, [content, infoPage.type, updateInfoPage]);

  return (
    <Dialog onClose={onClose}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center mb-3">
          <div className="ml-10 text-center">
            <h4>Update Info Page</h4>
          </div>
        </div>
        <Editor
          editorState={content}
          onEditorStateChange={(content) => setContent(content)}
        />
        <hr className="mt-3" />
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
                onClick={onSubmit}
                className="btn btn-success"
              >
                Submit Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateInfoPageDialog;