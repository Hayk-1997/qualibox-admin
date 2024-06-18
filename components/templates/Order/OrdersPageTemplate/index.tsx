"use client";

import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { useGetOrdersQuery } from "@/lib/apiModules/order/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Pagination from "@/components/atoms/Pagination";
import { handlePaginationChange } from "@/utils/url";
import OrderTable from "@/components/templates/Tables/OrderTable";
import { OrderDirectionEnum } from "@/enums/common";
import { sortTable } from "@/utils/element";
import { TOrder } from "@/types/order";

const UpdateOrderDialog = dynamic(
  () => import("@/components/Dialogs/Order/UpdateOrderDialog"),
  {
    ssr: true,
  },
);

const OrdersPageTemplate = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [order, setOrder] = useState<TOrder | undefined>(undefined);
  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);

  const { data: orders, isLoading } = useGetOrdersQuery(
    new URLSearchParams(searchParams).toString(),
    {},
  );

  const handleSortTable = useCallback(
    (name: string, orderDirection: OrderDirectionEnum): void => {
      sortTable(searchParams, pathname, name, orderDirection, router);
    },
    [pathname, router, searchParams],
  );

  const onEdit = useCallback((order: TOrder) => {
    setOrder(order);
    setOpenUpdateDialog(true);
  }, []);

  return (
    <>
      {openUpdateDialog && (
        <UpdateOrderDialog
          onClose={() => setOpenUpdateDialog(false)}
          order={order}
        />
      )}
      <div className="pagetitle d-flex justify-content-between">
        <h1>Orders</h1>
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order Table</h5>
                <OrderTable
                  orders={orders}
                  isLoading={isLoading}
                  orderDirection={
                    searchParams.get("orderDirection") ===
                    OrderDirectionEnum.ASC
                      ? OrderDirectionEnum.DESC
                      : OrderDirectionEnum.ASC
                  }
                  handleSortTable={handleSortTable}
                  onEdit={onEdit}
                  onDelete={() => {}}
                />
              </div>
              {!!orders?.total && (
                <Pagination
                  count={orders?.total || 0}
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

export default OrdersPageTemplate;
