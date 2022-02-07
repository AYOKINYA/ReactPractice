

import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { Badge, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { drawerWidth } from './constants';

const Header = ({open, toggleDrawer, darkMode, toggleDarkMode}) => {

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
      })(({ theme, open }) => ({
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        // [theme.breakpoints.up("sm")]: {
        //     zIndex: theme.zIndex.drawer + 1
        //   },
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));
    
    return (
        <div>
            <AppBar position ="absolute" open={open}>
                <Toolbar
                    sx={{
                    pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{
                        marginRight: '36px',
                        ...(open && { display: 'none' }),
                    }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                    >
                        Demo
                    </Typography>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDarkMode}
                    edge="start"
                    sx={{
                        ml: 0.5,
                        ...(open && { display: 'none' }),
                    }}>
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{
                        ml: 0.5
                    }}
                    >
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    sx={{
                        ml: 0.5,
                        ...(open && { display: 'none' }),
                    }}
                    >
                        <AccountCircleIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Header;