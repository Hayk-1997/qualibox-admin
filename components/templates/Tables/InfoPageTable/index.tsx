import React from "react";
import ButtonWithIcon from "@/components/atoms/Buttons/ButtonWithIcon";
import Spinner from "@/components/atoms/Loaders/Spinner";
import { TInfoPage, TInfoPagesData } from "@/types/infoPage";

interface InfoPageTableProps {
  onEdit: (infoPage: TInfoPage) => void;
  isLoading: boolean;
  infoPages: TInfoPagesData | null | undefined;
}

const InfoPageTable: React.FC<InfoPageTableProps> = ({
  infoPages,
  isLoading,
  onEdit,
}): React.JSX.Element => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading ? (
          infoPages?.data?.map((infoPage) => (
            <tr key={infoPage.id}>
              <td>{infoPage.name}</td>
              <td>
                <div className="d-flex gap-1">
                  <ButtonWithIcon
                    icon="ri-edit-2-fill"
                    className="btn-primary"
                    onClick={() => onEdit(infoPage)}
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

export default InfoPageTable;
