import { Toolbar } from "@mui/material";
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { drawerWidth } from './constants';
import PieDemo from "./PieDemo";


const BottomAppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        top: 'auto', 
        bottom: 0, 
        backgroundColor:"#23395d",
        color: theme.palette.text.primary,
        width: `calc(100% - ${1}px)`,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        ...(open && {
            overflowX: 'hidden',
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            }),
        }),
}));

const Bottombar = ({open}) => {
    return (
            <BottomAppBar position="fixed" open={open}>
                <Toolbar sx={{height: "64px"}}>
                    <PieDemo/>
                </Toolbar>
            </BottomAppBar>
    )
}

export default Bottombar;