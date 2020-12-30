import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleIcon from '@material-ui/icons/People';

import DashboardRouter from '../DashboardRouter/index';
import { useRouteMatch, Redirect } from 'react-router-dom';

import { Link } from 'react-router-dom';

import './style.scss';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [loggedOut, setLoggedOut] = useState(false);

  const { path, url } = useRouteMatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if(loggedOut) {
    return <Redirect to="/" />
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Aladin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link className="link" to={`${url}`} >
            <ListItem button key="Index">
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="History" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/users`} >
            <ListItem button key="Users">
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/addAdmin`} >
            <ListItem button key="addAdmin">
              <ListItemIcon><PersonAddIcon /></ListItemIcon>
              <ListItemText primary="Add Admin" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/addCustomer`} >
            <ListItem button key="addCustomer">
              <ListItemIcon><PersonAddIcon /></ListItemIcon>
              <ListItemText primary="Add Customer" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/carpetStatuses`} >
            <ListItem button key="addCustomer">
              <ListItemIcon><PersonAddIcon /></ListItemIcon>
              <ListItemText primary="Carpet statuses" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/carpetTypes`} >
            <ListItem button key="addCustomer">
              <ListItemIcon><PersonAddIcon /></ListItemIcon>
              <ListItemText primary="Carpet types" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/addCarpetType`} >
            <ListItem button key="addCustomer">
              <ListItemIcon><PersonAddIcon /></ListItemIcon>
              <ListItemText primary="Add carpet type" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/dispatchOrders`}>
            <ListItem button key="dispatchOrders">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Dispatch orders" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/listDriverOrders`}>
            <ListItem button key="listDriverOrders">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="List of orders" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/forMeasurments`}>
            <ListItem button key="forMeasurments">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="For measure" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/measured`}>
            <ListItem button key="measured">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Measured orders" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/packed`}>
            <ListItem button key="packed">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Orders done" />
            </ListItem>
          </Link>
          <Link className="link" to={`${url}/forDrivers`}>
            <ListItem button key="forDrivers">
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Orders for delivery" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button key="Logout" onClick={() => {
            localStorage.removeItem("token");
            setLoggedOut(true);
          }}>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DashboardRouter path={path} />
      </main>
    </div>
  );
}