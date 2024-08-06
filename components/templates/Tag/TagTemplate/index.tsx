"use client";

import React, { useCallback, useState } from "react";
import Pagination from "@/components/atoms/Pagination";
import { handlePaginationChange } from "@/utils/url";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useGetTagsQuery } from "@/lib/apiModules/tag/api";
import TagsTable from "@/components/templates/Tables/TagsTable";
import { TTag } from "@/types/tag";
import dynamic from "next/dynamic";

const DeleteTagDialog = dynamic(
  () => import("@/components/Dialogs/Tag/DeleteTagDialog"),
);
const UpdateTagDialog = dynamic(
  () => import("@/components/Dialogs/Tag/UpdateTagDialog"),
);
const CreateTagDialog = dynamic(
  () => import("@/components/Dialogs/Tag/CreateTagDialog"),
);

const TagTemplate = (): React.JSX.Element => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [openDeleteDialog, setOpenDeleteDialog] = useState<boolean>(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState<boolean>(false);
  const [openCreateDialog, setOpenCreateDialog] = useState<boolean>(false);

  const [tag, setTag] = useState<TTag | undefined>(undefined);

  const { data: tags, isLoading } = useGetTagsQuery(
    new URLSearchParams(searchParams).toString(),
    {},
  );

  const handleDelete = useCallback((tag: TTag) => {
    setTag(tag);
    setOpenDeleteDialog(true);
  }, []);

  const handleEdit = useCallback((tag: TTag) => {
    setOpenUpdateDialog(true);
    setTag(tag);
  }, []);

  return (
    <>
      {openCreateDialog && (
        <CreateTagDialog onClose={() => setOpenCreateDialog(false)} />
      )}
      {openUpdateDialog && (
        <UpdateTagDialog
          onClose={() => setOpenUpdateDialog(false)}
          tag={tag!}
        />
      )}
      {openDeleteDialog && (
        <DeleteTagDialog
          tagId={tag!.id}
          onClose={() => setOpenDeleteDialog(false)}
        />
      )}
      <div className="pagetitle d-flex justify-content-between">
        <h1>Tags</h1>
        <button
          className="btn btn-success"
          onClick={() => setOpenCreateDialog(true)}
        >
          Create Tag
        </button>
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Tag Table</h5>
                <TagsTable
                  tags={tags}
                  isLoading={isLoading}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </div>
              {tags?.total && (
                <Pagination
                  count={tags.total}
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

export default TagTemplate;
