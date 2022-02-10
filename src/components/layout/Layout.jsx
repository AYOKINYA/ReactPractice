
import React from "react";
import Header from "./Header";
import { useState } from "react";
import {createTheme, ThemeProvider } from '@mui/material/styles';
import SideMenuDrawer from "./SideMenuDrawer";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Cards from "./DemoCards";
import Grid from "./DemoResponsiveCards"
import Bottombar from "./BottomBar";
import HlsPlayer from "../video/HlsPlayer";

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
                <Box //이걸 해야 sidebar와 색으로 영역 구분
                component="main"
                sx={{backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                    flexGrow: 1,
                    width:"100vw",
                    height: '100vh',
                    // overflow:'auto',
                    position: "relative",
                    backgroundColor: "#424242"
                }}>
                        {/* <video 
                        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" muted loop autoPlay
                        width="100%"
                        height="100%">
                        </video> */}
                        {/* <HlsPlayer
                            src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                            autoPlay={true}
                            muted="muted"
                            loop="loop"
                            controls={true}
                            width="100%"
                            height="100%"
                        /> */}
                        <div style={{position: "absolute", top: "0", bottom: "0", right: "0", left: "0" }}>
                            <Toolbar/>
                            <Cards open={open}/>
                            {/* <Grid open={open}/> */}
                        </div>
                    <Bottombar open={open}/>
                </Box>
            </Box>
        </ThemeProvider>
        </>
    )
}

export default Layout;