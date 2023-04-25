import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material";


const MuiTable = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label={'simple table'}>
                <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Date of Birth</TableCell>
                        <TableCell>Street</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>State</TableCell>
                        <TableCell>Zip Code</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody></TableBody>
            </Table>
        </TableContainer>
    );
};

export default MuiTable;

const table = [{
    "id": 1,
    "first_name": "Gottfried",
    "last_name": "Gerretsen",
    "start_date": "ggerretsen0@bandcamp.com",
    "department": "Outdoors",
    "date_of_birth": "9/17/2022",
    "street": "98 Browning Crossing",
    "city": "Pyhäselkä",
    "state": null,
    "zip_code": "77580"
}, {
    "id": 2,
    "first_name": "Evanne",
    "last_name": "Jura",
    "start_date": "ejura1@hp.com",
    "department": "Tools",
    "date_of_birth": "6/26/2022",
    "street": "160 Scott Alley",
    "city": "Barvinkove",
    "state": null,
    "zip_code": null
}, {
    "id": 3,
    "first_name": "Deirdre",
    "last_name": "Byrch",
    "start_date": "dbyrch2@t.co",
    "department": "Kids",
    "date_of_birth": "10/6/2022",
    "street": "02708 Spohn Hill",
    "city": "Ash Shajarah",
    "state": null,
    "zip_code": null
}, {
    "id": 4,
    "first_name": "Derron",
    "last_name": "Schwier",
    "start_date": "dschwier3@mozilla.org",
    "department": "Electronics",
    "date_of_birth": "5/4/2022",
    "street": "15846 Mendota Court",
    "city": "Lycksele",
    "state": "Västerbotten",
    "zip_code": "921 33"
}, {
    "id": 5,
    "first_name": "Connor",
    "last_name": "Seely",
    "start_date": "cseely4@ustream.tv",
    "department": "Music",
    "date_of_birth": "7/12/2022",
    "street": "8 Bay Alley",
    "city": "Lékoni",
    "state": null,
    "zip_code": null
}, {
    "id": 6,
    "first_name": "Shirlene",
    "last_name": "Cosgrove",
    "start_date": "scosgrove5@engadget.com",
    "department": "Books",
    "date_of_birth": "11/1/2022",
    "street": "29 Homewood Point",
    "city": "Beizheng",
    "state": null,
    "zip_code": null
}, {
    "id": 7,
    "first_name": "Earvin",
    "last_name": "Farfull",
    "start_date": "efarfull6@booking.com",
    "department": "Games",
    "date_of_birth": "7/4/2022",
    "street": "0819 Waubesa Junction",
    "city": "Reitoca",
    "state": null,
    "zip_code": null
}, {
    "id": 8,
    "first_name": "Esma",
    "last_name": "Ruddiman",
    "start_date": "eruddiman7@angelfire.com",
    "department": "Baby",
    "date_of_birth": "11/4/2022",
    "street": "07810 Hoepker Hill",
    "city": "Tiên Lãng",
    "state": null,
    "zip_code": null
}, {
    "id": 9,
    "first_name": "Lindi",
    "last_name": "D'Adda",
    "start_date": "ldadda8@imdb.com",
    "department": "Games",
    "date_of_birth": "4/18/2023",
    "street": "2382 Banding Junction",
    "city": "Khuzhir",
    "state": null,
    "zip_code": "666137"
}, {
    "id": 10,
    "first_name": "Harmonie",
    "last_name": "Bullimore",
    "start_date": "hbullimore9@wikispaces.com",
    "department": "Electronics",
    "date_of_birth": "2/28/2023",
    "street": "765 Novick Avenue",
    "city": "Ðà Lạt",
    "state": null,
    "zip_code": null
}]