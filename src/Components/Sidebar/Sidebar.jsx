import React from 'react'
import PropTypes from 'prop-types';
import { Classes, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import { useHistory } from "react-router-dom"
import routes from "../../routes";

function Sidebar() {
    const history = useHistory();
    return (
        <div className="sidenav">
            <Menu className={Classes.ELEVATION_1}>
                <MenuDivider title="Side Menu" />
                {routes.map(route => (
                    <MenuItem key={route.id} icon={route.icon} text={route.name} onClick={() => !route.subMenu && history.push(`${route.layout + route.path}`)}>
                        {route.subMenu && route.subMenu.map(sub => (
                            <MenuItem icon={sub.icon} text={sub.name} onClick={() => history.push(`${sub.layout + sub.path}`)} />
                        ))}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    )
}

Sidebar.propTypes = {
    activeRouteIndex: PropTypes.number.isRequired
}

export default Sidebar;
