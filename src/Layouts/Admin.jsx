import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation, Route, Switch, Redirect } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline';
// Components
import AdminHeader from "../Components/Headers/AdminHeader.jsx";
import Sidebar from "../Components/Sidebar/Sidebar.jsx";
import routes from "../routes";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
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

export default function Admin() {
    const classes = useStyles();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [activeRoute, setActiveRoute] = useState({
        index: -1,
        name: "Default"
    })
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const getCurrentRouteText = (path, thisRoutes) => {
        for (let i = 0; i < thisRoutes.length; i += 1) {
            const menu = thisRoutes[i];
            if (path.includes(menu.layout + menu.path) && !menu.subMenu) {
                setActiveRoute({
                    index: i,
                    name: menu.name
                })
            }
        }
        return "Brand";
    };

    const getRoutes = (layoutRoutes) => {
        return layoutRoutes.map((prop, key) => {
            // if a route doesn't have any subMenu and its layout is admin
            const propPath = prop.layout + prop.path;
            if (prop.layout === "/admin" && !prop.subMenu) {
                return (
                    <Route
                        exact
                        path={propPath}
                        component={() => <prop.component />}
                        key={key}
                    />
                );
            }
            return <Redirect to="/admin/error/404" key={key} />;
        });
    };

    useEffect(() => {
        getCurrentRouteText(location.pathname, routes)
    }, [location.pathname]);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AdminHeader drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen} isOpen={open} title={activeRoute.name} />
            <Sidebar drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose} isOpen={open} activeRouteIndex={activeRoute.index} setActiveRoute={setActiveRoute} routes={routes} />
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <Switch>{getRoutes(routes)}</Switch>
            </main>
        </div>
    );
}