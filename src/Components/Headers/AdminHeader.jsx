import React from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => {
    return {
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: props => {
            return {
                width: `calc(100% - ${props.drawerWidth}px)`,
                marginLeft: props.drawerWidth,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            }
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        }
    }
});

function AdminHeader({ handleDrawerOpen, title, isOpen, drawerWidth }) {
    const classes = useStyles({ drawerWidth });

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: isOpen,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, isOpen && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
AdminHeader.propTypes = {
    handleDrawerOpen: PropTypes.func,
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    drawerWidth: PropTypes.number
}
export default AdminHeader;