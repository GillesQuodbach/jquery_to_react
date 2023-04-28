import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import TablePagination from "@mui/material/TablePagination";
import {useState} from "react";
import Searchbar from "../Searchbar/Searchbar";

export default function EmployeesTable() {
    const [rows, setRows] = useState(originalRows);
    const [orderDirection, setOrderDirection] = useState("asc");
    const [valueToOrderBy, setValueToOrderBy] = useState("firstName");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    // console.log(rows);
    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(order, orderBy) {
        // console.log('getComparator')
        return order === "desc"
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const sortedRowInformation = (rowArray, comparator) => {
        const stabilizedRowArray = rowArray.map((el, index) => [el, index]);
        stabilizedRowArray.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            // console.log('stabilizedRowArray')
            return a[1] - b[1];
        });
        // console.log('stabilizedRowArray')
        return stabilizedRowArray.map((el) => el[0]);
    };
    const handleRequestSort = (event, property) => {
        const isAscending = valueToOrderBy === property && orderDirection === "asc";
        setValueToOrderBy(property);
        setOrderDirection(isAscending ? "desc" : "asc");
        // console.log('handleRequestSort')
    };

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // ! Searchbar logic
    //On récupère l'input
    const [inputSearch, setInputSearch] = useState("");

    let inputSearchHandler = (e) => {
        let lowerCaseSearchValue = e.target.value.toLowerCase();
        setInputSearch(lowerCaseSearchValue);
        filterData(lowerCaseSearchValue);
    };
    console.log("inputSearch", inputSearch);

    //On filtre les datas
    const filterData = (searchValue) => {
        const toLowerCaseSearchedValue = searchValue.toLowerCase().trim();
        console.log("toLowerCaseValue", toLowerCaseSearchedValue);
        //Si input vide, render originalRows
        if (toLowerCaseSearchedValue === "") {
            setRows(originalRows);
            console.log("empty input");
        } else {
            const filteredData = originalRows.filter((el) => {
                return (
                    el.first_name.toLowerCase().includes(toLowerCaseSearchedValue) ||
                    el.last_name.toLowerCase().includes(toLowerCaseSearchedValue)
                );
            });
            setRows(filteredData);
        }
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Searchbar placeholder="Search..." onChange={inputSearchHandler}/>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell key={"first_name"}>
                                <TableSortLabel
                                    active={valueToOrderBy === "first_name"}
                                    direction={
                                        valueToOrderBy === "first_name" ? orderDirection : "asc"
                                    }
                                    onClick={createSortHandler("first_name")}
                                >
                                    First Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell key={"last_name"} align="right">
                                <TableSortLabel
                                    active={valueToOrderBy === "last_name"}
                                    direction={
                                        valueToOrderBy === "last_name" ? orderDirection : "asc"
                                    }
                                    onClick={createSortHandler("last_name")}
                                >
                                    Last Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={valueToOrderBy === "start_date"}
                                    direction={
                                        valueToOrderBy === "start_date" ? orderDirection : "asc"
                                    }
                                    onClick={createSortHandler("start_date")}
                                >
                                    Start Date
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={valueToOrderBy === "department"}
                                    direction={
                                        valueToOrderBy === "department" ? orderDirection : "asc"
                                    }
                                    onClick={createSortHandler("department")}
                                >
                                    Department
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={valueToOrderBy === "date_of_birth"}
                                    direction={
                                        valueToOrderBy === "date_of_birth" ? orderDirection : "asc"
                                    }
                                    onClick={createSortHandler("date_of_birth")}
                                >
                                    Date of Birth
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={valueToOrderBy === "street"}
                                    direction={
                                        valueToOrderBy === "street" ? orderDirection : "asc"
                                    }
                                    onClick={createSortHandler("street")}
                                >
                                    Street
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={valueToOrderBy === "city"}
                                    direction={valueToOrderBy === "city" ? orderDirection : "asc"}
                                    onClick={createSortHandler("city")}
                                >
                                    City
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={valueToOrderBy === "state"}
                                    direction={
                                        valueToOrderBy === "state" ? orderDirection : "asc"
                                    }
                                    onClick={createSortHandler("state")}
                                >
                                    State
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="right">
                                <TableSortLabel
                                    active={valueToOrderBy === "zip_code"}
                                    direction={
                                        valueToOrderBy === "zip_code" ? orderDirection : "asc"
                                    }
                                    onClick={createSortHandler("zip_code")}
                                >
                                    Zip Code
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {rows.length === 0 ? (
                        <TableBody>
                            <TableRow>
                                <TableCell>No data found</TableCell>
                            </TableRow>
                        </TableBody>
                    ) : (
                        <TableBody>
                            {sortedRowInformation(
                                rows,
                                getComparator(orderDirection, valueToOrderBy)
                            )
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((person, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                    >
                                        <TableCell component="th" scope="row">
                                            {person.first_name}
                                        </TableCell>
                                        <TableCell align="right">{person.last_name}</TableCell>
                                        <TableCell align="right">{person.start_date}</TableCell>
                                        <TableCell align="right">{person.department}</TableCell>
                                        <TableCell align="right">{person.date_of_birth}</TableCell>
                                        <TableCell align="right">{person.street}</TableCell>
                                        <TableCell align="right">{person.city}</TableCell>
                                        <TableCell align="right">{person.state}</TableCell>
                                        <TableCell align="right">{person.zip_code}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    );
}

export const originalRows = [
    {
        id: 1,
        first_name: "Gottfried",
        last_name: "Gerretsen",
        start_date: "ggerretsen0@bandcamp.com",
        department: "Outdoors",
        date_of_birth: "9/17/2022",
        street: "98 Browning Crossing",
        city: "Pyhäselkä",
        state: null,
        zip_code: "77580",
    },
    {
        id: 2,
        first_name: "Evanne",
        last_name: "Jura",
        start_date: "ejura1@hp.com",
        department: "Tools",
        date_of_birth: "6/26/2022",
        street: "160 Scott Alley",
        city: "Barvinkove",
        state: null,
        zip_code: null,
    },
    {
        id: 3,
        first_name: "Deirdre",
        last_name: "Byrch",
        start_date: "dbyrch2@t.co",
        department: "Kids",
        date_of_birth: "10/6/2022",
        street: "02708 Spohn Hill",
        city: "Ash Shajarah",
        state: null,
        zip_code: null,
    },
    {
        id: 4,
        first_name: "Derron",
        last_name: "Schwier",
        start_date: "dschwier3@mozilla.org",
        department: "Electronics",
        date_of_birth: "5/4/2022",
        street: "15846 Mendota Court",
        city: "Lycksele",
        state: "Västerbotten",
        zip_code: "921 33",
    },
    {
        id: 5,
        first_name: "Connor",
        last_name: "Seely",
        start_date: "cseely4@ustream.tv",
        department: "Music",
        date_of_birth: "7/12/2022",
        street: "8 Bay Alley",
        city: "Lékoni",
        state: null,
        zip_code: null,
    },
    {
        id: 6,
        first_name: "Shirlene",
        last_name: "Cosgrove",
        start_date: "scosgrove5@engadget.com",
        department: "Books",
        date_of_birth: "11/1/2022",
        street: "29 Homewood Point",
        city: "Beizheng",
        state: null,
        zip_code: null,
    },
    {
        id: 7,
        first_name: "Earvin",
        last_name: "Farfull",
        start_date: "efarfull6@booking.com",
        department: "Games",
        date_of_birth: "7/4/2022",
        street: "0819 Waubesa Junction",
        city: "Reitoca",
        state: null,
        zip_code: null,
    },
    {
        id: 8,
        first_name: "Esma",
        last_name: "Ruddiman",
        start_date: "eruddiman7@angelfire.com",
        department: "Baby",
        date_of_birth: "11/4/2022",
        street: "07810 Hoepker Hill",
        city: "Tiên Lãng",
        state: null,
        zip_code: null,
    },
    {
        id: 9,
        first_name: "Lindi",
        last_name: "D'Adda",
        start_date: "ldadda8@imdb.com",
        department: "Games",
        date_of_birth: "4/18/2023",
        street: "2382 Banding Junction",
        city: "Khuzhir",
        state: null,
        zip_code: "666137",
    },
    {
        id: 10,
        first_name: "Harmonie",
        last_name: "Bullimore",
        start_date: "hbullimore9@wikispaces.com",
        department: "Electronics",
        date_of_birth: "2/28/2023",
        street: "765 Novick Avenue",
        city: "Ðà Lạt",
        state: null,
        zip_code: null,
    },
];
