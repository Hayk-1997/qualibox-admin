"use client";

import React from "react";
import { OrderDirectionEnum } from "@/enums/common";
import SortableHeader from "@/components/atoms/SortableHeader";
import ButtonWithIcon from "@/components/atoms/Buttons/ButtonWithIcon";
import Spinner from "@/components/atoms/Loaders/Spinner";
import { TCategoriesData, TCategory } from "@/types/category";

interface ICategoryTable {
  orderDirection: OrderDirectionEnum;
  handleSortTable: (name: string, orderDirection: OrderDirectionEnum) => void;
  isLoading: boolean;
  categories: TCategoriesData | undefined;
  onEdit: (category: TCategory) => void;
  onDelete: (category: TCategory) => void;
}

const CategoryTable: React.FC<ICategoryTable> = ({
  orderDirection,
  handleSortTable,
  isLoading,
  categories,
  onEdit,
  onDelete,
}): React.JSX.Element => {
  return (
    <table className="table">
      <thead>
        <tr>
          <SortableHeader
            name="Id"
            orderDirection={orderDirection}
            onClick={handleSortTable}
          />
          <SortableHeader
            name="Name"
            orderDirection={orderDirection}
            onClick={handleSortTable}
          />
          <th scope="col">Parent Category</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading ? (
          categories?.data.map((category) => (
            <tr key={category.id}>
              <th scope="row">{category.id}</th>
              <td>{category.name}</td>
              <td>
                {categories.data.find((item) => item.id === category.parentId)
                  ?.name ?? "Doesnt have parent"}
              </td>
              <td>
                <div className="d-flex gap-1">
                  <ButtonWithIcon
                    icon="ri-edit-2-fill"
                    className="btn-primary"
                    onClick={() => onEdit(category)}
                  />
                  <ButtonWithIcon
                    icon="ri-delete-bin-4-line"
                    className="btn-danger"
                    onClick={() => onDelete(category)}
                  />
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>
              <div className="d-flex justify-content-center">
                <Spinner />
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default CategoryTable;
