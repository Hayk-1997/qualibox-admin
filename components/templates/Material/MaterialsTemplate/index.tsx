"use client";

import React, { useCallback, useState } from "react";
import { useGetMaterialsQuery } from "@/lib/apiModules/material/api";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MaterialTable from "@/components/templates/Tables/MaterialTable";
import { OrderDirectionEnum } from "@/enums/common";
import { sortTable } from "@/utils/element";
import dynamic from "next/dynamic";
import { TMaterial } from "@/types/material";

const DeleteMaterialDialog = dynamic(
  () => import("@/components/templates/Dialogs/Material/DeleteMaterialDialog"),
  {
    ssr: true,
  },
);

const UpdateMaterialDialog = dynamic(
  () => import("@/components/templates/Dialogs/Material/UpdateMaterialDialog"),
  {
    ssr: true,
  },
);

const CreateMaterialDialog = dynamic(
  () => import("@/components/templates/Dialogs/Material/CreateMaterialDialog"),
  {
    ssr: true,
  },
);

const MaterialsTemplate = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [material, setMaterial] = useState<TMaterial | undefined>(undefined);
  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openCreateDialog, setOpenCreateDialog] = useState<boolean>(false);

  const { data: materials, isLoading } = useGetMaterialsQuery(
    new URLSearchParams(searchParams).toString(),
    {},
  );

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
          material={material!}
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
