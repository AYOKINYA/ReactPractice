
import React from "react";
import Header from "./Header";
import { useState } from "react";


import {createTheme, ThemeProvider } from '@mui/material/styles';
import SideMenuDrawer from "./SideMenuDrawer";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Content from "./Content";

const Layout = () => {

    const [open, setOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(true);

    const toggleDrawer = () => {setOpen(!open);}
    const toggleDarkMode = () => {setDarkMode(!darkMode)};

    const mdTheme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light"
        }
    });

    return (
        <>
        <ThemeProvider theme={mdTheme}>
            <CssBaseline/>
            <Box sx={{display: "flex"}}>
                <Header
                open={open}
                toggleDrawer={toggleDrawer}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode} />
                <SideMenuDrawer
                open={open}
                toggleDrawer={toggleDrawer} />
                <Box //이걸 해야 sidebar과 색으로 영역 구분
                component="main"
                sx={{backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                    flexGrow: 12,
                    width:"100vw",
                    height: '100vh',
                    overflow:'auto',
                }}>
                    <Toolbar/>
                    <Content/>
                </Box>
                
            </Box>
        </ThemeProvider>
        </>
    )
}

export default Layout;