
import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import {createTheme, ThemeProvider } from '@mui/material/styles';
import SideMenuDrawer from "./SideMenuDrawer";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import Cards from "./DemoCards";
import Bottombar from "./BottomBar";
import HlsPlayer from "../Video/HlsPlayer";
// import Login from "../Main/Login";
import Login from "./Login";
import html2canvas from "html2canvas";


import 'react-grid-layout/css/styles.css' 
import 'react-resizable/css/styles.css'
import './grid-style.css'

import { useSelector } from 'react-redux';

const Layout = () => {

    const vidRef = useRef(null);

    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);

    // const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const isLoggedIn = true

    const toggleDrawer = () => {setOpen(!open);}
    const toggleDarkMode = () => {setDarkMode(!darkMode)};

    const mdTheme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light"
        }
    });

    const capture = (e) => {
        console.log("Capture");
        html2canvas(vidRef.current).then((canvas) => {
            //   const vw = vidRef.current.offsetWidth;
            //   const vh = vidRef.current.offsetHeight;
            //   const x = e.nativeEvent.offsetX;
            //   const y = e.nativeEvent.offsetY;
  
            //   const cx = x / vw * canvas.width;
            //   const cy = y / vh * canvas.height;
            //   const left = Math.max(cx - 100, 0);
            //   const top = Math.max(cy - 100, 0);
            //   const width = Math.min(200, canvas.width - left);
            //   const height = Math.min(200, canvas.height - top);
  
            //   const img = canvas.getContext('2d').getImageData(left, top, width, height);
            //   const c = document.createElement("canvas");
            //   c.width = width;
            //   c.height = height;
            //   c.getContext('2d').putImageData(img, 0, 0);
            //   onSaveAs(c.toDataURL(), 'image-download.png');
  
            //   when pixel size fixed to 200px x 200px
              const vw = vidRef.current.offsetWidth;
              const vh = vidRef.current.offsetHeight;
              const x = e.nativeEvent.offsetX;
              const y = e.nativeEvent.offsetY;
  
              const cx = x / vw * canvas.width;
              const cy = y / vh * canvas.height;
              console.log("vw, vh :", `${vw}, ${vh}`)
              console.log("x, y :", `${x}, ${y}`)
              console.log("cw, ch :", `${canvas.width}, ${canvas.height}`)
              console.log("cx, cy :", `${cx}, ${cy}`)
              console.log("x-ratio, y-ratio :", `${x/vw}, ${y/vh}`)
              console.log("x-ratio, y-ratio :", `${cx/canvas.width}, ${cy/canvas.width}`)

            //   var img = canvas.getContext('2d').getImageData(cx - 100, cy - 30, 200, 200);
            //   const c = document.createElement("canvas");
            //   c.width = 200;
            //   c.height = 200;
            //   c.getContext('2d').putImageData(img, 0, 0);
            //   onSaveAs(c.toDataURL(), 'image-download.png')
        })
      }
  
      const onSaveAs = (url, filename) => {
        console.log("Save As");
        const link = document.createElement('a');
        document.body.appendChild(link);
        link.href = url;
        link.download = filename;
        link.click();
        document.body.removeChild(link);
      }
  
      const clickTarget = (e) => {
        console.log(e.target)
        if (
            (e.target.className !== 'react-grid-layout layout') && (e.target.className !== '') || // react-grid-layout 클릭 방지
            (e.nativeEvent.offsetY > vidRef.current.offsetHeight)
          ) {
              console.log("SKIP CAPTURE")
              return ;
          }
        
        capture(e);
      };

    return (
        <>
        <ThemeProvider theme={mdTheme}>
            <CssBaseline/>
            {
                !isLoggedIn && <Login />
            }
            { 
                isLoggedIn &&
            
            <Box sx={{display: "flex"}}>
                <Header
                open={open}
                toggleDrawer={toggleDrawer}
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode} />
                <SideMenuDrawer
                open={open}
                toggleDrawer={toggleDrawer} />
                <Box
                component="main"
                onClick={(e) => clickTarget(e)}
                className="content-wrapper"
                sx={{backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
                    flexGrow: 1,
                    width:"100vw",
                    height: '100vh',
                    // overflow:'auto',
                    backgroundColor: "#424242"
                }}>
                    <div style={{display:'flex', width: "100%",
                        height: "100%", position: 'relative'}}
                        > 
                    <HlsPlayer
                        src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
                        autoPlay={true}
                        muted={"muted"}
                        loop={"loop"}
                        controls={false}
                        width="100%"
                        height="100%"
                        vidRef={vidRef}
                    />
                    <div style={{position: "absolute", top: "0", bottom: "0", right: "0", left: "0" }}>
                        <Toolbar/>
                        <Cards open={open}/>
                    </div>
                    <Bottombar open={open}/>
                    </div>
                </Box>
            </Box>
            }
        </ThemeProvider>
        </>
    )
}

export default Layout;