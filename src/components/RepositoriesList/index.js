import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { RepositoryItem } from "../RepositoryItem";
import styles from "./styles.module.css";
import "./styles.css";
import { constants } from "../../constants";

function Items({ currentItems }) {
  return (
    currentItems &&
    currentItems.map((item) => (
      <RepositoryItem key={item.id} repository={item} />
    ))
  );
}

export const RepositoriesList = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const start = currentPage * constants.PageLimit - (constants.PageLimit - 1);
  const end = Math.min(start + constants.PageLimit - 1, props.totalCount);

  return (
    <div className={styles.repositoriesWrapper}>
      <h1>Repositories ({props.totalCount})</h1>
      <Items currentItems={props.repositories} />
      <div className={styles.paginationWrapper}>
        <div className={styles.pageList}>
          <span>
            {start} - {end}{" "}
          </span>
          of
          <span> {props.totalCount} </span>
          items
        </div>

        <ReactPaginate
          styles={{ display: "flex" }}
          nextLabel=">"
          onPageChange={(e) => {
            props.onPageChange(props.userName, e.selected + 1);
            setCurrentPage(e.selected + 1);
          }}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={Math.ceil(props.totalCount / constants.PageLimit)}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="previous-button"
          previousLinkClassName="page-link"
          nextClassName="next-button"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};
