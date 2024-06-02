"use client";

import React, { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import CategoryTable from "@/components/templates/Tables/CategoryTable";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useGetCategoriesQuery } from "@/lib/apiModules/category/api";
import { OrderDirectionEnum } from "@/enums/common";
import { TCategory } from "@/types/category";
import { bindParentCategoriesSelectOption } from "@/utils/category";

const UpdateCategoryDialog = dynamic(
  () => import("@/components/templates/Dialogs/UpdateCategoryDialog"),
  {
    ssr: true,
  },
);

const DeleteCategoryDialog = dynamic(
  () => import("@/components/templates/Dialogs/DeleteCategoryDialog"),
  {
    ssr: true,
  },
);

const CategoriesTemplate: React.FC = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [category, setCategory] = useState<TCategory | undefined>(undefined);

  const { data: categories, isLoading } = useGetCategoriesQuery(
    new URLSearchParams(searchParams).toString(),
    {},
  );

  const parentCategories = useMemo(() => {
    if (categories) {
      return bindParentCategoriesSelectOption(categories.data);
    }
    return null;
  }, [categories]);

  const handleSortTable = useCallback(
    (name: string, orderDirection: OrderDirectionEnum): void => {
      const params = new URLSearchParams(searchParams);
      params.set("orderBy", name);
      params.set("orderDirection", orderDirection);

      const data = params.toString();

      router.replace(pathname + "?" + data);
    },
    [pathname, router, searchParams],
  );

  const handleDelete = useCallback((category: TCategory) => {
    setOpenDeleteDialog(true);
    setCategory(category);
  }, []);

  const handleEdit = useCallback((category: TCategory) => {
    setOpenUpdateDialog(true);
    setCategory(category);
  }, []);

  return (
    <>
      {openUpdateDialog && (
        <UpdateCategoryDialog
          category={category!}
          parentCategories={parentCategories}
          onClose={() => setOpenUpdateDialog(false)}
        />
      )}
      {openDeleteDialog && (
        <DeleteCategoryDialog
          onClose={() => setOpenDeleteDialog(false)}
          categoryId={category.id}
        />
      )}
      <div className="pagetitle">
        <h1>Categories</h1>
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Categories Table</h5>
                <CategoryTable
                  orderDirection={
                    searchParams.get("orderDirection") ===
                    OrderDirectionEnum.ASC
                      ? OrderDirectionEnum.DESC
                      : OrderDirectionEnum.ASC
                  }
                  handleSortTable={handleSortTable}
                  categories={categories}
                  isLoading={isLoading}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesTemplate;
