import React from "react";
import { Grid, Card, Typography, Tabs, Tab, Box } from "@mui/material";
import Pic from "../Images/Pic-1.png";
import { fontWeight } from "@mui/system";

export default function LoginReg() {
  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${Pic})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Grid>
        <Grid item lg={5} sm={7} >
          <Card sx={{width:'100%', height:'100%'}}>
            <Box>
          <Box sx={{}}>
            <Tabs textColor="secondary" indicatorColor='secondary'>
              <Tab label='Login' sx = {{textTransform:'none', fontWeight: 'bold'}}></Tab>
              <Tab label='Registration' sx = {{textTransform:'none', fontWeight:'bold'}}></Tab>
            </Tabs>
          </Box>
          </Box> 
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
