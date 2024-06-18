"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import CategoryTable from "@/components/templates/Tables/CategoryTable";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  useGetCategoriesQuery,
  useGetParentCategoriesQuery,
} from "@/lib/apiModules/category/api";
import { OrderDirectionEnum } from "@/enums/common";
import { TCategory } from "@/types/category";
import { bindParentCategoriesSelectOption } from "@/utils/category";
import { sortTable } from "@/utils/element";
import { shallowEqual, useSelector } from "react-redux";
import {
  useSelectCreateCategoryRequest,
  useSelectDeleteCategoryRequest,
  useSelectUpdateCategoryRequest,
} from "@/lib/features/categorySlice/selectors";
import Pagination from "@/components/atoms/Pagination";
import { handlePaginationChange } from "@/utils/url";

const UpdateCategoryDialog = dynamic(
  () => import("@/components/Dialogs/UpdateCategoryDialog"),
  {
    ssr: true,
  },
);

const DeleteCategoryDialog = dynamic(
  () => import("@/components/Dialogs/DeleteCategoryDialog"),
  {
    ssr: true,
  },
);

const CreateCategoryDialog = dynamic(
  () => import("@/components/Dialogs/CreateCategoryDialog"),
  {
    ssr: true,
  },
);

const CategoriesTemplate: React.FC = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { success: isDeleted } = useSelector(
    useSelectDeleteCategoryRequest,
    shallowEqual,
  );

  const { success: isCreated } = useSelector(
    useSelectCreateCategoryRequest,
    shallowEqual,
  );

  const { success: isUpdated } = useSelector(
    useSelectUpdateCategoryRequest,
    shallowEqual,
  );

  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openCreateDialog, setOpenCreateDialog] = useState<boolean>(false);

  const [category, setCategory] = useState<TCategory | undefined>(undefined);

  const {
    data: categories,
    isLoading,
    refetch,
  } = useGetCategoriesQuery(new URLSearchParams(searchParams).toString(), {});

  const { data: parentCategoriesData } = useGetParentCategoriesQuery();

  useEffect(() => {
    if (isDeleted || isCreated || isUpdated) {
      refetch();
    }
  }, [isDeleted, isCreated, isUpdated, refetch]);

  const parentCategories = useMemo(() => {
    if (parentCategoriesData) {
      return bindParentCategoriesSelectOption(parentCategoriesData);
    }
    return null;
  }, [parentCategoriesData]);

  const handleSortTable = useCallback(
    (name: string, orderDirection: OrderDirectionEnum): void => {
      sortTable(searchParams, pathname, name, orderDirection, router);
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
          categoryId={category!.id}
        />
      )}
      {openCreateDialog && (
        <CreateCategoryDialog
          onClose={() => setOpenCreateDialog(false)}
          parentCategories={parentCategories!}
        />
      )}
      <div className="pagetitle d-flex justify-content-between">
        <h1>Categories</h1>
        <button
          className="btn btn-success"
          onClick={() => setOpenCreateDialog(true)}
        >
          Create Category
        </button>
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
                  parentCategories={parentCategories}
                />
              </div>
              {categories?.total && (
                <Pagination
                  count={categories.total}
                  currentPage={Number(searchParams.get("page")) || 1}
                  onPageChange={(page) => {
                    handlePaginationChange(
                      page,
                      searchParams,
                      router,
                      pathname,
                    );
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesTemplate;
