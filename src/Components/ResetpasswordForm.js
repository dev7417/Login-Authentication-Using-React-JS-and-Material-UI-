import React from 'react'
import { Form, Box, Typography, Grid, TextField, Button } from '@mui/material' 

export default function ResetpasswordForm() {
  return (
    <>
    <Grid container justifyContent='center'>
        <Grid item sm={6} xs={12}>
           <Box component='Form' id="reset-password-form">
            <TextField sx={{mt:2}} required fullWidth name='newpassword' label='New Password' />
            <TextField sx={{mt:2}} required fullWidth name='confirmpassword' label='Confirm Password'/>
            <Box sx={{mt:2}} textAlign='center'>
                <Button secondary variant='contained' sm={{mt:3, mb:2, px:2}} type='submit'>Submit</Button>
            </Box>
           </Box>
        </Grid>
    </Grid>
    </>
  )
}
