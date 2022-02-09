import { Toolbar } from "@mui/material";
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { drawerWidth } from './constants';


const BottomAppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        top: 'auto', 
        bottom: 0, 
        backgroundColor:"#23395d",
        color: theme.palette.text.primary,
        width: `calc(100% - ${theme.spacing(9)})`,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
            }),
    
        }),
}));

const Bottombar = ({open}) => {
    return (
        <div>
            <BottomAppBar position="fixed" open={open}>
                <Toolbar>
                    
                </Toolbar>
            </BottomAppBar>
        </div>
    )
}

export default Bottombar;