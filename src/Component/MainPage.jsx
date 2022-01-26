import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { TextareaAutosize } from "@mui/material";
import { currentCountry } from "../Redux/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Login from "../LoginRegister/Login";
export default function MainPage() {
  const data = useSelector((state) => {
    return state;
  });
  const history = useNavigate();

  const dispatch = useDispatch();
  console.log(data);
  const theme = createTheme();
  const [Country, setCountry] = useState("");
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
  // const Country2 = data.country

  const logindata = localStorage.getItem("Login");

  const SendData = (e) => {
    e.preventDefault();
    logindata
      ? axios
          .post("http://localhost:4000/insertdata", {
            order_from_country: Country,
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
          })
          .then((res) => {
            res.data.msg === "Data inserted"
              ? toast.success(`${res.data.msg}`)
              : toast.error(`${res.data}`);
            console.log(res);
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
  useEffect(() => {
    axios
      .get("https://api.db-ip.com/v2/free/self")
      .then((res) => setCountry(res.data.countryName))
      .catch((err) => console.log(err));
    dispatch(currentCountry({ setCountry, Country }));
  }, []);

  function logout() {
    localStorage.clear();
    history("/loggedout");
  }
  // console.log(err);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="top-right"
          autoClose={11000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Button variant="outlined" onClick={() => logout()}>
          Log out
        </Button>

        <Typography component="h1" variant="h5">
          From {Country}
        </Typography>
        <Grid>
          <Box
            component="form"
            onSubmit={SendData}
            style={{ textAlign: "center", marginTop: "30px" }}
          >
            <Typography component="h4" variant="h5">
              SHIPPER
            </Typography>

            <TextField
              margin="normal"
              required
              id="ShipAddr"
              label="Shipper Address"
              name="ShipAddr"
              autoComplete="ShipAddr"
              onChange={(e) => setShipAddr(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="shipTell"
              label="Shipper Tellephone"
              name="shipTell"
              autoComplete="shipTell"
              onChange={(e) => setShipTell(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="shipEmail"
              label="Shipper Email"
              name="shipEmail"
              autoComplete="shipEmail"
              onChange={(e) => setShipEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="shipPic"
              label="Shipper PIC"
              name="shipPic"
              autoComplete="shipPic"
              onChange={(e) => setShipPic(e.target.value)}
              autoFocus
            />
            <Typography component="h4" variant="h5">
              CONSINGEE
            </Typography>
            <TextField
              margin="normal"
              required
              id="consAddr"
              label="Consignee address"
              name="consAddr"
              autoComplete="consAddr"
              onChange={(e) => setConsAddr(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="consTell"
              label="Consignee Tellephone"
              name="consTell"
              autoComplete="consTell"
              onChange={(e) => setConsTell(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="consEmail"
              label="Consignee Email"
              name="consEmail"
              autoComplete="consEmail"
              onChange={(e) => setConsEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="consPic"
              label="Consignee PIC"
              name="consPic"
              autoComplete="consPic"
              onChange={(e) => setConsPic(e.target.value)}
              autoFocus
            />
            <Typography component="h4" variant="h5">
              OTHER DETAILS
            </Typography>
            <TextField
              margin="normal"
              required
              id="competition"
              label="Competition"
              name="competition"
              autoComplete="competition"
              onChange={(e) => setCompetition(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="volume"
              label="Volume"
              name="volume"
              autoComplete="volume"
              onChange={(e) => setVolume(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="port_of_loading"
              label="Port of loading"
              name="port_of_loading"
              autoComplete="port_of_loading"
              onChange={(e) => setport_of_loading(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="port_of_discharge"
              label="Port of discharge"
              name="port_of_discharge"
              autoComplete="port_of_discharge"
              onChange={(e) => setport_of_discharge(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="final_destination"
              label="Final destination"
              name="final_destination"
              autoComplete="final_destination"
              onChange={(e) => setFinal_destination(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="commodity"
              label="Commodity"
              name="commodity"
              autoComplete="commodity"
              onChange={(e) => setComodities(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              id="freight"
              label="freight terms"
              name="freight"
              autoComplete="freight"
              onChange={(e) => setFreight_term(e.target.value)}
              autoFocus
            />

            <Typography component="h4" variant="h5">
              Remarks
            </Typography>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={10}
              placeholder="Remarks"
              style={{ width: 700, fontSize: "18px" }}
              onChange={(e) => setRemark(e.target.value)}
              autoFocus
            />
            <br />
            <Button type="submit" variant="outlined">
              ORDER
            </Button>
            <Button variant="outlined">PDF</Button>
          </Box>
        </Grid>
      </ThemeProvider>
    </div>
  );
}
