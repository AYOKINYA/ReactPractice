
import MuiDrawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from '@mui/material/styles';
import { IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailIcon from '@mui/icons-material/Mail'
import DevicesIcon from "@mui/icons-material/Devices";
import EventIcon from "@mui/icons-material/Event";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import { drawerWidth } from './constants';

const SideMenuDrawer = ({open, toggleDrawer}) => {

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
          '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
              overflowX: 'hidden',
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
              width: theme.spacing(7),
              [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
              },
            }),
          },
        }),
      );
    
    return (
        <div>
            <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
                }}
            >
                <IconButton onClick={toggleDrawer}>
                  <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <MailIcon/>
                </ListItemIcon>
                <ListItemText primary="Mail" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <EventIcon/>
                </ListItemIcon>
                <ListItemText primary="Events" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ExploreIcon/>
                </ListItemIcon>
                <ListItemText primary="Explore" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FavoriteIcon/>
                </ListItemIcon>
                <ListItemText primary="Favorites" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>
                  <DevicesIcon/>
                </ListItemIcon>
                <ListItemText primary="Devices" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </List>
            </Drawer>
        </div>
    )
}

export default SideMenuDrawer;