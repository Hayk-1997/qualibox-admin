import React from "react";
import { ProductEnum } from "@/enums/product";

interface ICreateProductDropdown {
  handleClick: (value: ProductEnum) => void;
}

const CreateProductDropdown: React.FC<ICreateProductDropdown> = ({
  handleClick,
}): React.JSX.Element => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-success dropdown-toggle"
        type="button"
        id="create-product"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Create Product
      </button>
      <ul className="dropdown-menu" aria-labelledby="create-product">
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleClick(ProductEnum.STATIC_PRODUCT)}
          >
            Create Cabinet
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleClick(ProductEnum.DYNAMIC_PRODUCT)}
          >
            Create Door
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleClick(ProductEnum.STATIC_PRODUCT)}
          >
            Create Accessory
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CreateProductDropdown;
