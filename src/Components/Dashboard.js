import React from 'react'
import {Grid, Typography, Box, Button, CssBaseline } from '@mui/material'

export default function Dashboard() {
  return (
    <>
    <div>Dashboard</div>
        <CssBaseline/>
        <Grid>
            <Grid item sm ={4} sx={{backgroundColor:'gray', p:5, color:'white'}}>
                <Typography variant='h5'>Email: hello@gmail.com</Typography>
                <Typography variant='h4' sx={{mt:2}}>Peter</Typography>
                <Button variant='contained' color='warning' size='large' sx={{mt:6}}>Logout</Button>
            </Grid>
            <Grid item sm={8}>

            </Grid>
        </Grid>
    </>
  )
}
