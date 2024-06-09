"use client";

import React, { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { TMaterialUpload } from "@/types/material";

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

const filledStyles = {
  borderColor: "transparent",
};

const acceptStyle = {
  borderColor: "green",
};

const rejectStyle = {
  borderColor: "red",
};

interface IFileUpload {
  files: TMaterialUpload;
}

const FileUpload: React.FC<IFileUpload> = ({ files }): React.JSX.Element => {
  const onDrop = useCallback((acceptedFiles: File) => {
    console.log("acceptedFiles", acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    isDragEntered,
  } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png", ".jpg"],
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      ...(files.length ? filledStyles : {}),
      ...(isDragActive || isDragEntered ? acceptStyle : {}),
    }),
    [isDragAccept, isDragReject, files.length, isDragActive, isDragEntered],
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
      <div className="row">
        {files.map((file) => (
          <div className="col-md-4 col-sm-12" key={file.id}>
            <div className="row">
              <div>
                <Image
                  src={file.path}
                  alt={file.name}
                  width={100}
                  height={100}
                  sizes="30vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <div className="d-flex justify-content-center mt-1">
                <button className="btn btn-danger">
                  <i className="ri-close-circle-fill m-1" />
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FileUpload;
