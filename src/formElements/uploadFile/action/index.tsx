import React, { memo } from 'react';
import styles from './styles.module.scss';

interface IFileAction {
  handleFileChange: (files: FileList) => void;
}

const FileAction: React.FC<IFileAction> = ({
  handleFileChange,
}): JSX.Element => {
  return (
    <div id="actions" className="row">
      <div className="col-lg-6">
        <div className="btn-group w-100">
          <label
            htmlFor="fileUpload"
            className="btn btn-success col fileinput-button dz-clickable"
          >
            <i className="fas fa-plus" />
            <input
              id="fileUpload"
              type="file"
              multiple
              className={styles.fileUpload}
              onChange={(event) =>
                handleFileChange(event.target.files as FileList)
              }
            />
            <span>Add files</span>
          </label>
        </div>
      </div>
      <div className="col-lg-6 d-flex align-items-center">
        <div className="fileupload-process w-100">
          <div
            id="total-progress"
            className="progress progress-striped active"
            role="progressbar"
            style={{ opacity: 0 }}
          >
            <div
              className="progress-bar progress-bar-success"
              style={{ width: '0%' }}
              data-dz-uploadprogress=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(FileAction);
