import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Pdf from "../PDF/Pdf";
import Button from "@mui/material/Button";
import { useNavigate, Navigate } from "react-router-dom";
import { TextareaAutosize } from "@mui/material";
import TextField from "@mui/material/TextField";
import ReactDOMServer from "react-dom/server";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

export default function Dashboard() {
  const data = useSelector((state) => {
    return state;
  });
  // console.log(data.country)
  const [shipAddr, setShipAddr] = useState("");
  const [shipTell, setShipTell] = useState("");
  const [shipEmail, setShipEmail] = useState("");
  const [shipPic, setShipPic] = useState("");
  const [consAddr, setConsAddr] = useState("");
  const [consTell, setConsTell] = useState("");
  const [consEmail, setConsEmail] = useState("");
  const [consPic, setConsPic] = useState("");
  const [competition, setCompetition] = useState("");
  const [volume, setVolume] = useState("");
  const [port_of_loading, setport_of_loading] = useState("");
  const [port_of_discharge, setport_of_discharge] = useState("");
  const [final_destination, setFinal_destination] = useState("");
  const [comodities, setComodities] = useState("");
  const [freight_term, setFreight_term] = useState("");
  const [remark, setRemark] = useState("");
  const [err, seterr] = useState("");
  const [pdfdata, allData] = useState("");
  const [ip, setIp] = useState("");

  const logindata = localStorage.getItem("Login");

  const history = useNavigate();

  const dispatch = useDispatch();
  const pdfviewer = () => {
    const openWindow = window.open();
    openWindow.document.write(`<!DOCTYPE>
        ${ReactDOMServer.renderToStaticMarkup(<Pdf data={pdfdata} />)}`);
  };

  const SendData = (e) => {
    e.preventDefault();
    logindata
      ? axios
          .post("http://localhost:4000/insertdata", {
            order_from_country: data.country,
            shipAddr: shipAddr,
            shipTell: shipTell,
            shipEmail: shipEmail,
            shipPic: shipPic,
            consAddr: consAddr,
            consTell: consTell,
            consEmail: consEmail,
            consPic: consPic,
            competition: competition,
            volume: volume,
            port_of_loading,
            port_of_discharge,
            final_destination,
            comodities: comodities,
            freight_term: freight_term,
            remark: remark,
            dataID: data.user_id,
          })
          .then((res) => {
            res.data.msg === "Data inserted"
              ? toast.success(`${res.data.msg}`)
              : toast.error(`${res.data}`);
            allData(res.data.data);
          })
          .catch((err) => console.log(err))
      : toast.error("Your not logged in", {
          position: "top-center",
          autoClose: 11000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: 0,
        });
  };

  return (
    <div>
      <Grid>
        <Box
          component="form"
          onSubmit={SendData}
          style={{ textAlign: "center", marginTop: "30px" }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <Typography component="h4" variant="h5">
                SHIPPER
              </Typography>

              <TextField
                variant="standard"
                style={{ margin: "10px" }}
                required
                id="ShipAddr"
                label="Shipper Address"
                name="ShipAddr"
                autoComplete="ShipAddr"
                onChange={(e) => setShipAddr(e.target.value)}
                autoFocus
              />
              <TextField
                style={{ margin: "10px" }}
                variant="standard"
                // margin="normal"
                required
                id="shipTell"
                label="Shipper Tellephone"
                name="shipTell"
                autoComplete="shipTell"
                onChange={(e) => setShipTell(e.target.value)}
                autoFocus
              />
              <TextField
                style={{ margin: "10px" }}
                variant="standard"
                // margin="normal"
                required
                id="shipEmail"
                label="Shipper Email"
                name="shipEmail"
                autoComplete="shipEmail"
                onChange={(e) => setShipEmail(e.target.value)}
                autoFocus
              />
              <TextField
                style={{ margin: "10px" }}
                variant="standard"
                // margin="normal"
                required
                id="shipPic"
                label="Shipper PIC"
                name="shipPic"
                autoComplete="shipPic"
                onChange={(e) => setShipPic(e.target.value)}
                autoFocus
              />
            </div>
            <div>
              <Typography component="h4" variant="h5">
                CONSINGEE
              </Typography>
              <TextField
                style={{ margin: "10px" }}
                variant="standard"
                // margin="normal"
                required
                id="consAddr"
                label="Consignee address"
                name="consAddr"
                autoComplete="consAddr"
                onChange={(e) => setConsAddr(e.target.value)}
                autoFocus
              />
              <TextField
                style={{ margin: "10px" }}
                variant="standard"
                // margin="normal"
                required
                id="consTell"
                label="Consignee Tellephone"
                name="consTell"
                autoComplete="consTell"
                onChange={(e) => setConsTell(e.target.value)}
                autoFocus
              />
              <TextField
                style={{ margin: "10px" }}
                variant="standard"
                // margin="normal"
                required
                id="consEmail"
                label="Consignee Email"
                name="consEmail"
                autoComplete="consEmail"
                onChange={(e) => setConsEmail(e.target.value)}
                autoFocus
              />
              <TextField
                style={{ margin: "10px" }}
                variant="standard"
                // margin="normal"
                required
                id="consPic"
                label="Consignee PIC"
                name="consPic"
                autoComplete="consPic"
                onChange={(e) => setConsPic(e.target.value)}
                autoFocus
              />
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <Typography component="h4" variant="h5">
                  OTHER DETAILS
                </Typography>
                <TextField
                  style={{ margin: "10px" }}
                  variant="standard"
                  // margin="normal"
                  required
                  id="competition"
                  label="Competition"
                  name="competition"
                  autoComplete="competition"
                  onChange={(e) => setCompetition(e.target.value)}
                  autoFocus
                />
                <TextField
                  style={{ margin: "10px" }}
                  variant="standard"
                  // margin="normal"
                  required
                  id="volume"
                  label="Volume"
                  name="volume"
                  autoComplete="volume"
                  onChange={(e) => setVolume(e.target.value)}
                  autoFocus
                />
                <TextField
                  style={{ margin: "10px" }}
                  variant="standard"
                  // margin="normal"
                  required
                  id="port_of_loading"
                  label="Port of loading"
                  name="port_of_loading"
                  autoComplete="port_of_loading"
                  onChange={(e) => setport_of_loading(e.target.value)}
                  autoFocus
                />
                <TextField
                  style={{ margin: "10px" }}
                  variant="standard"
                  // margin="normal"
                  required
                  id="port_of_discharge"
                  label="Port of discharge"
                  name="port_of_discharge"
                  autoComplete="port_of_discharge"
                  onChange={(e) => setport_of_discharge(e.target.value)}
                  autoFocus
                />
                <TextField
                  style={{ margin: "10px" }}
                  variant="standard"
                  // margin="normal"
                  required
                  id="port_of_loading"
                  label="Port of loading"
                  name="port_of_loading"
                  autoComplete="port_of_loading"
                  onChange={(e) => setport_of_loading(e.target.value)}
                  autoFocus
                />
                <TextField
                  style={{ margin: "10px" }}
                  variant="standard"
                  // margin="normal"
                  required
                  id="port_of_discharge"
                  label="Port of discharge"
                  name="port_of_discharge"
                  autoComplete="port_of_discharge"
                  onChange={(e) => setport_of_discharge(e.target.value)}
                  autoFocus
                />
                <TextField
                  style={{ margin: "10px" }}
                  variant="standard"
                  // margin="normal"
                  required
                  id="final_destination"
                  label="Final destination"
                  name="final_destination"
                  autoComplete="final_destination"
                  onChange={(e) => setFinal_destination(e.target.value)}
                  autoFocus
                />
                <TextField
                  style={{ margin: "10px" }}
                  variant="standard"
                  // margin="normal"
                  required
                  id="commodity"
                  label="Commodity"
                  name="commodity"
                  autoComplete="commodity"
                  onChange={(e) => setComodities(e.target.value)}
                  autoFocus
                />
                <TextField
                  style={{ margin: "10px" }}
                  // margin="normal"
                  variant="standard"
                  required
                  id="freight"
                  label="freight terms"
                  name="freight"
                  autoComplete="freight"
                  onChange={(e) => setFreight_term(e.target.value)}
                  autoFocus
                />
                <Typography component="h4" variant="h5" marginTop="10%">
                  Remarks
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={10}
                  placeholder="Remarks"
                  style={{ width: 700, fontSize: "18px" }}
                  onChange={(e) => setRemark(e.target.value)}
                  autoFocus
                  required
                />
                <br />
                <Button type="submit" variant="outlined">
                  ORDER
                </Button>
                <Button variant="outlined" onClick={pdfviewer}>
                  PDF
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Grid>
    </div>
  );
}
