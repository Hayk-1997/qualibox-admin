import React, { memo } from 'react';
import { TProductImage } from '../../../type/web/products';
import Image from 'next/image';

interface IPreviews {
  images: TProductImage[];
  handleRemove: (id: number) => void;
}

const Previews: React.FC<IPreviews> = ({
  images,
  handleRemove,
}): JSX.Element => {
  return (
    <>
      {images?.map((image, index) => (
        <div key={index} className="table table-striped files" id="previews">
          <div className="row mt-2 dz-image-preview dz-processing dz-error dz-complete">
            <div className="col-auto">
              <span className="preview">
                <Image src={image.url} alt="image" width={80} height={80} />
              </span>
            </div>
            <div className="col d-flex align-items-center" />
            <div className="col-auto d-flex align-items-center">
              <div className="btn-group">
                <button
                  className="btn btn-danger delete"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    handleRemove(image.id);
                  }}
                >
                  <i className="fas fa-trash" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default memo(Previews);
