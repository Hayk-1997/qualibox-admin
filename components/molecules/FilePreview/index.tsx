import React from "react";
import Image from "next/image";
import { TUpload } from "@/types/upload";

interface IFilePreview {
  file: TUpload;
}

const FilePreview: React.FC<IFilePreview> = ({ file }) => {
  return (
    <div className="col-md-4 col-sm-12">
      <div className="row">
        <div>
          <Image
            src={file.path}
            alt={file.name}
            width={100}
            height={100}
            sizes="15vw"
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
  );
};

export default FilePreview;
