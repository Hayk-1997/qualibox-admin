"use client";

import React, { useCallback, useState } from "react";
import { useGetProductsQuery } from "@/lib/apiModules/product/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { OrderDirectionEnum } from "@/enums/common";
import Pagination from "@/components/atoms/Pagination";
import { handlePaginationChange } from "@/utils/url";
import ProductTable from "@/components/templates/Tables/ProductTable";
import { sortTable } from "@/utils/element";

const ProductTemplate = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openCreateDialog, setOpenCreateDialog] = useState<boolean>(false);

  const { data: products, isLoading } = useGetProductsQuery(
    new URLSearchParams(searchParams).toString(),
    {},
  );
  console.log("products", products);

  const handleDelete = useCallback((product) => {
    setOpenDeleteDialog(true);
    console.log("product", product);
  }, []);

  const handleEdit = useCallback((product) => {
    setOpenUpdateDialog(true);
    console.log("product", product);
  }, []);

  const handleSortTable = useCallback(
    (name: string, orderDirection: OrderDirectionEnum): void => {
      sortTable(searchParams, pathname, name, orderDirection, router);
    },
    [pathname, router, searchParams],
  );

  return (
    <>
      <div className="pagetitle d-flex justify-content-between">
        <h1>Products</h1>
        <button
          className="btn btn-success"
          // onClick={() => setOpenCreateDialog(true)}
        >
          Create Product
        </button>
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Product Table</h5>
                <ProductTable
                  orderDirection={
                    searchParams.get("orderDirection") ===
                    OrderDirectionEnum.ASC
                      ? OrderDirectionEnum.DESC
                      : OrderDirectionEnum.ASC
                  }
                  handleSortTable={handleSortTable}
                  products={products}
                  isLoading={isLoading}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </div>
              {products?.total && (
                <Pagination
                  count={products.total}
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

export default ProductTemplate;
