import React from 'react'
import {
    form,
    TextField,
    Button,
    Box,
    Alert,
    Snackbar,
    IconButton,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { NavLink } from 'react-router-dom'

export default function UserLogin() {
    const [open, setOpen] = React.useState(false) //use useState hook for display the snackbar when we submit the form data
    const handleOnClick = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        const actualData = {
            email: data.get('email'),
            password: data.get('password'),
        }

        if (actualData.email && actualData.password) {
            console.log(actualData);
            document.getElementById('login-form').reset()
            setOpen(true)
        } else {
            console.log('Please fill the required field')
            setOpen(false)
        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    // for only snakbar
    const action = (
        <>
            <Button color="secondary" size="small" onClick={handleClose}>
              
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    )
    return (
        <>
            <Box
                component="form"
                noValidate
                sx={{ mt: 2 }}
                id="login-form"
                onClick={handleOnClick}
            >
                
                <TextField
                    required
                    margin="normal"
                    fullWidth
                    name="email"
                    id="email"
                    label="Enter Your Email"
                />
                <TextField
                    required
                    margin="normal"
                    type="password"
                    fullWidth
                    name="password"
                    id="password"
                    label="Enter Your Password"
                />
                <Box textAlign="center">
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, px: 2 }}
                    >
                        Login in
                    </Button>
                </Box>
                <NavLink to="/sendresetemail">Forgot Password?</NavLink>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Data Submitted Successfully"
                    action={action}
                />
            </Box>

           
                
            
        </>
    )
}
