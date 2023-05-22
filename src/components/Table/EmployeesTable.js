import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS } from "./columns";
import "./EmployeesTable.css";
import { GlobalFilter } from "./GlobalFilter";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const EmployeesTable = () => {
  const employeesList = useSelector(
    (store) => store.persistedReducers.employees
  );
  // console.log("***store***", employeesList);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => employeesList, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      //Affichage de la page par default de la table
      // initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className="global_table_container">
      <div className="table_container">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
          <thead className="table_head_row">
            {headerGroups.map((headerGroup, index) => (
              <tr
                className="table_head_first_row"
                key={index}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column, index) => (
                  <th
                    className="table_column_head_cell"
                    key={index}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div className="column_header_container">
                      <div className="column_header_text">
                        {column.render("Header")}
                      </div>
                      <div className="column_header_arrow">
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <ArrowDownwardIcon />
                          ) : (
                            <ArrowUpwardIcon />
                          )
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="table_body_container" {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr className="table_row" key={index} {...row.getRowProps}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        className="table_cell"
                        key={index}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination_container">
          <div className="page_container">
            <div className="pagination_pages_container">
              <span className="pagination_show_page">
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
            </div>
            <div className="pagination_select_page_dropdown_container">
              <Select
                MenuProps={{
                  sx: {
                    "&& .Mui-selected": {
                      backgroundColor: "#bfbfbf",
                    },
                  },
                }}
                sx={{
                  backgroundColor: "#333333",
                  height: "24px",
                  color: "#fff",
                  "& .MuiSelect-iconOutlined": {
                    color: "#fff",
                  },
                }}
                className="pagination_select_page_dropdown"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[10, 25, 50].map((pageSize, index) => (
                  <MenuItem key={index} value={pageSize}>
                    Show {pageSize}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="pagination_button_container">
            <div className="prev_button_container">
              <Button
                sx={{
                  minWidth: "fit-content",
                  height: "24px",
                  backgroundColor: "#333333",
                  "&:hover": {
                    backgroundColor: "#595959",
                  },
                }}
                variant="contained"
                className="pagination_first_page"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                {"<<"}
              </Button>
              <Button
                sx={{
                  height: "24px",
                  minWidth: "fit-content",
                  backgroundColor: "#333333",
                  "&:hover": {
                    backgroundColor: "#595959",
                  },
                }}
                variant="contained"
                className="pagination_previous_page"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {"<"}
              </Button>
            </div>
            <div className="next_button_container">
              <Button
                sx={{
                  height: "24px",
                  minWidth: "fit-content",
                  backgroundColor: "#333333",
                  "&:hover": {
                    backgroundColor: "#595959",
                  },
                }}
                variant="contained"
                className="pagination_next_page"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                {">"}
              </Button>
              <Button
                sx={{
                  height: "24px",
                  minWidth: "fit-content",
                  backgroundColor: "#333333",
                  "&:hover": {
                    backgroundColor: "#595959",
                  },
                }}
                variant="contained"
                className="pagination_last_page"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {">>"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
