
import React from "react";
import Header from "./Header";
import { useState } from "react";


import {createTheme, ThemeProvider } from '@mui/material/styles';
import SideMenuDrawer from "./SideMenuDrawer";
import { Box, CssBaseline } from "@mui/material";

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
            </Box>
        </ThemeProvider>
        </>
    )
}

export default Layout;