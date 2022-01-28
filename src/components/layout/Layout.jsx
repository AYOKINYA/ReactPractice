
import React from "react";
import Header from "./Header";
import { useState } from "react";


import {createTheme, ThemeProvider } from '@mui/material/styles';
import SideMenuDrawer from "./SideMenuDrawer";

const Layout = () => {

    const mdTheme = createTheme();

    const [open, setOpen] = useState(true);

    const toggleDrawer = () => {setOpen(!open);}

    return (
        <>
        <ThemeProvider theme={mdTheme}>
            <Header open={open} toggleDrawer={toggleDrawer} />
            <SideMenuDrawer open={open} toggleDrawer={toggleDrawer} />
        </ThemeProvider>
        </>
    )
}

export default Layout;