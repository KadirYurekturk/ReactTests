import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'

export default function Layout() {

    const navigate = useNavigate();

    const logout = () => {
        navigate("/");
    }

    return (
        <div>
            <AppBar position='sticky'>
                <Toolbar sx={{ width: 640, m: 'auto' }}>
                    <Typography variant='h4' align='center' sx={{ flexGrow: 1 }}>
                        User App
                    </Typography>
                    <Button onClick={logout}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Outlet />
            </Container>

        </div>
    )
}
