"use client";

import React from "react";
import ButtonWithIcon from "@/components/atoms/buttons/buttonWithIcon";
import { useGetCategoriesQuery } from "@/lib/apiModules/category/api";
import { useSearchParams } from "next/navigation";
import SortableHeader from "components/atoms/sortableHeader";
import Spinner from "@/components/atoms/loaders/spinner";

const CategoryTable: React.FC = (): React.JSX.Element => {
  const searchParams = useSearchParams();

  const { data: categories, isLoading } = useGetCategoriesQuery(
    new URLSearchParams(searchParams).toString(),
    {},
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <SortableHeader name="Id" orderBy="asc" />
          <SortableHeader name="Name" orderBy="asc" />
          <SortableHeader name="Parent Category" orderBy="asc" />
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading ? (
          categories?.data.map((category) => (
            <tr key={category.id}>
              <th scope="row">{category.id}</th>
              <td>{category.name}</td>
              <td>Designer</td>
              <td>
                <div className="d-flex gap-1">
                  <ButtonWithIcon
                    icon="ri-edit-2-fill"
                    className="btn-primary"
                  />
                  <ButtonWithIcon
                    icon="ri-delete-bin-4-line"
                    className="btn-danger"
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
