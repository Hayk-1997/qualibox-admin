"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useGetMaterialsQuery } from "@/lib/apiModules/material/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MaterialTable from "@/components/templates/Tables/MaterialTable";
import { OrderDirectionEnum } from "@/enums/common";
import { sortTable } from "@/utils/element";
import dynamic from "next/dynamic";
import { TMaterial } from "@/types/material";
import { shallowEqual, useSelector } from "react-redux";
import {
  useSelectCreateMaterialRequest,
  useSelectDeleteMaterialRequest,
  useSelectUpdateMaterialRequest,
} from "@/lib/features/materialSlice/selectors";

const DeleteMaterialDialog = dynamic(
  () => import("@/components/templates/Dialogs/DeleteMaterialDialog"),
  {
    ssr: true,
  },
);

const UpdateMaterialDialog = dynamic(
  () => import("@/components/templates/Dialogs/UpdateMaterialDialog"),
  {
    ssr: true,
  },
);

const CreateMaterialDialog = dynamic(
  () => import("@/components/templates/Dialogs/CreateMaterialDialog"),
  {
    ssr: true,
  },
);

const MaterialsTemplate = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { success: isDeleted } = useSelector(
    useSelectDeleteMaterialRequest,
    shallowEqual,
  );

  const { success: isCreated } = useSelector(
    useSelectCreateMaterialRequest,
    shallowEqual,
  );

  const { success: isUpdated } = useSelector(
    useSelectUpdateMaterialRequest,
    shallowEqual,
  );

  const [material, setMaterial] = useState<TMaterial | undefined>(undefined);
  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openCreateDialog, setOpenCreateDialog] = useState<boolean>(false);

  const {
    data: materials,
    isLoading,
    refetch,
  } = useGetMaterialsQuery(new URLSearchParams(searchParams).toString(), {});

  useEffect(() => {
    if (isDeleted || isCreated || isUpdated) {
      refetch();
    }
  }, [isDeleted, isCreated, isUpdated, refetch]);

  const handleSortTable = useCallback(
    (name: string, orderDirection: OrderDirectionEnum): void => {
      sortTable(searchParams, pathname, name, orderDirection, router);
    },
    [pathname, router, searchParams],
  );

  const onEdit = useCallback((material: TMaterial) => {
    setOpenUpdateDialog(true);
    setMaterial(material);
  }, []);

  const onDelete = useCallback((material: TMaterial) => {
    setMaterial(material);
    setOpenDeleteDialog(true);
  }, []);

  return (
    <>
      {openDeleteDialog && (
        <DeleteMaterialDialog
          onClose={() => setOpenDeleteDialog(false)}
          materialId={material!.id}
        />
      )}
      {openUpdateDialog && (
        <UpdateMaterialDialog
          onClose={() => setOpenUpdateDialog(false)}
          material={material}
        />
      )}
      {openCreateDialog && (
        <CreateMaterialDialog onClose={() => setOpenCreateDialog(false)} />
      )}
      <div className="pagetitle d-flex justify-content-between">
        <h1>Materials</h1>
        <button
          className="btn btn-success"
          onClick={() => setOpenCreateDialog(true)}
        >
          Create Material
        </button>
      </div>

      <MaterialTable
        materials={materials}
        isLoading={isLoading}
        orderDirection={
          searchParams.get("orderDirection") === OrderDirectionEnum.ASC
            ? OrderDirectionEnum.DESC
            : OrderDirectionEnum.ASC
        }
        handleSortTable={handleSortTable}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </>
  );
};

export default MaterialsTemplate;
