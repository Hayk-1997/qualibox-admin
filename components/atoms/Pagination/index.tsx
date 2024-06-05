import React from "react";
import Paginator from "react-js-pagination";

interface IPagination {
  onPageChange: (page: number) => void;
  currentPage: number;
  count: number;
}

const Pagination: React.FC<IPagination> = ({
  onPageChange,
  currentPage,
  count,
}) => {
  return (
    <Paginator
      activePage={currentPage}
      itemsCountPerPage={10}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      onChange={onPageChange}
      innerClass="blog-pagination"
      activeLinkClass="active"
      hideFirstLastPages={true}
    />
  );
};

export default Pagination;
