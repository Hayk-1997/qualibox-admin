import React from "react";
import Image from "next/image";
import { TOrderItems } from "@/types/order";
import { TDynamicProperties } from "@/types/property";

interface IOrderDynamicItems {
  item: TOrderItems<TDynamicProperties>;
}

const OrderDynamicItems: React.FC<IOrderDynamicItems> = ({
  item,
}): React.JSX.Element => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <Image
              src={item.thumbnail.path}
              alt="Preview"
              width={100}
              height={100}
              size="15vw"
            />
          </div>
          <div className="col-sm-12 col-md-8 mt-2">
            <div className="row mb-3">
              <div className="label col-3">Name</div>
              <div className="col-8">{item.productName}</div>
            </div>
            <div className="row mb-3">
              <div className="label col-3">Quantity</div>
              <div className="col-8">{item.quantity}</div>
            </div>
            <div className="row mb-3">
              <div className="label col-3">Width</div>
              <div className="col-8">{item.properties.width}</div>
            </div>
            <div className="row mb-3">
              <div className="label col-3">Height</div>
              <div className="col-8">{item.properties.height}</div>
            </div>
            <div className="row mb-3">
              <div className="label col-3">Depth</div>
              <div className="col-8">{item.properties.depth}</div>
            </div>
            <div className="row mb-3">
              <div className="label col-3">Material</div>
              <div className="col-8 d-flex">
                <strong>{item.properties.material.parentMaterialName}</strong>
                &nbsp;
                <p>{item.properties.material.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDynamicItems;
