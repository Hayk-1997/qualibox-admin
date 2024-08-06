"use client";

import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useGetProductsQuery } from "@/lib/apiModules/product/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { OrderDirectionEnum } from "@/enums/common";
import Pagination from "@/components/atoms/Pagination";
import { handlePaginationChange } from "@/utils/url";
import ProductTable from "@/components/templates/Tables/ProductTable";
import { sortTable } from "@/utils/element";
import { ProductEnum } from "@/enums/product";
import { TDynamicProduct, TProduct, TStaticProduct } from "@/types/product";

const CreateProductDropdown = dynamic(
  () => import("@/components/molecules/DropDowns/CreateProductDropdown"),
);

const CreateStaticProductDialog = dynamic(
  () => import("@/components/Dialogs/Product/CreateStaticProductDialog"),
);

const DeleteProductDialog = dynamic(
  () => import("@/components/Dialogs/Product/DeleteProductDialog"),
);

const UpdateDynamicProductDialog = dynamic(
  () => import("@/components/Dialogs/Product/UpdateDynamicProductDialog"),
);

const CreateDynamicProductDialog = dynamic(
  () => import("@/components/Dialogs/Product/CreateDynamicProductDialog"),
);

const UpdateStaticProductDialog = dynamic(
  () => import("@/components/Dialogs/Product/UpdateStaticProductDialog"),
);

const ProductTemplate = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [openUpdateDialog, setOpenUpdateDialog] = useState<
    ProductEnum | undefined
  >(undefined);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openCreateDialog, setOpenCreateDialog] = useState<
    ProductEnum | undefined
  >(undefined);
  const [product, setProduct] = useState<TProduct | undefined>(undefined);

  const { data: products, isLoading } = useGetProductsQuery(
    new URLSearchParams(searchParams).toString(),
    {},
  );

  useEffect(() => {
    if (products && product) {
      const filteredProduct = products.data.find(
        (item: { id: number }) => item.id === (product as TProduct).id,
      );
      setProduct(filteredProduct);
    }
  }, [products, product]);

  const handleDelete = useCallback((product: TProduct) => {
    setOpenDeleteDialog(true);
    setProduct(product);
  }, []);

  const handleEdit = useCallback((product: TProduct, type: ProductEnum) => {
    setOpenUpdateDialog(type);
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
      case ProductEnum.STATIC_PRODUCT:
        return (
          <CreateStaticProductDialog
            onClose={() => setOpenCreateDialog(undefined)}
          />
        );
      case ProductEnum.DYNAMIC_PRODUCT:
        return (
          <CreateDynamicProductDialog
            onClose={() => setOpenCreateDialog(undefined)}
          />
        );
    }
  }, [openCreateDialog]);

  const resolveUpdateProductDialog = useCallback(
    (product: TProduct) => {
      switch (openUpdateDialog) {
        case ProductEnum.STATIC_PRODUCT:
          return (
            <UpdateStaticProductDialog
              onClose={() => setOpenUpdateDialog(undefined)}
              product={product as TStaticProduct}
            />
          );
        case ProductEnum.DYNAMIC_PRODUCT:
          return (
            <UpdateDynamicProductDialog
              onClose={() => setOpenUpdateDialog(undefined)}
              product={product as TDynamicProduct}
            />
          );
      }
    },
    [openUpdateDialog],
  );

  return (
    <>
      {openDeleteDialog && (
        <DeleteProductDialog
          onClose={() => setOpenDeleteDialog(false)}
          productId={product!.id}
        />
      )}
      <div className="pagetitle d-flex justify-content-between">
        <h1>Products</h1>
        <CreateProductDropdown
          handleClick={(type) => setOpenCreateDialog(type)}
        />
        {resolveCreateProductDialog()}
        {resolveUpdateProductDialog(product!)}
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
