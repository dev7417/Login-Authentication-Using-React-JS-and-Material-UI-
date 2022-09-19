import React, { useState } from "react";
import { Button, Alert, Typography, Box, form, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const registerOnClick = (e) => {
    e.preventDefault();
    const registerData = new FormData(e.currentTarget);

    const mainData = {
      Name: registerData.get("Name"),
      email: registerData.get("email"),
      password: registerData.get("password"),
      Confirmpass: registerData.get("Confirmpass"),
    };
    if (mainData.Name && mainData.email) {
      if (mainData.password === mainData.Confirmpass) {
        console.log(mainData);
        console.log("Data Submitted Successfully");
        const localData = localStorage.setItem(
          "data",
          JSON.stringify(mainData)
        );
        setError({status:true, msg:"you have successfully registered, you will be redirected: Shortly", type:"success"})

      setTimeout(()=>{
        navigate("/dashboard");
      }, 3000)  
      }if(mainData.password!==mainData.Confirmpass){
        console.log("you are not allowed");
        setError({status: true, msg:"Your Password Doesnot match", type:"error"})
      }
    } else {
      console.log("Sorry");
      setError({
        status: true,
        msg: "Please Filled The Required Fields",
        type: "error",
      });
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        id="register-form"
        onSubmit={registerOnClick}
      >
        <TextField
          fullWidth
          name="Name"
          required
          label="Enter Your Name"
          id="Name"
          margin="normal"
          sx={{ fontSize: "normal" }}
        />
        <TextField
          fullWidth
          name="email"
          required
          label="Enter Your Email"
          id="email"
          margin="normal"
        />
        <TextField
          fullWidth
          name="password"
          required
          label="Password"
          type="password"
          id="password"
          margin="normal"
        />
        <TextField
          fullWidth
          name="Confirmpass"
          required
          id="Confirmpass"
          type="password"
          label="Confirm Password"
          margin="normal"
        />
        <Box textAlign="center">
          <Button
            type="Submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 2 }}
          >
            Sign Up
          </Button>
        </Box>
        <Alert severity={error.type}>{error.msg}</Alert>
      </Box>
    </>
  );
}
