import React from "react";
import ButtonWithIcon from "@/components/atoms/Buttons/ButtonWithIcon";
import Spinner from "@/components/atoms/Loaders/Spinner";
import { TTag, TTagData } from "@/types/tag";

interface ITagsTable {
  tags: TTagData;
  isLoading: boolean;
  onEdit: (tag: TTag) => void;
  onDelete: (tag: TTag) => void;
}

const TagsTable: React.FC<ITagsTable> = ({
  tags,
  onEdit,
  onDelete,
  isLoading,
}): React.JSX.Element => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Color</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading ? (
          tags?.data.map((tag) => (
            <tr key={tag.id}>
              <td>{tag.name}</td>
              <td>{tag.color}</td>
              <td>
                <div className="d-flex gap-1">
                  <ButtonWithIcon
                    icon="ri-edit-2-fill"
                    className="btn-primary"
                    onClick={() => onEdit(tag)}
                  />
                  <ButtonWithIcon
                    icon="ri-delete-bin-4-line"
                    className="btn-danger"
                    onClick={() => onDelete(tag)}
                  />
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>
              <div className="d-flex justify-content-center">
                <Spinner />
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TagsTable;
