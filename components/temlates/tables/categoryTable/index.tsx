"use client";

import React, { useCallback } from "react";
import ButtonWithIcon from "@/components/atoms/buttons/buttonWithIcon";
import { useGetCategoriesQuery } from "@/lib/apiModules/category/api";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import SortableHeader from "components/atoms/sortableHeader";
import Spinner from "@/components/atoms/loaders/spinner";
import { OrderDirectionEnum } from "@/enums/common";

const CategoryTable: React.FC = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { data: categories, isLoading } = useGetCategoriesQuery(
    new URLSearchParams(searchParams).toString(),
    {},
  );

   const handleSortTable = useCallback(
    (name, orderDirection): void => {
      const params = new URLSearchParams(searchParams);
      params.set("orderBy", name);
      params.set("orderDirection", orderDirection);

      const data = params.toString();

      router.replace(pathname + "?" + data);
    },
    [pathname, router, searchParams],
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <SortableHeader
            name="Id"
            orderDirection={
              searchParams.get("orderDirection") === OrderDirectionEnum.ASC
                ? OrderDirectionEnum.DESC
                : OrderDirectionEnum.ASC
            }
            onClick={handleSortTable}
          />
          <SortableHeader
            name="Name"
            orderDirection={
              searchParams.get("orderDirection") === OrderDirectionEnum.ASC
                ? OrderDirectionEnum.DESC
                : OrderDirectionEnum.ASC
            }
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
