import React, { useEffect } from 'react'
import SignUp from './LoginRegister/SignUp'
import Login from './LoginRegister/Login'
import MainPage from './Component/MainPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from 'react-redux'
import History from './Component/History';
import Dashboard from './Component/Dashboard';
import Drawer from "@mui/material/Drawer";
import { ToastContainer, toast } from "react-toastify";
import { styled, useTheme } from "@mui/material/styles";
import Pdf from "./PDF/Pdf";


export default function App() {
  const drawerWidth = 240;
  const login = localStorage.getItem('Login')
  const data = useSelector((state) => state)
  //  console.log("Login data", login);

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Router>
        {!login ? (
          <Routes>
            <Route path="*" element={<Login />} />
          </Routes>
        ) : (
          <MainPage>
            <Routes>
              <Route exact path='/' element={<Dashboard />} />
              <Route path="/history" element={<History />} />
              {/* <Route path="/pdf" element={<Pdf />} /> */}
            </Routes>
          </MainPage>
        )}
      </Router>
    </>
  )
}
