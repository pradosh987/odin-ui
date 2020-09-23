import React from "react";
import Arrow from "../../node_modules/bootstrap-icons/icons/file-arrow-down-fill.svg";

interface IProps {
  totalPages: number;
  currentPage: number;
  onPaginate: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onPaginate }: IProps) => {
  return (
    <div className="pagination d-flex justify-content-center align-items-center m-2 mb-4">
      {currentPage + 1 < totalPages && (
        <a
          className="btn btn-primary btn-lg"
          onClick={() =>
            currentPage < totalPages ? onPaginate(currentPage + 1) : false
          }
        >
          Load More <Arrow />
        </a>
      )}
    </div>
  );
};
