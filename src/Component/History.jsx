import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import TablePagination from "@mui/material/TablePagination";
import axios from "axios";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DownloadIcon from "@mui/icons-material/Download";
import XLSX from "xlsx";
import { useSelector, useDispatch } from "react-redux";
import { height } from "@mui/system";
// import { searchConsignee } from "../NODE/Sequelize/Controllers";

export default function History() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [dense, setDense] = useState(false);
  const [open, setOpen] = useState(false);
  const [consignee, setconsignee] = useState(null);
  const [searching, setsearching] = useState(null);

  // console.log(data)
  const handleOpen = (x) => {
    setOpen(true);
    console.log(x);
  };
  const handleClose = () => setOpen(false);
  // useEffect(()=>{
  //   SearchAPI()
  // },[searchConsignee])
  // const okaydata = searching && handleOpen;
  const searchConsignee = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/SearchByConsignee", {
        consPic: consignee,
      })
      .then((res) => {
        setsearching(res.data);
        handleOpen();
      })
      .catch((err) => console.log(err));
  };

  const DATA = useSelector((state) => {
    return state;
  });
  console.log(searching);

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(() => {
    axios
      .post("http://localhost:4000/ShowAllData")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  // const students = [
  //   {
  //     id: 1,
  //     name: "waleed",
  //     email: "email",
  //     year: "2022",
  //     fee: "3231",
  //   },
  // ];
  const ExcelDownload = (x) => {
    // console.log(x.consPic)
    const worksheet = XLSX.utils.json_to_sheet([x]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "downloadsheetnow");
    let buf = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, `${x.comodities}_${x.consPic}.xlsx`);
  };
  const allExcelData = () => {
    // console.log(data)
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "downloadsheetnow");
    let buf = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "AllData.xlsx");
  };
  const searchedDataExcel = (x) => {
    // console.log(x)
    const worksheet = XLSX.utils.json_to_sheet(x);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "downloadsheetnow");
    let buf = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "SerachedData.xlsx");
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1100,
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 54,
    p: 4,
  };

  return (
    <Grid style={{ width: "1450px", height:'500px' }}>
      <Paper sx={{ width: "100%", marginTop: "-27px" }}>
        <Box
          component="form"
          onSubmit={searchConsignee}
          style={{ textAlign: "left", margin: "25px" }}
        >
          <TextField
            id="standard-basic"
            label="Search by Consignee"
            variant="standard"
            style={{ width: "300px", color: "red" }}
            onChange={(e) => {
              setconsignee(e.target.value);
            }}
          />
          <Button type="submit">Submit</Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {searching && `your( ${searching.length} ) Result Found `}
              
              <Button onClick={()=> searchedDataExcel(searching)}>Download your searched data </Button>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, overflow: "scroll", height: 400 }}
            >
              {searching &&
                searching.map((x) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "#f0eeeb",
                        color: "black",
                        margin: 5,
                        border:'1px solid white',
                        borderRadius:20,
                        padding:8,
                        // paddingLeft:10
                      }}
                    >
                      {/* <div>Country</div> */}
                      {/* <div> */}
                      <div>
                        <h4>from country</h4>
                        <p>{x.order_from_country}</p>
                      </div>
                      <div style={{ marginLeft: 20 }}>
                        <h4>Comodities</h4>
                        <p>{x.comodities}</p>
                      </div>
                      <div style={{ marginLeft: 20 }}>
                        <h4>Competition</h4>
                        <p>{x.competition}</p>
                      </div>
                      <div style={{ marginLeft: 20 }}>
                        <h4>Consignee PIC</h4>
                        <p>{x.consPic}</p>
                      </div>
                      <div style={{ marginLeft: 20 }}>
                        <h4>Port Of Discharge</h4>
                        <p>{x.port_of_discharge}</p>
                      </div>
                      <div style={{ marginLeft: 20 }}>
                        <h4>port Of Loading</h4>
                        <p>{x.port_of_loading}</p>
                      </div>
                      <div style={{ marginLeft: 20 }}>
                        <h4>Final Destination</h4>
                        <p>{x.final_destination}</p>
                      </div>

                      <div style={{ marginLeft: 20 }}>
                        <img src="https://img.icons8.com/material/48/000000/ms-excel--v1.png" />
                        <Button onClick={() => ExcelDownload(x)} style={{marginTop:16}}>
                          <DownloadIcon />
                        </Button>
                      </div>
                      {/* </div> */}
                    </div>
                  );
                })}
            </Typography>
          </Box>
        </Modal>
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  country
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Shipper Addr
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Shipper Tel
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Shipper Email
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Shipper PIC
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Consignee Addr
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Consignee tell
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Consignee Email
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Consignee PIC
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Competition
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Volume
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Port Of Loading
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Port Of Discharge
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Final Destination
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Comodities
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Freight Term
                </TableCell>
                <TableCell
                  style={{ color: "white", backgroundColor: "orange" }}
                >
                  Remark
                </TableCell>
                <TableCell
                  style={{
                    color: "white",
                    backgroundColor: "orange",
                    display: "flex",
                  }}
                >
                  <Button onClick={() => allExcelData()}>
                    <img src="https://img.icons8.com/material/48/000000/ms-excel--v1.png" />
                    {/* <DownloadIcon /> */}
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((x) => {
                  return (
                    <TableRow hover key={x.id} style={{ color: "#313332" }}>
                      <TableCell>{x.order_from_country}</TableCell>
                      <TableCell>{x.shipAddr}</TableCell>
                      <TableCell>{x.shipTell}</TableCell>
                      <TableCell>{x.shipEmail}</TableCell>
                      <TableCell>{x.shipPic}</TableCell>
                      <TableCell>{x.consAddr}</TableCell>
                      <TableCell>{x.consTell}</TableCell>
                      <TableCell>{x.consEmail}</TableCell>
                      <TableCell>{x.consPic}</TableCell>
                      <TableCell>{x.competition}</TableCell>
                      <TableCell>{x.volume}</TableCell>
                      <TableCell>{x.port_of_loading}</TableCell>
                      <TableCell>{x.port_of_discharge}</TableCell>
                      <TableCell>{x.final_destination}</TableCell>
                      <TableCell>{x.comodities}</TableCell>
                      <TableCell>{x.freight_term}</TableCell>
                      <TableCell>{x.remark}</TableCell>
                      <TableCell>
                        <Button onClick={() => ExcelDownload(x)}>
                          <DownloadIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[6, 10, 14, 20, 50, 80, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Grid>
  );
}
