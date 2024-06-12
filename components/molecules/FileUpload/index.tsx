"use client";

import React, { useMemo } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 1,
  borderRadius: 4,
  minHeight: 75,
  borderStyle: "dashed",
  outline: "none",
  transition: "border .24s ease-in-out",
  marginTop: ".5rem",
  marginBottom: ".5rem",
  cursor: "pointer",
};

const acceptStyle = {
  borderColor: "green",
};

const rejectStyle = {
  borderColor: "red",
};

interface IFileUpload {
  handleChange: (files: File[]) => void;
  multiple: boolean;
}

const FileUpload: React.FC<IFileUpload> = ({
  handleChange,
  multiple = true,
}): React.JSX.Element => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop: handleChange,
    multiple,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      ...(isDragActive ? acceptStyle : {}),
    }),
    [isDragAccept, isDragReject, isDragActive],
  );

  return (
    <>
      <div
        {...getRootProps({
          style,
        })}
        className="bg-light"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag drop some files here, or click to select files</p>
        )}
      </div>
    </>
  );
};

export default FileUpload;
