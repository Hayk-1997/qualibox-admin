import React from "react";
import { CreateProductEnum } from "@/enums/product";

interface ICreateProductDropdown {
  handleClick: (value: CreateProductEnum) => void;
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
            onClick={() => handleClick(CreateProductEnum.CABINET)}
          >
            Create Cabinet
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleClick(CreateProductEnum.DOOR)}
          >
            Create Door
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleClick(CreateProductEnum.ACCESSORIES)}
          >
            Create Accessory
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CreateProductDropdown;
