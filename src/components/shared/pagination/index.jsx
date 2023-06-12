import React from "react";

// MUI-icons
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";

const pagination = ({
  pageNumber,
  setCurrentPage,
  showItem,
  totalItems,
  parPage,
}) => {
  const totalPage = Math.ceil(totalItems / parPage);
  let startPage = pageNumber;

  let dif = totalPage - pageNumber;

  if (dif <= showItem) {
    startPage = totalPage - showItem;
  }
  let endPage = startPage < 0 ? showItem : showItem + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }
  const createBtn = () => {
    const btns = [];

    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li
          onClick={() => setCurrentPage(i)}
          className={`pagination__item ${
            pageNumber === i ? "pagination__active" : ""
          } `}
        >
          {i}
        </li>
      );
    }
    return btns;
  };

  return (
    <div className="pagination">
      <div
        className="pagination__left"
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
      >
        {pageNumber > 1 && (
          <ArrowCircleLeftSharpIcon className="pagination__icon" />
        )}
      </div>
      <ul className="pagination__center">{createBtn()}</ul>
      <div
        className="pagination__right"
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
      >
        {pageNumber < totalPage && (
          <ArrowCircleRightSharpIcon className="pagination__icon" />
        )}
      </div>
    </div>
  );
};

export default pagination;
