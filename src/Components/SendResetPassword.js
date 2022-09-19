import React, { useState } from "react";
import {
  Grid,
  Form,
  Box,
  Button,
  Typography,
  Card,
  TextField,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SendResetPassword() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleEmail = (e) => {
    e.preventDefault();
    const emailData = new FormData(e.currentTarget);

    const getData = {
      email: emailData.get("email"),
    };
    console.log(getData);
    if (getData.email) {
      navigate('/resetpasswordform')
      setError({
        status: true,
        msg: "Data Submitted Successfully",
        type: "success",
      });
    } else {
      setError({
        status: false,
        msg: "Please Fill The Required Field",
        type: "error",
      });
    }
  };
  return (
    <>
      <Grid container sx={{ mt: 3 }} justifyContent="center">
        <Grid item sm={6} xs={12}>
          <Box
            component="form"
            noValidate
            id="email-form"
            onClick={handleEmail}
          >
            <TextField
              fullWidth
              required
              name="email"
              label="Enter Your Email"
              id="forget-email"
            />
            <Box sx={{ mt: 2 }} textAlign="center">
              <Button
                type="Submit"
                variant="contained"
                sm={{ mt: 3, mb: 2, px: 2 }}
              >
                Send
              </Button>
            </Box>
            <Alert severity={error.type}>{error.msg}</Alert>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
