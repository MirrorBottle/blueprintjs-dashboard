import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
// Components
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: props => props.drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: props => props.drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },

}));

function Sidebar({ handleDrawerClose, drawerWidth, isOpen, routes, activeRouteIndex, setActiveRoute }) {
    const classes = useStyles({ drawerWidth });
    const history = useHistory();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={isOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {routes.map((route, index) => (
                    <ListItem button key={index} selected={index === activeRouteIndex} onClick={() => {
                        setActiveRoute({ name: route.name, index })
                        history.push(route.layout + route.path)
                    }}>
                        <ListItemIcon><route.icon /></ListItemIcon>
                        <ListItemText primary={route.name} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

Sidebar.propTypes = {
    handleDrawerClose: PropTypes.func,
    drawerWidth: PropTypes.number,
    isOpen: PropTypes.bool,
    routes: PropTypes.array,
    activeRouteIndex: PropTypes.number,
    setActiveRoute: PropTypes.func,
}

export default Sidebar;
