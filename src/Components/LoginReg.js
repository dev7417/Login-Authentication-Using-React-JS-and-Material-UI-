import React, { useState } from "react";
import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import Pic from "../Images/Pic-3.png";
import { fontWeight } from "@mui/system";
import UserLogin from "./UserLogin";
import Register from "./Register";
import LoadingSpinner from './LoadingSpinner'



const TabPanel = (props) => {
  const {children, value, index} = props;
  return(
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}

export default function LoginReg() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue)=>{
    setValue(newValue);

  }
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid textAlign = "left"
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${Pic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display:{xs:'none', sm:'block'}
           
          }}
        ></Grid>
        <Grid item lg={5} sm={7} xs={12} >
          <Card sx={{width:'100%', height:'100%',py:5}}>
            <Box>
          <Box sx={{borderBottom:1, borderColor:'divider'}}>
            <Tabs value={value} textColor="secondary" indicatorColor='secondary' onChange={handleChange}>
              <Tab label='Login' sx = {{textTransform:'none', fontWeight: 'bold'}}></Tab>
              <Tab label='Registration' sx = {{textTransform:'none', fontWeight:'bold'}}></Tab>
            </Tabs>
          </Box>
            <TabPanel value={value} index={0}  sx={{fontWeight:'bold', textTransform:'upperCase'}}><UserLogin/></TabPanel>
            <TabPanel value={value} index={1}><Register/></TabPanel>
          </Box> 
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
