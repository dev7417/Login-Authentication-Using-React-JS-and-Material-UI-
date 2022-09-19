import { Button, TextField, Box } from '@mui/material'
import React from 'react'

export default function ChangePassword() {
  return (
    <>
    <Box sx = {{display:'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth:600, mx:4}}>
        <h1>Change Password</h1>
        <Box component='form' noValidate sx={{mt:1}} id="Password-change-form">
            <TextField margin='normal' required fullWidth name='password' label='New Password' type='password' id='password'/>
            <TextField margin='normal' fullWidth required name='Confirm-password' label='Confirm Password' type='password' id='cnfm-password'/>
        </Box>
        <Box textAlign='center'>
            <Button type="submit" variant='contained' sx={{mt:2, px:3,mb:3}}>Update</Button>
        </Box>
    </Box>
    </>
  )
}
