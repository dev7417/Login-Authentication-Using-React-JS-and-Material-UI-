import React, {useState} from 'react'
import { Form, Box, Typography, Grid, TextField, Button, Alert } from '@mui/material' 

export default function ResetpasswordForm() {
    const[error, setError] = useState({
        status: false,
        msg:"",
        type:""
    })
    const ResetOnClick=(e)=>{
        e.preventDefault();
        const resetData = new FormData(e.currentTarget);
        const getData = {
            newpassword: resetData.get('newpassword'),
            confirmpassword: resetData.get('confirmpassword')
        }
        if(getData.newpassword && getData.confirmpassword){
            setError({status:true, msg:"Data Sumbitted Successfully", type:"success"})
            console.log(getData);
        }else{
            setError({status:true, msg:"Please Filled the required fields", type:"error"});
        }
    }
  return (
    <>
    <Grid container justifyContent='center'>
        <Grid item sm={6} xs={12}>
           <Box component='form' id="reset-password-form" onClick={ResetOnClick}>
            <TextField sx={{mt:2}} required fullWidth name='newpassword' label='New Password' />
            <TextField sx={{mt:2}} required fullWidth name='confirmpassword' label='Confirm Password'/>
            <Box sx={{mt:2}} textAlign='center'>
                <Button  variant='contained' sm={{mt:3, mb:2, px:2}} type='submit'>Submit</Button>
            </Box>
            <Alert severity={error.type}>{error.msg}</Alert>
           </Box>
        </Grid>
    </Grid>
    </>
  )
}
