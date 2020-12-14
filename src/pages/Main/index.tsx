import { AppBar, makeStyles, Typography, Badge, Toolbar, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import React from "react"
import { connect } from "react-redux"
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import clsx from 'clsx'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

const MainPage: React.FC = (props: any) => {



   const mainListItems = (
        <div>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
          </ListItem>
        </div>
      );
      
      const secondaryListItems = (
        <div>
          <ListSubheader inset>Saved reports</ListSubheader>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
          </ListItem>
        </div>
    );


    const drawerWidth = 240;

    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };


    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        toolbar: {
            paddingRight: 24, // keep right padding when drawer closed
        },
        drawerPaper: {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerPaperClose: {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
              width: theme.spacing(9),
            },
        },
        toolbarIcon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 8px',
            ...theme.mixins.toolbar,
        },
        title: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: 36,
        },
        menuButtonHidden: {
        display: 'none',
        },

    }))

    const classes = useStyles()



    return (

        <div className={classes.root}>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
                <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
            </Typography>
            <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
                </Badge>
            </IconButton>
            </Toolbar>
        </AppBar>

            <Drawer
            variant="permanent"
            classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
        </div>
    );
}


const mapStateToProps = (state: any) => ({
    ui: state.ui,
    auth: state.auth
});

export default connect(mapStateToProps)(MainPage)