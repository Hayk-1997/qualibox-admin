import React from "react";
import "jodit";
import JoditEditor from "jodit-react";

const copyStringToClipboard = function (str: string): void {
  const el: HTMLTextAreaElement = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

const buttons = [
  "undo",
  "redo",
  "|",
  "bold",
  "strikethrough",
  "underline",
  "italic",
  "|",
  "superscript",
  "subscript",
  "|",
  "align",
  "|",
  "ul",
  "ol",
  "outdent",
  "indent",
  "|",
  "font",
  "fontsize",
  "brush",
  "paragraph",
  "|",
  "image",
  "link",
  "table",
  "|",
  "hr",
  "eraser",
  "copyformat",
  "|",
  "fullsize",
  "selectall",
  "print",
  "preview",
  "|",
  "source",
  "|",
  {
    name: "Copy Content",
    tooltip: "Copy HTML to Clipboard",
    icon: "ri-file-copy-2-fill",
    // iconURL: "images/copy.png",
    exec: function (editor: { value: string }) {
      console.log("editor", editor);
      const html = editor.value;
      copyStringToClipboard(html);
    },
  },
];

const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  // toolbarButtonSize: 'middle',
  toolbarAdaptive: false,
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: true,
  askBeforePasteFromWord: true,
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true,
  },
  width: 800,
  height: 842,
};

interface IEditor {
  editorState: string;
  onEditorStateChange: (state: string) => void;
}

const Editor: React.FC<IEditor> = ({ editorState, onEditorStateChange }) => {
  return (
    <div style={{ maxWidth: editorConfig.width, margin: "0 auto" }}>
      <JoditEditor
        value={editorState}
        config={editorConfig}
        onChange={(value) => onEditorStateChange(value)}
      />
    </div>
  );
};

export default Editor;
