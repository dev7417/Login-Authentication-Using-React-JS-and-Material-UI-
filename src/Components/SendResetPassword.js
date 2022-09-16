import React from 'react'
import {Grid, Form,Box, Button, Typography, Card, TextField} from '@mui/material'

export default function SendResetPassword() {
    const handleEmail = (e)=>{
        e.preventDefault();
        const emailData = new FormData(e.currentTarget);

        const getData = {
            email:emailData.get('email')
        }
        console.log(getData);
    }
  return (
    <>
    <Grid  container sx = {{mt:3}} justifyContent='center' >
        <Grid item sm = {6} xs={12}>
            <Box component='form' noValidate id="email-form" onClick={handleEmail}>
                <TextField fullWidth required name='email' label='Enter Your Email' id='forget-email'/>
                <Box sx = {{mt:2}} textAlign='center'>
                    <Button type="Submit"  variant="contained" sm={{mt:3, mb:2, px:2}}>Send</Button>
                </Box>
            </Box>
        </Grid>
    </Grid>
    </>
  )
}
