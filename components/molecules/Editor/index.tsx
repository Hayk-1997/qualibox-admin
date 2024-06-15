// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck //@TODO it's temporary solution
"use client";

import React, { useRef, useEffect, useState } from "react";
import Froala from "react-froala-wysiwyg";

// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";

// Require Editor CSS files.
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/third_party/embedly.min.css";
import FroalaEditor from "react-froala-wysiwyg";

interface IEditor {
  editorState: string;
  onEditorStateChange: (state: string) => void;
}

const Editor: React.FC<IEditor> = ({
  onEditorStateChange,
  editorState,
}): React.JSX.Element => {
  const ref = useRef({ editor: null });

  const [isFroalaInitialized, setIsFroalaInitialized] = useState(false);

  const [editor, setEditor] = useState<FroalaEditor | undefined>(undefined);

  useEffect(() => {
    if (
      ref?.current?.editor &&
      ref.current.editor.data &&
      ref.current.editor.data._init
    ) {
      ref.current.editor.data._init = null;
    }

    setEditor(ref.current.editor!);
    editor && setIsFroalaInitialized(true);
  }, [editor]);

  useEffect(() => {
    if (isFroalaInitialized && editor && editor.html) {
      editor.html.set(editorState);
    }
  }, [editor, isFroalaInitialized, editorState]);

  return (
    <Froala
      ref={ref}
      model={editorState}
      onModelChange={onEditorStateChange}
      tag="textarea"
      config={{
        attribution: false,
        placeholder: "Start typing...",
        toolbarButtons: {
          moreText: {
            buttons: [
              "bold",
              "italic",
              "underline",
              "strikeThrough",
              "subscript",
              "superscript",
              "fontFamily",
              "fontSize",
              "textColor",
              "backgroundColor",
              "inlineClass",
              "inlineStyle",
              "clearFormatting",
            ],
          },
          moreRich: {
            buttons: [
              "insertLink",
              "insertImage",
              "insertVideo",
              "insertTable",
              "emoticons",
              "fontAwesome",
              "specialCharacters",
              "embedly",
              "insertFile",
              "insertHR",
            ],
          },
          moreMisc: {
            buttons: [
              "undo",
              "redo",
              "fullscreen",
              "print",
              "getPDF",
              "spellChecker",
              "selectAll",
              "html",
              "help",
            ],
            align: "right",
            buttonsVisible: 2,
          },
        },
        pluginsEnabled: [
          "table",
          "spell",
          "quote",
          "save",
          "quickInsert",
          "paragraphFormat",
          "paragraphStyle",
          "help",
          "draggable",
          "align",
          "link",
          "lists",
          "file",
          "image",
          "emoticons",
          "url",
          "video",
          "embedly",
          "colors",
          "entities",
          "inlineClass",
          "inlineStyle",
          "fontSize",
          "imageTUI",
        ],
      }}
    />
  );
};

export default Editor;
