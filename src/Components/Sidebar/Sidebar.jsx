import React from 'react'
import PropTypes from 'prop-types';
import { Classes, Menu, MenuItem, Position, Drawer } from "@blueprintjs/core";
import { useHistory } from "react-router-dom"
import routes from "../../routes";
import Logo from "../../assets/images/logo.png"
function Sidebar({ handleClose, isOpen, activeRoute }) {
    const history = useHistory();
    const options = {
        autoFocus: true,
        canEscapeKeyClose: true,
        canOutsideClickClose: true,
        enforceFocus: true,
        hasBackdrop: true,
        position: Position.LEFT,
        size: Drawer.SIZE_SMALL,
        usePortal: true,
    };
    return (
        <Drawer
            onClose={handleClose}
            title={
                <div className="bp3-navbar-group bp3-align-left">
                    <img src={Logo} alt="" style={{ height: "100%" }} className="p1" />
                    <div className="bp3-navbar-heading">Blueprint</div>
                </div>
            }
            isOpen={isOpen}
            {...options}
        >
            <div className="bp3-drawer-body p1">
                <Menu large className={Classes.ELEVATION_1}>
                    {routes.map(route => (
                        <MenuItem key={route.id} icon={route.icon} text={route.name} onClick={() => !route.subMenu && history.push(`${route.layout + route.path}`)}>
                            {route.subMenu && route.subMenu.map(sub => (
                                <MenuItem key={sub.id} icon={sub.icon} text={sub.name} onClick={() => history.push(`${sub.layout + sub.path}`)} />
                            ))}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </Drawer>
    )
}

Sidebar.propTypes = {
    handleClose: PropTypes.func.isRequired,
    activeRoute: PropTypes.shape({
        index: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    isOpen: PropTypes.bool.isRequired,
}

export default Sidebar;
