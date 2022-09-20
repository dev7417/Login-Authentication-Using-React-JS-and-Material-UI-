import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  CssBaseline,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./ChangePassword";

export default function Dashboard() {
  const [error, setError] = useState({
    status: false,
    msg: " ",
    type: " ",
  });
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/LoginReg");
    }, 3000);
    setError({ status: true, msg: "Logout Successfully", type: "success" });
  };
  return (
    <>
      <CssBaseline />
      <Grid container sx={{ mt: 5, mx: 5 }}>
        <Grid
          item
          sm={4}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <Typography variant="h5">hello125@gmail.com</Typography>
          <Typography variant="h4" sx={{ mt: 2 }}>
            Peter
          </Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            sx={{ mt: 6 }}
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sm={8}>
          <ChangePassword />
        </Grid>
        {/* <Alert severity={error.type}>{error.msg}</Alert> */}
      </Grid>
    </>
  );
}
