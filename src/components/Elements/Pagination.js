import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../GlobalContext";
import {
  Pagination as paginator,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

function Pagination({ dataperPage, totalData, paginate }) {
  const globalData = useContext(GlobalContext);
  const [pNumber, setpNumber] = useState(1);

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalData / dataperPage); i++) {
    pageNumber.push(i);
  }
  const pagination = (number) => {
    paginate(number);
    setpNumber(number);
  };

  return (
    <nav>
      <ul
        className="pagination"
        style={{ justifyContent: "center", paddingTop: "5rem" }}
      >
        {pageNumber.map((number) => {
          return (
            <li
              key={number}
              className={pNumber === number ? "page-item active" : "page-item"}
            >
              <a
                onClick={() => pagination(number)}
                href="!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
