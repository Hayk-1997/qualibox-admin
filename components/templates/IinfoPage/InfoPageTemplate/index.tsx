"use client";

import React, { useCallback, useState } from "react";
import { useGetInfoPagesQuery } from "@/lib/apiModules/infoPage/api";
import InfoPageTable from "@/components/templates/Tables/InfoPageTable";
import { TInfoPage } from "@/types/infoPage";
import dynamic from "next/dynamic";

const UpdateInfoPageDialog = dynamic(
  () => import("@/components/Dialogs/InfoPageDialog"),
  {
    ssr: true,
  },
);

const InfoPageTemplate = (): React.JSX.Element => {
  const { data: infoPages, isLoading } = useGetInfoPagesQuery("");
  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);
  const [infoPage, setInfoPage] = useState<TInfoPage | undefined>();

  const onEdit = useCallback((infoPage: TInfoPage) => {
    setOpenUpdateDialog(true);
    setInfoPage(infoPage);
  }, []);

  return (
    <>
      {openUpdateDialog && (
        <UpdateInfoPageDialog
          onClose={() => setOpenUpdateDialog(false)}
          infoPage={infoPage!}
        />
      )}
      <div className="pagetitle d-flex justify-content-between">
        <h1>Info Pages</h1>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body pt-2">
                <InfoPageTable
                  onEdit={onEdit}
                  isLoading={isLoading}
                  infoPages={infoPages}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoPageTemplate;
