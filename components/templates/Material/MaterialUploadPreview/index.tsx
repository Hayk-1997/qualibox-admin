import React from "react";
import { TMaterialUpload } from "@/types/material";
import Image from "next/image";
import { useRemoveMaterialUploadMutation } from "@/lib/apiModules/material/api";

interface IMaterialUploadForm {
  materialUpload: TMaterialUpload;
}

const MaterialUploadPreview: React.FC<IMaterialUploadForm> = ({
  materialUpload,
}): React.JSX.Element => {
  const [deleteUpload] = useRemoveMaterialUploadMutation();

  return (
    <div className="row g-3">
      <div className="col-12">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <div className="input-group">
          <input
            name="name"
            id="name"
            className="form-control"
            value={materialUpload.name}
            disabled
          />
        </div>
      </div>
      <div className="col-12">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          name="description"
          id="description"
          className="form-control"
          value={materialUpload.description ?? "Empty value"}
          disabled
        />
      </div>
      <div className="col-12">
        <Image
          src={materialUpload.path}
          alt={materialUpload.name}
          width={100}
          height={100}
        />
      </div>
      <div className="col-12">
        <div className="d-flex justify-content-end gap-3">
          <button
            className="btn btn-danger"
            onClick={() => deleteUpload(materialUpload.id)}
          >
            <i className="ri-close-circle-fill m-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaterialUploadPreview;
