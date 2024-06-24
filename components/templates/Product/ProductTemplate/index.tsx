"use client";

import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { useGetProductsQuery } from "@/lib/apiModules/product/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { OrderDirectionEnum } from "@/enums/common";
import Pagination from "@/components/atoms/Pagination";
import { handlePaginationChange } from "@/utils/url";
import ProductTable from "@/components/templates/Tables/ProductTable";
import { sortTable } from "@/utils/element";
import CreateProductDropdown from "@/components/molecules/DropDowns/CreateProductDropdown";
import { CreateProductEnum } from "@/enums/product";
import DeleteProductDialog from "@/components/Dialogs/Product/DeleteProductDialog";

const CreateCabinetDialog = dynamic(
  () => import("@/components/Dialogs/Product/CreateCabinetDialog"),
  {
    ssr: true,
  },
);

const ProductTemplate = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openCreateDialog, setOpenCreateDialog] = useState("");
  const [product, setProduct] = useState();

  const { data: products, isLoading } = useGetProductsQuery(
    new URLSearchParams(searchParams).toString(),
    {},
  );

  const handleDelete = useCallback((product) => {
    setOpenDeleteDialog(true);
    setProduct(product);
  }, []);

  const handleEdit = useCallback((product) => {
    setOpenUpdateDialog(true);
    setProduct(product);
  }, []);

  const handleSortTable = useCallback(
    (name: string, orderDirection: OrderDirectionEnum): void => {
      sortTable(searchParams, pathname, name, orderDirection, router);
    },
    [pathname, router, searchParams],
  );

  const resolveCreateProductDialog = useCallback(() => {
    switch (openCreateDialog) {
      case CreateProductEnum.CABINET:
        return <CreateCabinetDialog onClose={() => setOpenCreateDialog("")} />;
    }
  }, [openCreateDialog]);

  return (
    <>
      {openDeleteDialog && (
        <DeleteProductDialog
          onClose={() => setOpenDeleteDialog(false)}
          productId={product.id}
        />
      )}
      <div className="pagetitle d-flex justify-content-between">
        <h1>Products</h1>
        <CreateProductDropdown
          handleClick={(type) => setOpenCreateDialog(type)}
        />
        {resolveCreateProductDialog()}
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
